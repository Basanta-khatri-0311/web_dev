import React, { useReducer} from "react";

const UseReducerHook = () => {

  const initialState = {
   count: 0
  }

  const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrement':
            return {
                ...state,
                count: state.count -1
            }
        default:
            return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return <div>
    <h2>
        {state.count}
        <button onClick={ () => dispatch({type:'increment', payload:'1234'})}>+</button>
        <button onClick={ () => dispatch({type:'decrement'})}>-</button>
    </h2>
  </div>;
};

export default UseReducerHook;
