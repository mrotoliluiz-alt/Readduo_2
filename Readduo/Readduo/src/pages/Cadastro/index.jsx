import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import Imagem from "../../assets/Group 50.svg";
import styles from './index.module.css';
import Botao from "../../componentes/botao";
import {createUserWithEmailAndPassword} from "firebase/auth";

function Cadastro() {
  const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [confirmarSenha, setConfirmarSenha] = useState("");

const [erro, setErro] = useState("");
const [sucesso, setSucesso] = useState("");

const navigate = useNavigate();

  const handleRegister = async (e) => {
  e.preventDefault();

  if (senha !== confirmarSenha) {
    setErro("As senhas não coincidem");
    return;
  }

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

    <div className={styles.conteiner}>

      <div className={styles.LadoEsquerdo}>
      
      <div className={styles.LadoE_componentes}>

        <a href="/">
        -voltar
        </a>
        
        <h2>Readduo</h2>

        <h2 className={styles.Hgrande}>
          Comece sua 
          <br />
          Jornada hoje
        </h2>

        <p>Crie sua conta gratis e acesse uma 
          <br />
          comunidade de leitores e escritores
          <br />
          apaixonados 
        </p>

        
      </div>
      <p>
        © 2026 Readduo
      </p>
      </div>

      <div className={styles.LadoDireito}>

      <form onSubmit={handleRegister} className={styles.ConteinerForm}>

        <h2>Criar conta Gratis</h2>

        <p>
          preencha os dados para acessar
        </p>

      
      <input
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Crie uma senha (mín. 6 caracteres)"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirmar senha"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
      />



        <Botao
        texto='Cadastrar'
        variante= 'login'
        onClick={() => navigate("/Login")}
        />

          {erro && (
          <span className={styles.erro}>
            {erro}
          </span>
        )}

        {sucesso && (
          <span className={styles.sucesso}>
            {sucesso}
          </span>
        )}

        <div className={styles.Entrar}>
          Ja tem conta
          <a href="/Login">
            Entrar
          </a>
        </div>

      </form>

    

      
      </div>
      
    </div>








)
}

export default Cadastro;