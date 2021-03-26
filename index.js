const redux = require("redux");
const createStore = redux.createStore;
const combineReducers =redux.combineReducers
const applyMiddleware =redux.applyMiddleware

const reduxLogger =require('redux-logger')
const logger =reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE";
const BUY_PIZZA="BUY_PIZZA";

// Action

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};

const buyPizza=()=>{
    return {
        type:BUY_PIZZA
    }
}

// (previousState, action) => newState

// const initialState = {
//   numberOfCake: 10,
//   numberOfPizzas:15,
// };

const initialCakeState={
    numberOfCake:10
}

const initialPizzaState={
    numberOfPizzas:20
}

// Reducer

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCake: state.numberOfCake - 1,
//       };
//       case BUY_PIZZA: return {
//           ...state,
//           numberOfPizzas:state.numberOfPizzas -1,
//       }

//     default:
//       return state;
//   }
// };


const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCake: state.numberOfCake -1
        }
        default: return state
    }
    
}

const pizzaReducer=(state=initialPizzaState,action)=>{
    switch(action.type){
        case BUY_PIZZA: return {
            ...state,
            numberOfPizzas:state.numberOfPizzas -1
        }
        default: return state
    }

}

// Store 

const rootReducers=combineReducers({
    cake:cakeReducer,
    pizza:pizzaReducer,
})

const store = createStore(rootReducers, applyMiddleware(logger))
console.log("initial state",store.getState());

//store.subscribe(()=>console.log("updated state",store.getState()))

const unsubscribe= store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyPizza())
store.dispatch(buyPizza())
store.dispatch(buyPizza())

unsubscribe()