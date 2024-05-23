import { useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type){
    case "UVECAJ":
      return { brojac: state.brojac + 1 };
      case "SMANJI":
        return { brojac: state.brojac - 1 };
        default:
          return state;
  }
};

const UseReducerPrimjer = () => {
  const [state, dispatch] = useReducer(reducer, {brojac: 0});
  return (
    <div>
      <p>BROJAC: {state.brojac}</p>
      <button onClick={() => dispatch({ type: "SMANJI" })}>SMANJI</button>
      <button onClick={() => dispatch({ type: "UVECAJ" })}>UVECAJ</button>
    </div>
  );
};

export default UseReducerPrimjer;
