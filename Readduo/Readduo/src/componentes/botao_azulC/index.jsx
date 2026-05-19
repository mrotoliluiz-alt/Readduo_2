import styles from './index.module.css';

function BotaoC({ texto, onClick }) {
    return (
        <button className={styles.botoes} onClick={onClick}>
            {texto}
        </button>
    );
}

export default BotaoC;