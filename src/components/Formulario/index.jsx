import { useState, useEffect } from "react";
const Formulario = () => {
  const [materiaA, setmateriaA] = useState(0);
  const [materiaB, setmateriaB] = useState(0);
  const [materiaC, setmateriaC] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log("O componente iniciou");
    return () => {
      console.log("O componente foi removido");
    };
  }, []);
  const alteraNome = (evento) => {
    setNome((estadoAnterior) => {
      return evento.target.value;
    });
  };
  const result = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;
    if (media >= 7) {
      return <p>{nome} você foi aprovado</p>;
    } else {
      return <p>{nome} você foi Reprovado</p>;
    }
  };
  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}> {i} </li>
        ))}
      </ul>
      <input type="text" placeholder="Seu nome" onChange={alteraNome} />
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={(evento) => setmateriaA(parseInt(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={(evento) => setmateriaB(parseInt(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={(evento) => setmateriaC(parseInt(evento.target.value))}
      />
      {result()}
    </form>
  );
};
export default Formulario;
