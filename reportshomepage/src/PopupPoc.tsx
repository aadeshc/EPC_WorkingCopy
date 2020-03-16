import React, { Component } from 'react';
import ReactDOM from 'react-dom' 

const containerEl = React.createContext(null)
var myExternalWindow = React.createContext(null)
class App extends React.PureComponent<{},any,any> {
    constructor(props) {
      super(props);
      
      this.state = {
        counter: 0,
        showWindowPortal: false,
      };
      
      this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
    } 

    toggleWindowPortal() {
        this.setState({
            showWindowPortal : !this.state.showWindowPortal   
        })
      }

      componentDidMount() {
        window.setInterval(() => {
          this.setState(state => ({
            ...state,
            counter: state.counter + 1,
          }));
        }, 1000);
      }


      render() {
        return (
          <div>
            <h1>Counter: {this.state.counter}</h1>
            
            <button onClick={this.toggleWindowPortal}>
              {this.state.showWindowPortal ? 'Close the' : 'Open a'} Portal
            </button>
            
            {this.state.showWindowPortal && (
              <div id="MyWindowPortal">
                <h1>Counter in a portal: {this.state.counter}</h1>
                <p>Even though I render in a different window, I share state!</p>
                
                <button onClick={() => this.setState({ showWindowPortal: false })} >
                  Close me!
                </button>
              </div>
            )}
          </div>
        );
      }
}

class MyWindowPortal extends React.PureComponent<{},any,any> {
    
    constructor(props) {
          
      super(props);
      this.context.containerEl = document.createElement('div');
      this.context.myExternalWindow = null
       
    }
    render() {
         
        // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
        return ReactDOM.createPortal(this.props.children, this.context.containerEl);
      }
      componentDidMount() {
        // STEP 3: open a new browser window and store a reference to it
        this.context.myExternalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
    
        // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
        this.context.myExternalWindow= document.body.appendChild(this.context.containerEl);
      }

      componentWillUnmount() {
        // STEP 5: This will fire when this.state.showWindowPortal in the parent component becomes false
        // So we tidy up by closing the window
        this.context.myExternalWindow.close();
      }
}

export default MyWindowPortal;