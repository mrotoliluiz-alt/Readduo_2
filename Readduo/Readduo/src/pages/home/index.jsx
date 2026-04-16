import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';


function Home (){

    const navigate = useNavigate()

    return(
        
        
        <div className= {styles.conteiner}>
            <div className={styles.hover}>
                <h1 className={styles.marca}>Readduo</h1>
                <button className={styles.botoes} onClick={() => navigate('./login')}>Entrar</button>
                <button className={styles.botoes} onClick={() => navigate('./cadastro')}>Cadastrar</button>
                </div>
                
                
            
        </div>
        
        
    )
}

export default Home;