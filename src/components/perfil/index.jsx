import styles from "./Perfil.module.css";
const Perfil = ({ user }) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.avatar}
        src={`https://github.com/${user}.png`}
        alt=""
      />
      <h1 className={styles.name}>{user}</h1>
    </header>
  );
};
export default Perfil;
