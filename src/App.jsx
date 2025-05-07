import { useState } from "react";
import Perfil from "./components/perfil";
import ReposList from "./components/RepoList";
import Formulario from "./components/Formulario";
function App() {
  const [formEstaVisivel, setFormEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState("");
  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil user={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formEstaVisivel && <Formulario />}
      <button
        onClick={() => setFormEstaVisivel(!formEstaVisivel)}
        type="button"
      >
        toggle form
      </button> */}
    </>
  );
}

export default App;
