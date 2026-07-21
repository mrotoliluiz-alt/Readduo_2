import styles from "./index.module.css";
import Sidebar from "../../componentes/Sidebar";
import CardLivro from "../../componentes/cardLivro";
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
            <h2>Olá, nome do usuario</h2>

            <p>
              Continue sua jornada literária. Você está indo muito bem!!
            </p>
          </div>

          <div className={styles.stats}>

            <div className={styles.statCard}>
              <BookOpen color="#61a6fa"/>
              <h3>3</h3>
              <span>Lidos</span>
            </div>

            <div className={styles.statCard}>
              <PenTool color="#4ade80"/>
              <h3>4.2K</h3>
              <span>Palavras</span>
            </div>

            <div className={styles.statCard}>
              <Flame color="#fb923c"/>
              <h3>8 dias</h3>
              <span>Sequência</span>
            </div>

            <div className={styles.statCard}>
              <Star color="#ffdb0c"/>
              <h3>+850</h3>
              <span>XP</span>
            </div>

          </div>

        </section>

          <h2>Explore novos Caminhos</h2>

          <div className={styles.leitCard}>

            <CardLivro
            titulo="Duna"
            autor="Frank Herbert"
            tipo="Livro"
            imagem="img/duna.jpg"
            tag="Clássico"
            corTag="#4f7cff"
            />

            <CardLivro
            titulo="Duna"
            autor="Frank Herbert"
            tipo="Livro"
            imagem="img/duna.jpg"
            tag="Clássico"
            corTag="#4f7cff"
            />

            <CardLivro
            titulo="Duna"
            autor="Frank Herbert"
            tipo="Livro"
            imagem="img/duna.jpg"
            tag="Clássico"
            corTag="#4f7cff"
            />

            <CardLivro
            titulo="Duna"
            autor="Frank Herbert"
            tipo="Livro"
            imagem="img/duna.jpg"
            tag="Clássico"
            corTag="#4f7cff"
            />

            <CardLivro
            titulo="Duna"
            autor="Frank Herbert"
            tipo="Livro"
            imagem="img/duna.jpg"
            tag="Clássico"
            corTag="#4f7cff"
            />

          </div>

      </div>

    
  );
}

export default Home;

