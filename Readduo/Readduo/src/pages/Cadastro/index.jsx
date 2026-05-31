import { useState } from "react";
import { auth } from "../../firebase";
import Imagem from "../../assets/Group 50.svg";
import styles from './index.module.css';
import Botao from "../../componentes/botao";

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

    <div className={styles.conteiner}>

      <div className={styles.LadoEsquerdo}>
      
      <div className={styles.LadoE_componentes}>

        <a href="/">
        voltar
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

        <p>
        © 2026 Readduo
      </p>
      </div>
      </div>

      <div className={styles.LadoDireito}>

      <form onSubmit={handleRegister} className={styles.ConteinerForm}>

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
        texto='Cadastrar'
        variante= 'login'
        />

        {erro && (
          <span className={styles.erro}>
            {erro}
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