import { useState, useReducer } from 'react'
import './App.css';

const initialState = {count: 0, number: 2};

const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
      break;
    case 'DECREMENT':
      return {...state, count: state.count - 1};
      break;
    case 'RESET':
      return {...state, count: 0};
      break
    case 'AMOUNT':
      return {...state, count: state.count + action.payload};
      break
    case 'ADD':
      return {...state, number: state.number + 1};
      break
    default:
      throw new Error('Invalid action brooo')
  }
};

function App() {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementHandler = () => {
    // setCount((count) => count + 1)
    dispatch({type:'INCREMENT'})
  };

  const decrementHandler = () => {
    // setCount((count) => count - 1 )
    dispatch({type:'DECREMENT'})
  };

  const resetHandler = () => {
    // setCount(0)
    dispatch({type:'RESET'})
  };

  const amountHandler = () => {
    // setCount(0)
    dispatch({ type: 'AMOUNT', payload: 5 })
  };

  const addHandler = () => {
    dispatch({ type: 'ADD'})
  };
  return (
    <>
      <h1>Reducer</h1>
      <p>{state.count}</p>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={resetHandler}>reset</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={amountHandler}>AddByAmount</button>
      <hr />
      <p>{state.number}</p>
      <button onClick={addHandler}>AddNum</button>
    </>
  )
}

export default App
