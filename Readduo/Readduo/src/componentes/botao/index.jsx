import styles from './index.module.css';

function Botao({ texto, onClick }) {
    return (
        <button className={styles.botoes} onClick={onClick}>
            {texto}
        </button>
    );
}

export default Botao;