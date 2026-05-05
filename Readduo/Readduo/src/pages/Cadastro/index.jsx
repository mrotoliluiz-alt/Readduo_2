import { useState } from "react";
import { auth } from "../../firebase";
import ImagemLogo from "../../assets/Group 50.svg";
import Imagem from "../../assets/Group 55.png";
import styles from './index.module.css';

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      setSucesso("Conta criada com sucesso!");
      setErro("");
    } catch (err) {
      setErro("Erro ao criar conta");
      setSucesso("");
    }
  };

  return (
    <form className={styles.conteiner} onSubmit={handleRegister}>

        <div className={styles.containerItens}>
            
            <div className={styles.ImagemLogo}>

                <img src={ImagemLogo} alt="Imagem" />

            </div>

            <div className={styles.form}>

        <div className={styles.Imagem}>

                <img src={Imagem} alt="Imagem" />

            </div>

      <input
        type="name"
        placeholder="Nome"
        onChange={(e) => setEmail(e.target.value)}
        
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />

      <button className={styles.bot}  type="submit">Cadastrar</button>

      {erro && <p>{erro}</p>}
      {sucesso && <p>{sucesso}</p>}
      </div>
      
      </div>
      
    </form>
  );
}

export default Cadastro;