import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import styles from './index.module.css';
import logo from "../../assets/Group 50.svg";
import Botao from '../../componentes/botao';
import { Navigate } from "react-router-dom";
import {
  House,
  BookOpen,
  ArrowLeft,
  PenTool,
  User,
  TimerReset,
  ClipboardCheck,
  Flame
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

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

    <div className={styles.ladoEsquerdo}>

      

      <div className={styles.leftContent}>

        <a href="/">
             Voltar ao Inicio <ArrowLeft></ArrowLeft>
          </a>

        {/* Logo e nome do site */}
        <div className={styles.logoBox}>
          <img src= {logo} alt="logo" />
          
          <h2 className={styles.titulo}>Read</h2>
          <h2 >duo</h2>
        </div>

        

        <div className={styles.texto}>
        
        <h2 className={styles.Hgrande}>
          <BookOpen size={40}></BookOpen> Bem-vindo de volta!
        </h2>

        <p>
          Continue explorando, lendo e praticando! Novas histórias esperam por você.
        </p>
        </div>

        <ul>
          <li> <TimerReset /> Retome onde parou</li>
          <li> <ClipboardCheck /> Novas missões te aguardam</li>
          <li> <Flame /> Sua sequência está ativa</li>
        </ul>

      </div>

      <p>
        © 2026 Readduo
      </p>

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

        <Botao
        texto='Entrar'
        variante= 'login'
        onClick={() => navigate('/Home')}
        />

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
