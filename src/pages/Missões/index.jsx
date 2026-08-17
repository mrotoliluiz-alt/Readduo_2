import styles from "./index.module.css";

import {
  Target,
  Flame,
  Star,
  Trophy,
  Gift,
  BookOpen,
  PenTool,
  GraduationCap,
  Lock,
  Check,
  Clock3,
  ChevronRight,
} from "lucide-react";

const cards = [
  {
    titulo: "Sequência",
    valor: "8 dias",
    subtitulo: "Melhor sequência",
    cor: "#FB923C",
    icone: <Flame size={28} />,
  },
  {
    titulo: "XP Hoje",
    valor: "+95 XP",
    subtitulo: "Ganhos hoje",
    cor: "#FACC15",
    icone: <Star size={28} />,
  },
  {
    titulo: "Missões",
    valor: "2 / 5",
    subtitulo: "Concluídas",
    cor: "#0FA6B3",
    icone: <Trophy size={28} />,
  },
  {
    titulo: "Baú",
    valor: "1",
    subtitulo: "Disponível",
    cor: "#8B5CF6",
    icone: <Gift size={28} />,
  },
];

const missoes = [
  {
    titulo: "Leitura diária",
    descricao: "Leia por 30 minutos",
    xp: "+50 XP",
    status: "atual",
    icone: <BookOpen size={28} />,
  },
  {
    titulo: "Escrita do dia",
    descricao: "Escreva 500 palavras",
    xp: "+75 XP",
    status: "concluida",
    icone: <PenTool size={28} />,
  },
  {
    titulo: "Aprendizado",
    descricao: "Conclua uma lição",
    xp: "+100 XP",
    status: "bloqueada",
    icone: <GraduationCap size={28} />,
  },
  {
    titulo: "Baú Diário",
    descricao: "Complete todas as missões",
    xp: "+500 XP",
    status: "bonus",
    icone: <Gift size={28} />,
  },
];

function Missoes() {
  return (
    <div className={styles.container}>

      {/* Header */}

      <div className={styles.header}>
        <div className={styles.titulo}>
          <Target />
          <h1>Missões</h1>
        </div>

        <p>
          Complete desafios diários, ganhe XP e evolua no Readduo.
        </p>
      </div>

      {/* Cards */}

      <section className={styles.cards}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ borderColor: card.cor }}
          >
            <div
              className={styles.cardIcon}
              style={{ color: card.cor }}
            >
              {card.icone}
            </div>

            <div>
              <h2>{card.valor}</h2>
              <span>{card.titulo}</span>
              <small>{card.subtitulo}</small>
            </div>
          </div>
        ))}
      </section>

      {/* Tabs */}

      <div className={styles.tabs}>
        <button className={styles.active}>Diárias</button>
        <button>Semanais</button>
        <button>Conquistas</button>
        <button>Recompensas</button>
      </div>

      {/* Layout */}

      <div className={styles.layout}>

        {/* Caminho */}

        <main className={styles.trilha}>

          {missoes.map((missao, index) => (

            <div
              key={index}
              className={styles.missao}
            >

              <div
                className={`${styles.circulo} ${styles[missao.status]}`}
              >

                {missao.status === "concluida" ? (
                  <Check />
                ) : missao.status === "bloqueada" ? (
                  <Lock />
                ) : (
                  missao.icone
                )}

              </div>

              {index !== missoes.length - 1 && (
                <div className={styles.linha}></div>
              )}

              <div className={styles.info}>

                {missao.status === "atual" && (
                  <span className={styles.badge}>
                    COMEÇAR
                  </span>
                )}

                <h3>{missao.titulo}</h3>

                <p>{missao.descricao}</p>

                <strong>{missao.xp}</strong>

              </div>

            </div>

          ))}

        </main>

        {/* Painel Direito */}

        <aside className={styles.sidebar}>

          <div className={styles.sideCard}>

            <div className={styles.sideTitulo}>
              <Clock3 size={20} />
              <h3>Reset em</h3>
            </div>

            <h2>08:42:17</h2>

            <p>Novas missões em breve</p>

            <div className={styles.progress}>
              <div className={styles.progressFill}></div>
            </div>

            <span>2 / 5 missões concluídas</span>

          </div>

          <div className={styles.sideCard}>

            <h3>Seu nível</h3>

            <div className={styles.levelCircle}>
              12
            </div>

            <h4>Nível 12</h4>

            <p>Narrador Experiente</p>

            <div className={styles.progress}>
              <div
                className={styles.progressFill}
                style={{ width: "84%" }}
              ></div>
            </div>

            <span>4200 / 5000 XP</span>

          </div>

        

        </aside>

      </div>

    </div>
  );
}

export default Missoes;