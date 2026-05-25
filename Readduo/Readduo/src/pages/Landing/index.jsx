import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';


import Botao from '../../componentes/botao';

function Landing() {

    const navigate = useNavigate();

    return (
        <div className={styles.conteiner}>

            <div className={styles.hover}>

                <div className={styles.titulo}>
                    <h1>Read</h1>
                    <h1>duo</h1>
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

export default Landing;