const { createStore } = require('redux')

const initialState = {
    age: 21
}

const myreducer = (state = initialState, action) => {
    const newState = { ...state }
    if (action.type === "add") {
        newState.age += 1;
    }
    if (action.type === "subtract") {
        newState.age -= 1;
    }
    return newState
}

const store = createStore(myreducer);
store.subscribe(() => {
    console.log(store.getState())
})



store.dispatch({ type: "add" })
store.dispatch({ type: "add" })
store.dispatch({ type: "add" })
store.dispatch({ type: "subtract" })





