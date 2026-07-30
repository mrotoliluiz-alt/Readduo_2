import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import styles from "./index.module.css";

function Layout() {
  return (
    <div className={styles.layout}>

      <Sidebar />

      <main className={styles.conteudo}>
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;