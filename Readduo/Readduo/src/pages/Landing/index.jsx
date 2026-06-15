import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/Group 50.svg";
import Botao from '../../componentes/botao';

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
                <h3>O <p className={styles.destaque}>Readduo</p> é pra você</h3>

                </div>

                

            </div>

            <div className={styles.direita}>


            </div>

            </div>

            

        </div>
    );
}

export default Landing;

