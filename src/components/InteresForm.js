import React from 'react'
import { useState } from 'react'

export const InteresForm = () => {

  const [tna, setTna] = useState("");
  const [montoInicial, setMontoInicial] = useState("");
  const [plazo, setPlazo] = useState("");
  const [ciclos, setCiclos] = useState("");
  const [adicional, setAdicional] = useState("");
  const [resultado, setResultado] = useState("");
  const [resultadoNeto, setResultadoNeto] = useState("");


  const handleTnaChange = (event) => {
    setTna(event.target.value)
  }

  const handleMontoInicialChange = (event) => {
    setMontoInicial(event.target.value)
  }

  const handlePlazoChange = (event) => {
    setPlazo(event.target.value)
  }

  const handleCiclosChange = (event) => {
    setCiclos(event.target.value);
  }

  const handleAdicionalChange = (event) => {
    setAdicional(event.target.value);
  }


  React.useEffect(() => {

    const neto = () => {
      const tnaPorDia = ((tna / 365) / 100);
      const resParcial = (resultado) * ((tnaPorDia * plazo));
      return resParcial
    }
    setResultadoNeto(neto().toFixed(2));
  
    return () => {
      setResultadoNeto("")
    }
  }, [resultado])
  


  const handleSubmit = (event) => {
    const renovaciones = ciclos;
    event.preventDefault();
    setCiclos(ciclos < 1 ? 1 : ciclos);
    setResultado(interes(montoInicial, tna, plazo, renovaciones, adicional).toFixed(2));
    
  }

  const handleResetClick = (event) => {
    event.preventDefault();
    setTna("");
    setMontoInicial("");
    setPlazo("");
    setCiclos("");
    setAdicional("");
    setResultado("");
    setResultadoNeto("");
  }

  const handleMontoInicialUseClick = () => {
    setMontoInicial(resultado);
  }


  const interes = (montoInicial, tna, plazo, ciclos = 1, adicional = 0) => {
    const tnaPorDia = ((tna / 365) / 100);
    setAdicional(adicional *= 1);
    let resParcial = (montoInicial) * ((tnaPorDia * plazo) + 1);
    resParcial += adicional;
    if (ciclos > 1) {
      return interes(resParcial, tna, plazo, --ciclos, adicional);
    }
    return resParcial;
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label htmlFor="tna">TNA</label>
      <input id="tna" type="number" value={tna} onChange={handleTnaChange} />

      <label htmlFor="montoInicial">Monto Inicial</label>
      <input id="montoInicial" type="number" value={montoInicial} onChange={handleMontoInicialChange} />

      <label htmlFor="plazo">Plazo en días</label>
      <input id="plazo" type="number" value={plazo} onChange={handlePlazoChange} />

      <label htmlFor="ciclos">Renovaciones</label>
      <input id="ciclos" type="number" value={ciclos} onChange={handleCiclosChange} />

      <label htmlFor="adicional">Adicional por més</label>
      <input id="adicional" type="number" value={adicional} onChange={handleAdicionalChange} />

      <label htmlFor="resultado">Resultado</label>
      <input id="resultado" type="number" value={resultado} disabled />

      <label htmlFor="resultadoNeto">Inversión a un mes según resultado</label>
      <input id="resultadoNeto" type="number" value={resultadoNeto} disabled />

      <input type="submit" id="calcular" className='btn' value="Calcular" />
      <input type="reset" id="reset" className='btn' value="Limpiar" onClick={handleResetClick} />
      <input type="button" id="copiar" className='btn' value="Copiar Resultado en Monto Inicial" onClick={handleMontoInicialUseClick} />

    </form>
  )
}
