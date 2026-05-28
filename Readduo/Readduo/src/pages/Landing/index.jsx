import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

import Botao from '../../componentes/botao';

function Landing() {

    const navigate = useNavigate();

    return (
        <div className={styles.landing}>

            <nav className={styles.navbar}>

                <div className={styles.titulo}>

                    <h1 className={styles.logoRead}>
                        Read
                    </h1>

                    <h1 className={styles.logoDuo}>
                        duo
                    </h1>

                </div>

                <div className={styles.boxBotoes}>

                    <button className={}>

                    </button>

                    <Botao
                        texto="Cadastrar"
                        onClick={() => navigate('/cadastro')}
                    />

                </div>

            </nav>

        </div>
    );
}

export default Landing;

