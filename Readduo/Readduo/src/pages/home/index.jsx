import styles from "./index.module.css";
import Sidebar from "../../componentes/Sidebar";

function Home() {
  return (
    <div className={styles.layout}>

      <Sidebar />

      <main className={styles.main}>

        <header className={styles.header}>
          <h1>Início</h1>
        </header>

        <section className={styles.welcome}>

          <div>
            <h2>Olá, Luna! 👋</h2>

            <p>
              Continue sua jornada literária.
            </p>
          </div>

          <div className={styles.stats}>

            <div className={styles.statCard}>
              <h3>3</h3>
              <span>Livros</span>
            </div>

            <div className={styles.statCard}>
              <h3>4.2K</h3>
              <span>Palavras</span>
            </div>

            <div className={styles.statCard}>
              <h3>8 dias</h3>
              <span>Sequência</span>
            </div>

            <div className={styles.statCard}>
              <h3>+850</h3>
              <span>XP</span>
            </div>

          </div>

        </section>

        <section>
          <h2>Continue lendo</h2>
        </section>

      </main>

    </div>
  );
}

export default Home;

