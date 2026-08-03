import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import styles from "./index.module.css";
import { useState } from "react";

function Layout() {

  const [fechada, setFechada] = useState(false);

  return (
    <div className={styles.layout}>

      <Sidebar
        fechada={fechada}
        setFechada={setFechada}
      />

      <main
        className={`${styles.conteudo} ${
          fechada ? styles.conteudoFechado : ""
        }`}
      >
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;