import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0); 
  const [num2, setNum2] = useState(0); 
  const [resultado, Resultado] = useState(0); 
  
  const calcularSoma = () => {
    const resultadoCalculado = num1 + num2;
    Resultado(resultadoCalculado); 
  
  
  };

  return (
    <><div class="boom" >
      <h1>Calculadora</h1>
      <h2>Digite um número</h2>
      <input
        className="num1"
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <h2>Digite outro número</h2>
    
      <input
        className="num2"
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />

      <button onClick={calcularSoma}>Calcular</button>

      <h2>Resultado: {resultado}</h2>
    </div></>
  );
}

export default App;
