import React from 'react'
import { Button } from "./Button";
import { Display } from "./Display"

const buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "C", "=", "/"];

export const Calculator = (props) => {

  const [display, setDisplay] = React.useState("")

  const copiarEnCalc = () => {
    setDisplay(document.getElementById("resultado").value)
  }

  const handleBtnClick = (event) => {
    setDisplay(event.target.textContent === "=" ? () => {
      try {
        return eval(display)
      } catch (error) {
        return "Error"
      };
    } : event.target.textContent === "C" ? "" : display + event.target.textContent)
  }

  const resultado = (event) => {
    

  }

  const handleKeyPress = (event) => {
    event.preventDefault();
    setDisplay(event.key === "Enter" ? () => {
      try {
        return eval(display)
      } catch (error) {
        return "Error"
      };
    } : event.key === "c" ? "" : display + event.key)
  }

  return (
    <>
      <input type="button" id="copiarEnCalc" className='btn' value="Copiar Resultado en Calculadora" onClick={copiarEnCalc} />
      <div className="container" onKeyPress={handleKeyPress}>
        <Display value={display} />
        {buttons.map(button => <Button value={button} key={button} onClick={handleBtnClick} />)}
      </div>
    </>
  )
}
