import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/Group 50.svg";
import Botao from '../../componentes/botao';
import CardLivro from "../../componentes/cardLivro";

import {
  Flame,
  BookText,
  Star,
  LibraryBig
} from "lucide-react";

function Landing() {

    const navigate = useNavigate();

    return (
        <div className={styles.landing}>

            <nav className={styles.navbar}>

                <div className={styles.logo}>

                    <img src={logo} alt="logo" />

                    <div className={styles.titulo}>

                        <h1 className={styles.logoRead}>
                            Read
                        </h1>

                        <h1 className={styles.logoDuo}>
                            duo
                        </h1>

                    </div>

                </div>


                <div className={styles.boxBotoes}>

                    <Botao
                        texto="Entrar"
                        variante="secondary"
                        onClick={() => navigate("/login")}
                    />

                    <Botao
                        texto="Cadastrar"
                        variante="primary"
                        onClick={() => navigate("/cadastro")}
                    />

                </div>

            </nav>

            <div className={styles.conteudoPrincipal}>


                <div className={styles.esquerda}>

                    <div className={styles.Textos}>

                        <h2>
                            Leia para
                        </h2>

                        <h2>
                            <span className={styles.destaque}>
                                Conhecer
                            </span>, pratique
                        </h2>

                        <h2>
                            Para <span className={styles.destaque}>
                                aprender
                            </span>
                        </h2>

                        <h3>
                            O <span className={styles.destaqueMenor}>
                                Readduo
                            </span> é para você!
                        </h3>

                    </div>

                    <div className={styles.conteinerSinb}>

                        <div className={styles.sinb}>

                            <BookText color="#0FA6B3" />

                            <p>
                                Variedade de Livros!
                            </p>

                        </div>


                        <div className={styles.sinb}>

                            <Flame
                                color="#0FA6B3"
                                className={styles.icone}
                            />

                            <p>
                                Mantenha o Ritmo!
                            </p>

                        </div>


                        <div className={styles.sinb}>

                            <Star color="#0FA6B3" />

                            <p>
                                XP e Conquistas!
                            </p>

                        </div>

                    </div>

                </div>

                <div className={styles.direita}>

                    {/* 
                        Futuramente coloque a imagem aqui.

                        Exemplo:

                        <img
                            src={suaImagem}
                            alt="Ilustração do Readduo"
                        />
                    */}

                </div>

            </div>

            <section className={styles.baixo}>

                <h3 className={styles.livraria}>

                    <LibraryBig
                        color="#0FA6B3"
                        width={38}
                        height={33}
                    />

                    Conheça alguns de nossos livros

                </h3>


                <div className={styles.leitCard}>

                    <CardLivro
                        titulo="Deserto"
                        autor="Amigo loko"
                        tipo="Livro"
                    />

                    <CardLivro
                        titulo="Cuna"
                        autor="Herbert Frank"
                        tipo="Livro"
                    />

                    <CardLivro
                        titulo="Harry Poter"
                        autor="Minha varinha magica"
                        tipo="Livro"
                    />

                    <CardLivro
                        titulo="Duna"
                        autor="Frank Herbert"
                        tipo="Livro"
                    />

                    <CardLivro
                        titulo="O Peso das Palavras Cura a Alma"
                        autor="Sthefany Oliveira"
                        tipo="Livro"
                    />

                </div>

            </section>

        </div>
    );
}

export default Landing;