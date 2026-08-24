import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/Group 50.svg";
import Botao from "../botao";

function TopBar({ variante = "interno", children }) {

    const navigate = useNavigate();

    return (
        <nav
            className={`${styles.topBar} ${
                variante === "landing"
                    ? styles.topBarLanding
                    : styles.topBarInterno
            }`}
        >

            {/* LOGO */}
            <div className={styles.logo}>

                <img
                    src={logo}
                    alt="Logo Readduo"
                />

                <div className={styles.titulo}>

                    <h1 className={styles.logoRead}>
                        Read
                    </h1>

                    <h1 className={styles.logoDuo}>
                        duo
                    </h1>

                </div>

            </div>


            {/* CONTEÚDO DA TOP BAR */}
            <div className={styles.conteudo}>

                {variante === "landing" && (
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
                )}

                {variante === "interno" && children}

            </div>

        </nav>
    );
}

export default TopBar;