import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import styles from './index.module.css';
import imagem from "../../assets/Group 50.svg";


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
  <div className={styles.loginContainer}>

    {/* Lado esquerdo */}
    <div className={styles.ladoEsquerdo}>

      <button className={styles.backButton}>
        ← Voltar ao início
      </button>

      <div className={styles.leftContent}>

        <div className={styles.logoBox}>
          <span>Readduo</span>
        </div>

        <h1>
          Bem-vindo
          <br />
          de volta!
        </h1>

        <p>
          Continue sua jornada literária.
          Suas histórias e leituras estão esperando por você.
        </p>

        <ul>
          <li>✓ Retome onde parou</li>
          <li>✓ Novas missões te aguardam</li>
          <li>✓ Sua sequência está ativa</li>
        </ul>

      </div>

      <span className={styles.footer}>
        © 2026 Readduo
      </span>

    </div>

    {/* Lado direito */}
    <div className={styles.rightSide}>

      <form onSubmit={handleLogin} className={styles.formCard}>

        <h2>Entrar na conta</h2>

        <p>
          Digite suas credenciais para acessar
        </p>

        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">
          Entrar →
        </button>

        {erro && (
          <span className={styles.erro}>
            {erro}
          </span>
        )}

        <div className={styles.register}>
          Não tem conta?
          <a href="/Cadastro">
            Criar conta grátis
          </a>
        </div>

      </form>

    </div>

  </div>
);

}

export default Login;
