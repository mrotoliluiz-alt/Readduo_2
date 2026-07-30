
import styles from "./index.module.css";

function Botao({
    texto,
    onClick,
    type = "button",
    variante = "primary",
    disabled = false
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.botao} ${styles[variante]}`}
        >
            {texto}
        </button>
    );
}

export default Botao;

