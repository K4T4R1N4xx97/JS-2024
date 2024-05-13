import HelloFn from "./components/HelloFn";
import HelloCl from "./components/HelloCl";

const App = () => {
  return(
    <div>
      <HelloFn ime="Katarina" prezime="Sokolic">Ucimo React. Ovo su Props Childreni.</HelloFn>
      <HelloCl />
      <HelloCL ime="Ivan" prezime="Ivic">Ucimo React. Ovo su Props Childreni.</HelloCL>
    </div>
  );
};

export default App;
