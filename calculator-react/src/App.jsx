import { useReducer } from 'react'
import './App.css'

const initialState = {
  num1: null,
  num2: null,
  operator: "+",
  result: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NUM1":
      return { ...state, num1: action.payload }

    case "SET_NUM2":
      return { ...state, num2: action.payload }

    case "SET_OPERATOR":
      return { ...state, operator: action.payload }

    case "CALCULATE":
      let result = 0;
      switch (state.operator) {
        case "+":
          result = state.num1 + state.num2;
          break;
        case "-":
          result = state.num1 - state.num2;
          break;
        case "*":
          result = state.num1 * state.num2;
          break;
        case "/":
          result = state.num1 / state.num2;
          break;
        default:
          break;
      }
      return { ...state, result }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CALCULATE" });
  }

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="title text-center text-white mb-4">Simple Calculator</h1>

        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="First number"
              className="form-control"
              value={state.num1 ?? ""}
              onChange={(e) => dispatch({ type: "SET_NUM1", payload: Number(e.target.value) })}
            />
            <select
              className="form-select"
              value={state.operator}
              onChange={(e) => dispatch({ type: "SET_OPERATOR", payload: e.target.value })}
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
            <input
              type="text"
              placeholder="Second number"
              className="form-control"
              value={state.num2 ?? ""}
              onChange={(e) => dispatch({ type: "SET_NUM2", payload: Number(e.target.value) })}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Calculate
          </button>
        </form>

        <p className="text-center mt-4 fs-3 text-success fw-bold">
          Result: {state.result}
        </p>
      </div>
    </div>
  )
}

export default App
