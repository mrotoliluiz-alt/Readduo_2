import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import imagem from "../../assets/Group 55.png";

import BotaoC from '../../componentes/botao_azulC';

function Home() {

    const navigate = useNavigate();

    return (
        <div className={styles.conteiner}>

            <div className={styles.hover}>

                <div className={styles.imagem}>
                    <img src={imagem} alt="Imagem" />
                </div>

                <div className={styles.hoBotao}>
                    <BotaoC
                        texto="Entrar"
                        onClick={() => navigate('./login')}
                    />

                    <BotaoC
                        texto="Cadastrar"
                        onClick={() => navigate('./cadastro')}
                    />
                </div>

            </div>

        </div>
    );
}

export default Home;