import { useState, useEffect } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    setErro(false);
    setEstaCarregando(true);

    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => {
        if (!res.ok) throw new Error("Usuário não encontrado");
        return res.json();
      })
      .then((resJson) => {
        setRepos(resJson);
        setEstaCarregando(false);
      })
      .catch((e) => {
        setErro(true);
        setEstaCarregando(false);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {estaCarregando && <h2>Carregando...</h2>}

      {!estaCarregando && erro && <h2>Usuário não encontrado</h2>}

      {!estaCarregando && !erro && (
        <ul className={styles.list}>
          {repos.map((repo) => (
            <li key={repo.id} className={styles.listItem}>
              <h3 className={styles.listItemName}>
                <b>Nome:</b> {repo.name}
              </h3>
              <p className={styles.listItemLanguage}>
                <b>Idioma:</b> {repo.language}
              </p>
              <a
                className={styles.listItemLink}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acessar
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
