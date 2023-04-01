import { useReducer } from "react";
import "./calculator.css"
import Digits from "./Digits";
import Operations from "./Operations";

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

  // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 }})
  return (
    <div className="grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">C</button>
      <button>D</button>
      <Operations operation="÷" dispatch={dispatch} />
      <Digits digit="1" dispatch={dispatch} />
      <Digits digit="2" dispatch={dispatch} />
      <Digits digit="3" dispatch={dispatch} />
      <Operations operation="*" dispatch={dispatch} />
      <Digits digit="4" dispatch={dispatch} />
      <Digits digit="5" dispatch={dispatch} />
      <Digits digit="6" dispatch={dispatch} />
      <Operations operation="+" dispatch={dispatch} />
      <Digits digit="7" dispatch={dispatch} />
      <Digits digit="8" dispatch={dispatch} />
      <Digits digit="9" dispatch={dispatch} />
      <Operations operation="-" dispatch={dispatch} />
      <Digits digit="." dispatch={dispatch} />
      <Digits digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  )
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
