import  React  from "react";
import './App.css';
import { InteresForm } from './components/InteresForm';
import { Calculator } from "./components/Calculator";

function App() {

  const [mostrar, setMostrar] = React.useState(false)

  const handleBtnClick = (event) => {
    setMostrar(event.target.className === "ocultar" ? true : false)
  }
  
  return (
    <div className="App">
      <InteresForm />
      {!mostrar && <button className="ocultar" onClick={handleBtnClick}>Ocultar Calculadora</button>}
      {mostrar && <button className="mostrar" onClick={handleBtnClick}>Mostrar calculadora</button>}
      {!mostrar && <Calculator />}
    </div>
  );
}

export default App;
