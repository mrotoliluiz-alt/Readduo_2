import styles from "./index.module.css";
import Sidebar from "../../componentes/Sidebar";
import {Flame, Star, House, PenTool, BookOpen } from "lucide-react";

function Home() {

  return (
    <div className={styles.Conteiner}>

      

        <div className={styles.header}>
          <House/>
          <h1>Início</h1>
        </div>

        <section className={styles.welcome}>

          <div>
            <h2>Olá, Luna! </h2>

            <p>
              Continue sua jornada literária. Você está indo muito bem!!
            </p>
          </div>

          <div className={styles.stats}>

            <div className={styles.statCard}>
              <BookOpen/>
              <h3>3</h3>
              <span>Livros</span>
            </div>

            <div className={styles.statCard}>
              <PenTool/>
              <h3>4.2K</h3>
              <span>Palavras</span>
            </div>

            <div className={styles.statCard}>
              <Flame/>
              <h3>8 dias</h3>
              <span>Sequência</span>
            </div>

            <div className={styles.statCard}>
              <Star/>
              <h3>+850</h3>
              <span>XP</span>
            </div>

          </div>

        </section>

        <section>
          <h2>Continue lendo</h2>
        </section>

      </div>

    
  );
}

export default Home;

