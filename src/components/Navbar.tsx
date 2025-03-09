// STYLES

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Criar conta</li>
        <li>Entrar</li>
        <li>Sair</li>
      </ul>
    </nav>
  );
};

export default Navbar;
