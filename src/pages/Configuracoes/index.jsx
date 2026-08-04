import styles from "./index.module.css";
import { useTheme } from "../../Tema/tema.jsx"; // ajuste o caminho conforme sua pasta

import {
  Settings,
  BadgeCheck,
  Bookmark,
  Feather,
  Flame,
  Star,
  Sun,
  Moon,
  Monitor,
  Lock,
  Smartphone,
  ChevronRight,
  Pencil,
} from "lucide-react";

const estatisticas = [
  {
    titulo: "Obras salvas",
    valor: "23",
    icone: <Bookmark size={24} />,
    classe: styles.azul,
  },
  {
    titulo: "Obras escritas",
    valor: "7",
    icone: <Feather size={24} />,
    classe: styles.verde,
  },
  {
    titulo: "Sequência",
    valor: "8 dias",
    icone: <Flame size={24} />,
    classe: styles.laranja,
  },
  {
    titulo: "XP acumulado",
    valor: "24.850",
    icone: <Star size={24} />,
    classe: styles.amarelo,
  },
];

const OPCOES_TEMA = [
  { nome: "Claro", valor: "light", icone: <Sun size={32} /> },
  { nome: "Escuro", valor: "dark", icone: <Moon size={32} /> },
  { nome: "Sistema", valor: "system", icone: <Monitor size={32} /> },
];

const acoes = [
  {
    titulo: "Alterar senha",
    descricao: "Atualize sua senha de acesso.",
    icone: <Lock size={22} />,
  },
  {
    titulo: "Gerenciar dispositivos",
    descricao: "Veja e gerencie seus dispositivos conectados.",
    icone: <Smartphone size={22} />,
  },
];

function Configuracoes() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.container}>
      {/* HEADER */}

      <div className={styles.header}>
        <div className={styles.titulo}>
          <Settings />

          <div>
            <h1>Configurações</h1>

            <p>Personalize sua experiência e gerencie sua conta.</p>
          </div>
        </div>
      </div>

      <section className={styles.profileCard}>
        <div className={styles.esquerda}>
          <div className={styles.avatar}>
            <img src="https://i.pravatar.cc/300?img=5" alt="" />

            <button>
              <Pencil size={15} />
            </button>
          </div>

          <div className={styles.info}>
            <div className={styles.nome}>
              <h2>Luna Silveira</h2>

              <span>
                <BadgeCheck size={15} />
                Verificada
              </span>
            </div>

            <p>viagem.literaria@gmail.com</p>

            <small>Membro desde 15/04/2024 • Brasil</small>

            <button className={styles.editar}>
              <Pencil size={18} />
              Editar perfil
            </button>
          </div>
        </div>

        <div className={styles.nivel}>
          <div className={styles.estrela}>
            <Star size={28} />
          </div>

          <h2>12</h2>

          <span>Nível</span>
        </div>
      </section>

      {/* ESTATÍSTICAS */}

      <section className={styles.stats}>
        {estatisticas.map((item, index) => (
          <div key={index} className={`${styles.statCard} ${item.classe}`}>
            <div className={styles.icon}>{item.icone}</div>

            <h2>{item.valor}</h2>

            <span>{item.titulo}</span>
          </div>
        ))}
      </section>

      {/* APARÊNCIA */}

      <section className={styles.card}>
        <h2>Aparência</h2>

        <p>Escolha como o Readduo aparece para você.</p>

        <div className={styles.temas}>
          {OPCOES_TEMA.map((opcao) => {
            const ativo = theme === opcao.valor;

            return (
              <button
                key={opcao.valor}
                className={`${styles.tema} ${ativo ? styles.temaAtivo : ""}`}
                onClick={() => setTheme(opcao.valor)}
              >
                <div className={styles.temaIcone}>{opcao.icone}</div>

                <span>{opcao.nome}</span>

                {ativo && <div className={styles.check}>✓</div>}
              </button>
            );
          })}
        </div>
      </section>

      {/* AÇÕES */}

      <section className={styles.card}>
        <h2>Ações rápidas</h2>

        <div className={styles.acoes}>
          {acoes.map((item, index) => (
            <button key={index} className={styles.acao}>
              <div className={styles.acaoEsquerda}>
                <div className={styles.acaoIcone}>{item.icone}</div>

                <div>
                  <strong>{item.titulo}</strong>

                  <span>{item.descricao}</span>
                </div>
              </div>

              <ChevronRight size={18} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Configuracoes;