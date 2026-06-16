import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/Group 50.svg";
import Botao from '../../componentes/botao';
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
                    <img src= {logo} alt="logo" />

                    
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

            <div className={styles.corpo}>

                <div className={styles.esquerda}>

                <div className={styles.Textos}>
                <h2>Leia para</h2>
                <h2> <span className={styles.destaque}>Conhecer</span>, pratique</h2>
                <h2>Para <span className={styles.destaque}>aprender</span></h2>
                <h3>O <span className={styles.destaqueMenor}>Readduo</span> é para você!</h3>

                </div>

                <div className={styles.conteinerSinb}>

                    <div className={styles.sinb}>
                        <p> <BookText color='#0FA6B3'></BookText> Variedade de Livros!</p>
                    </div>

                    <div className={styles.sinb}>
                        <p> <Flame color='#0FA6B3'></Flame> Mantenha o Ritmo!</p>
                    </div>

                    <div className={styles.sinb}>
                        <Star color='#0FA6B3'></Star>
                        <p>  XP e Conquistas!</p>
                    </div>
                    
                </div>

                <h3 className={styles.livraria}> <LibraryBig color='#0FA6B3' width={38} height={33}></LibraryBig> Conheça alguns de nossos livros </h3>

                

                

            </div>

            <div className={styles.direita}>


            </div>

            </div>

            

        </div>
    );
}

export default Landing;

