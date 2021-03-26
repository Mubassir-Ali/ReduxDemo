const redux = require("redux");
const createStore = redux.createStore;

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

const initialState = {
  numberOfCake: 10,
  numberOfPizza:15,
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };
      case BUY_PIZZA: return {
          ...state,
          numberOfPizza:state.numberOfPizza -1,
      }

    default:
      return state;
  }
};


// Store 
const store = createStore(reducer)
console.log("initial state",store.getState());

//store.subscribe(()=>console.log("updated state",store.getState()))

const unsubscribe= store.subscribe(()=>console.log("updated state",store.getState()))
store.dispatch(buyCake())
store.dispatch(buyPizza())

unsubscribe()