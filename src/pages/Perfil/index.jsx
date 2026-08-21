import styles from "./index.module.css";
import Botao from '../../componentes/botao';
import {
  User,
  Calendar,
  MapPin,
  Heart,
  BookOpen,
  PenTool,
  Flame,
  Star,
  BadgeCheck,
  Circle,
  Pencil,
} from "lucide-react";

const estatisticas = [
  {
    titulo: "Livros lidos",
    valor: "48",
    extra: "+3 este mês",
    icone: <BookOpen color="#61a6fa" size={20} />,
  },
  {
    titulo: "Horas de leitura",
    valor: "126h",
    extra: "+8h este mês",
    icone: <Circle color="#c084fc" size={20} />,
  },
  {
    titulo: "Obras escritas",
    valor: "7",
    extra: "+2 este mês",
    icone: <PenTool color="#4ade80" size={20} />,
  },
  {
    titulo: "Palavras escritas",
    valor: "124.8K",
    extra: "+15.2K este mês",
    icone: <PenTool color="#fb7185" size={20} />,
  },
  {
    titulo: "Sequências",
    valor: "8 dias",
    extra: "Melhor: 16 dias",
    icone: <Flame color="#fb923c" size={20} />,
  },
  {
    titulo: "XP acumulado",
    valor: "24.850",
    extra: "Top 18%",
    icone: <Star color="#facc15" size={20} />,
  },
];

const atividades = [
  {
    titulo: 'Você concluiu a leitura de "Duna"',
    subtitulo: "Frank Herbert",
    tempo: "Hoje",
  },
  {
    titulo: 'Escreveu 1.250 palavras em "Ecos de Éter"',
    subtitulo: "Capítulo 8",
    tempo: "Ontem",
  },
  {
    titulo: 'Concluiu a lição "Construção de Mundos"',
    subtitulo: "Trilha intermediária",
    tempo: "2 dias atrás",
  },
  {
    titulo: "Nova conquista desbloqueada",
    subtitulo: "Leitor dedicado",
    tempo: "3 dias atrás",
  },
  {
    titulo: "Começou a seguir Mariana Costa",
    subtitulo: "Escritora",
    tempo: "4 dias atrás",
  },
];

const conquistas = [
  {
    titulo: "Leitor Dedicado",
    descricao: "Estude por 7 dias seguidos",
    tempo: "Hoje",
  },
  {
    titulo: "Explorador de Mundos",
    descricao: "Leia livros de 5 gêneros",
    tempo: "3 dias atrás",
  },
  {
    titulo: "Escritor Consistente",
    descricao: "Escreva por 5 dias seguidos",
    tempo: "1 semana atrás",
  },
];

const amigos = [
  {
    nome: "Mariana Costa",
    nivel: "Nível 14",
    status: "Online",
  },
  {
    nome: "Lucas Ferreira",
    nivel: "Nível 11",
    status: "Online",
  },
  {
    nome: "Rafael Monteiro",
    nivel: "Nível 10",
    status: "Offline",
  },
];

const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom", "Hoje"];

function Perfil() {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}

      <div className={styles.header}>
        <div className={styles.titulo}>
          <User />
          <h1>Meu Perfil</h1>
        </div>
      </div>

      {/* Conteúdo */}

      <div className={styles.layout}>
        {/* Esquerda */}

        <div className={styles.left}>
          {/* Card Perfil */}

          <section className={styles.profileCard}>
            <div className={styles.avatar}>
              <User />
            </div>

            <div className={styles.profileInfo}>
              <div className={styles.nomeLinha}>
                <h2>Nome Cliente</h2>

                <BadgeCheck color="#4f7cff" />
              </div>

              <p>Nível 12 • Viajante das Histórias</p>

              <div className={styles.progress}>
                <div className={styles.progressFill}></div>
              </div>

              <span>8.450 / 12.000 XP</span>

              <p className={styles.bio}>
                Apaixonada por fantasia, mistério e boas reviravoltas.
              </p>

              <div className={styles.infoLinha}>
                <span>
                  <Calendar size={16} />
                  Membro desde 15/04/2024
                </span>

                <span>
                  <MapPin size={16} />
                  Brasil
                </span>

                <span>
                  <Heart size={16} />
                  Fantasia, Distopia, Mistério
                </span>
              </div>
            </div>

            <Botao
            texto=' Seguidores'
            variante= 'primary'
            />

            <Botao
            texto=' Editar Perfil'
            variante= 'primary'
            />
          </section>

          {/* Tabs */}

          <div className={styles.tabs}>
            <button className={styles.active}>Atividade</button>
            <button>Conquistas</button>
            <button>Estatísticas</button>
            <button>Favoritos</button>
            <button>Amigos</button>
          </div>

          {/* Conteúdo */}

          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Atividade recente</h3>

              {atividades.map((item, index) => (
                <div className={styles.activity} key={index}>
                  <div>
                    <strong>{item.titulo}</strong>
                    <span>{item.subtitulo}</span>
                  </div>

                  <small>{item.tempo}</small>
                </div>
              ))}

              <button className={styles.verTudo}>
                Ver todas as atividades
              </button>
            </div>

            <div className={styles.card}>
              <h3>Gêneros mais lidos</h3>

              <div className={styles.grafico}>
                <div className={styles.circle}></div>
              </div>

              <ul className={styles.generos}>
                <li>Fantasia 45%</li>
                <li>Distopia 20%</li>
                <li>Mistério 15%</li>
                <li>Ficção Científica 10%</li>
                <li>Outros 10%</li>
              </ul>
            </div>
          </div>

          {/* Sequência */}

          <section className={styles.sequencia}>
            <div className={styles.seqTitulo}>
              <Flame color="#fb923c" />
              <h2>Sequência de leitura</h2>

              <span>8 dias</span>
            </div>

            <div className={styles.dias}>
              {dias.map((dia, index) => (
                <div className={styles.dia} key={index}>
                  <div className={styles.bolinha}>✓</div>

                  <small>{dia}</small>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Direita */}

        <div className={styles.right}>
          <div className={styles.statsGrid}>
            {estatisticas.map((item, index) => (
              <div className={styles.statCard} key={index}>
                {item.icone}

                <small>{item.titulo}</small>

                <h3>{item.valor}</h3>

                <span>{item.extra}</span>
              </div>
            ))}
          </div>

          <div className={styles.sideCard}>
            <div className={styles.cardHeader}>
              <h3>Conquistas recentes</h3>

              <button>Ver todas</button>
            </div>

            {conquistas.map((item, index) => (
              <div className={styles.item} key={index}>
                <Star fill="#61a6fa" color="#61a6fa" />

                <div>
                  <strong>{item.titulo}</strong>

                  <span>{item.descricao}</span>
                </div>

                <small>{item.tempo}</small>
              </div>
            ))}
          </div>

          <div className={styles.sideCard}>
            <div className={styles.cardHeader}>
              <h3>Amigos</h3>

              <button>Ver todos</button>
            </div>

            {amigos.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.avatarMini}>
                  {item.nome.charAt(0)}
                </div>

                <div>
                  <strong>{item.nome}</strong>

                  <span>{item.nivel}</span>
                </div>

                <small>{item.status}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;