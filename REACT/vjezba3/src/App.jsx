import { useReducer } from "react";
import { postReducer, POCETNO_STANJE } from "./components/postReducer";

const App = () => {
  const [state, dispatch] = useReducer(postReducer, POCETNO_STANJE);

  const postFetch = () => {
    dispatch({ type: "FETCH_START" });    
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "FETCH_USPJEH", payload: data });
    })
    .catch((error) => {
      dispatch({ type: "FETCH_ERROR" });
    });
  };
  return <div>
    <button onClick={postFetch}>{state.loading ? "Dohvati Usere" : "Ucitavamo..."}</button>
    <p>{state.post.title}</p>
    <p>{state.error && "Doslo je do pogreske"}</p>
  </div>;
};

export default App;
