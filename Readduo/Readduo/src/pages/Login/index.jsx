import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import styles from './index.module.css';
import imagem from "../../assets/Group 50.svg";
import imagemLogo from "../../assets/Group 55.png";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, senha);
      console.log("Usuário logado:", user.user);
      alert("Login realizado!");
    } catch (err) {
      setErro("Email ou senha inválidos");
    }
  };

  return (
    <div onSubmit={handleLogin} className={styles.conteiner}>

      <div className={styles.containerItens}>

          <div className={styles.Imagem}>

            <img src={imagem} alt="Imagem" />

          </div>
        <div className={styles.form}>

        <img src={imagemLogo} alt="Imagem" />

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

      <button type="submit" className={styles.bot}>Entrar</button>

      {erro && <p>{erro}</p>}

      </div>
      
      </div>
      
    </div>
  );
}

export default Login;
