import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import imagem from "../../assets/Group 55.png";


function Home (){

    const navigate = useNavigate()

    return(
        
        
        <div className= {styles.conteiner}>
            <div className={styles.hover}>
                <div className={styles.imagem}>
                    
                    <img src={imagem} alt="Imagem" />
                    
                    </div>
                
                    <div className={styles.hoBotao}>
                        <button className={styles.botoes} onClick={() => navigate('./login')}>Entrar</button>
                <button className={styles.botoes} onClick={() => navigate('./cadastro')}>Cadastrar</button>
                </div>
                
                </div>
                
                
            
        </div>
        
        
    )
}

export default Home;