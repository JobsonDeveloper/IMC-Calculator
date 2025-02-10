import { useEffect, useState } from "react";
import "./App.css";

// Components
import { Button } from "./components/buttons";
import { Input } from "./components/inputs";

function App() {
  const [numResultado, setNumResultado] = useState();
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [abaixoPeso, setAbaixoPeso] = useState("");
  const [pesoIdeal, setPesoIdeal] = useState("");
  const [leveAcimaPeso, setLeveAcimaPeso] = useState("");
  const [obesidadeI, setObesidadeI] = useState("");
  const [obesidadeII, setObesidadeII] = useState("");
  const [obesidadeIII, setObesidadeIII] = useState("");

  function resetaClasses() {
    setAbaixoPeso("");
    setPesoIdeal("");
    setLeveAcimaPeso("");
    setObesidadeI("");
    setObesidadeII("");
    setObesidadeIII("");
  }

  const calculoIMC = (ev) => {
    ev.preventDefault();

    if (peso && altura) {
      let numPeso = parseFloat(peso);
      let numAltura = parseFloat(altura);
      const numResultado = (numPeso / (numAltura * numAltura)).toFixed(1);

      setNumResultado(numResultado);

      if (numResultado <= 18.5) {
        resetaClasses();
        setAbaixoPeso("tabla__item--selecionado");
      }
      else if ((numResultado >= 18.6) && (numResultado <= 24.9)) {
        resetaClasses();
        setPesoIdeal("tabla__item--selecionado");
      }
      else if ((numResultado >= 25.0) && (numResultado <= 29.9)) {
        resetaClasses();
        setLeveAcimaPeso("tabla__item--selecionado");
      }
      else if ((numResultado >= 30.0) && (numResultado <= 34.9)) {
        resetaClasses();
        setObesidadeI("tabla__item--selecionado");
      }
      else if ((numResultado >= 35.0) && (numResultado <= 39.9)) {
        resetaClasses();
        setObesidadeII("tabla__item--selecionado");
      }
      else {
        resetaClasses();
        setObesidadeIII("tabla__item--selecionado");
      }
    }
  }

  return (
    <main className="container">
      <h1 className="container__titulo">Calcule o seu IMC</h1>
      <form className="container__form" onSubmit={calculoIMC}>
        <Input tipo="text" placeholder="Altura" changeValueState={setAltura} />
        <Input tipo="text" placeholder="Peso" changeValueState={setPeso} />
        <Button nome="CALCULAR" tipo="submit" />
      </form>

      <section className="resultados">
        <h2 className="resultado__numero">
          {numResultado}
        </h2>
      </section>

      <ul className="tabela">
        <li className={`tabla__item ${abaixoPeso}`}>Abaixo do peso</li>
        <li className={`tabla__item ${pesoIdeal}`}>Peso ideal</li>
        <li className={`tabla__item ${leveAcimaPeso}`}>Levemente acima do peso</li>
        <li className={`tabla__item ${obesidadeI}`}>Grau I de obesidade</li>
        <li className={`tabla__item ${obesidadeII}`}>Grau II de obesidade</li>
        <li className={`tabla__item ${obesidadeIII}`}>Grau III de obesidade</li>
      </ul>
    </main>
  )
}

export default App
