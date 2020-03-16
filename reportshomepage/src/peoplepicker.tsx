import * as React from 'react';
import $ from 'jquery'
import { CompactPeoplePicker, IPersonaProps, IBasePickerSuggestionsProps, ValidationState } from 'office-ui-fabric-react';
declare var _spPageContextInfo, jQuery, _spFormDigestRefreshInterval,UpdateFormDigest: any;

export interface ISPPeoplePickerProps {
    defaultValues?: IPersonaProps[];
    pickerEnabled?: boolean;
    multi?: boolean;
    onChange?(people: IPersonaProps[]): void;
}

export class SPPeoplePicker extends React.Component<ISPPeoplePickerProps, any> {
    constructor(props: ISPPeoplePickerProps) {
        super(props);

        //Initialize the state with Default Values
        this._onFilterChanged = this._onFilterChanged.bind(this);
        this._onStateChange = this._onStateChange.bind(this);
    }

    public render(): React.ReactElement<null> {
        const suggestionProps: IBasePickerSuggestionsProps = {
            noResultsFoundText: 'No results found',
            loadingText: 'Loading',
            showRemoveButtons: true,
        };

        return (
            <div>
                <CompactPeoplePicker onResolveSuggestions={this._onFilterChanged} itemLimit={this.props.multi?100:1}
                    onChange={this._onStateChange}
                    className={this.props.pickerEnabled?'ms-PeoplePicker':'disable-PeoplePicker'} disabled={!this.props.pickerEnabled}
                    pickerSuggestionsProps={suggestionProps} removeButtonAriaLabel=""
                    selectedItems={this.props.defaultValues} 
                    onValidateInput={this._validateInput} />
            </div>
        );
    }

    private _onFilterChanged(filterText: string, currentPersonas: IPersonaProps[], limitResults?: number) {

        //Limit the number of input characters to entered at least 3
        if (filterText && filterText.length >= 3) {
            return this._getResultsAsPromise(filterText);
        } else {
            return [];
        }
    }

    private _onStateChange(currentPersonas: IPersonaProps[]) {
        if (this.props.onChange) {
            
            if(currentPersonas.length > 0 && currentPersonas[currentPersonas.length-1].imageInitials === "!")
            {
                currentPersonas.pop();
            }
            
            this.props.onChange(currentPersonas);
        }
    }

    private _getResultsAsPromise(filterText: string): Promise<IPersonaProps[]> {
        return new Promise<IPersonaProps[]>((resolve, reject) => {

            //This is essential to always referesh form digest value for any SP REST post request 
            UpdateFormDigest(_spPageContextInfo.webServerRelativeUrl, _spFormDigestRefreshInterval);

            //http://sharepointfieldnotes.blogspot.com/2014/06/sharepoint-2013-clientpeoplepicker.html
            let url = `${_spPageContextInfo.siteServerRelativeUrl}/_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser`;
            var query = { 'queryParams': { 'QueryString': filterText, 'MaximumEntitySuggestions': 30, 'AllowEmailAddresses': false, 
            'AllowOnlyEmailAddresses': false, 'PrincipalType': 15, 'PrincipalSource': 1 } };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json;odata=minimalmetadata',
                    'Content-Type': 'application/json;odata=minimalmetadata',
                    'Cache': 'no-cache',
                    'X-RequestDigest': jQuery('#__REQUESTDIGEST').val()
                },
                credentials: 'include',
                body: JSON.stringify(query)
            }).then((res) => {
                return res.json();
            }).then((suggestions: any) => {
                let people: any[] = JSON.parse(suggestions.value);
                let personas: IPersonaProps[] = [];

                for (var i = 0; i < people.length; i++) {
                    var p = people[i];
                    let s: IPersonaProps = {};
                    s.id =  p.EntityData.PrincipalType === "User" ? p.EntityData.SPUserID : p.EntityData.SPGroupID;
                    s.text = p.DisplayText;
                    //s.imageUrl = `/_layouts/15/userphoto.aspx?size=S&accountname=${p.EntityData.Email}`;
                    //s.imageShouldFadeIn = true;
                    personas.push(s);
                }
                return resolve(personas);
            }).catch(() => {
                return reject([]);
            });
        });
    }

    private _validateInput = (input: string): ValidationState => {
        if (input.indexOf('@') !== -1) {
          return ValidationState.valid;
        } else if (input.length > 1) {
          return ValidationState.warning;
        } else {
          return ValidationState.invalid;
        }
    };
}