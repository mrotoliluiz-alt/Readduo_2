import { useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.css";
import logo from "../../assets/Group 50.svg";
import {
  House,
  BookOpen,
  Search,
  Target,
  PenTool,
  GraduationCap
} from "lucide-react";
import { useState } from "react";


function Sidebar() {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>

      <div className={styles.logo}>
        <div className={styles.logoIcon}>
            <img src={logo} alt="logo" />
        </div>

        <h2>Readduo</h2>
      </div>

      <nav className={styles.nav}>

    <button
        className={
            location.pathname === "/home"
                ? styles.menuAtivo
                : styles.menu
        }
        onClick={() => navigate("/home")}
    >
        🏠
        <span>Início</span>
    </button>

    <button
        className={
            location.pathname === "/oficina"
                ? styles.menuAtivo
                : styles.menu
        }
        onClick={() => navigate("/oficina")}
    >
        📚
        <span>Oficina</span>
    </button>

    <button
        className={
            location.pathname === "/Pesquisa"
                ? styles.menuAtivo
                : styles.menu
        }
        onClick={() => navigate("/Pesquisa")}
    >
        🔍
        <span>Pesquisa</span>
    </button>

</nav>

    </aside>
  );
}

export default Sidebar;

