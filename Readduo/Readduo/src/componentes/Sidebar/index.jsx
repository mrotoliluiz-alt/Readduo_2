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

function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.logo}>
        <div className={styles.logoIcon}>
            <img src={logo} alt="logo" />
        </div>

        <h2>Readduo</h2>
      </div>

      <nav className={styles.menu}>

        <a className={styles.active}>
          <House size={20} />
          Início
        </a>

        <a>
          <BookOpen size={20} />
          Biblioteca
        </a>

        <a>
          <Search size={20} />
          Explorar
        </a>

        <a>
          <Target size={20} />
          Missões
        </a>

        <a>
          <PenTool size={20} />
          Oficina Autoral
        </a>

        <a>
          <GraduationCap size={20} />
          Área de Estudo
        </a>

      </nav>

      <div className={styles.missaoCard}>

        <div className={styles.missaoIcon}>
          ✨
        </div>

        <h3>Continue evoluindo!</h3>

        <p>
          Complete leituras e desbloqueie conquistas.
        </p>

        <button>
          Ver missões
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;

