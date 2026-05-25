import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import imagem from "../../assets/Group 55.png";

import Botao from '../../componentes/botao';

function HomeAntes() {

    const navigate = useNavigate();

    return (
        <div className={styles.conteiner}>

            <div className={styles.hover}>

                <div className={styles.imagem}>
                    <img src={imagem} alt="Imagem" />
                </div>

                <div className={styles.hoBotao}>
                    <Botao
                        texto="Entrar"
                        onClick={() => navigate('./login')}
                    />

                    <Botao
                        texto="Cadastrar"
                        onClick={() => navigate('./cadastro')}
                    />
                </div>

            </div>

        </div>
    );
}

export default HomeAntes;