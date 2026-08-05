import styles from "./index.module.css";

import {
  Settings,
  User,
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
  Bell,
  Shield,
  ChevronRight,
  Pencil,
} from "lucide-react";

const estatisticas = [
  {
    titulo: "Obras salvas",
    valor: "23",
    extra: "+4 este mês",
    icone: <Bookmark color="#61A6FA" size={20} />,
  },
  {
    titulo: "Obras escritas",
    valor: "7",
    extra: "+1 este mês",
    icone: <Feather color="#4ADE80" size={20} />,
  },
  {
    titulo: "Sequência",
    valor: "8 dias",
    extra: "Melhor: 16 dias",
    icone: <Flame color="#FB923C" size={20} />,
  },
  {
    titulo: "XP acumulado",
    valor: "24.850",
    extra: "Top 18%",
    icone: <Star color="#FACC15" size={20} />,
  },
];

const aparencia = [
  {
    titulo: "Modo Claro",
    descricao: "Tema padrão do Readduo",
    icone: <Sun size={26} />,
  },
  {
    titulo: "Modo Escuro",
    descricao: "Ideal para leituras noturnas",
    icone: <Moon size={26} />,
  },
  {
    titulo: "Sistema",
    descricao: "Segue o tema do dispositivo",
    icone: <Monitor size={26} />,
  },
];

const seguranca = [
  {
    titulo: "Alterar senha",
    descricao: "Atualize sua senha de acesso.",
    icone: <Lock size={20} />,
  },
  {
    titulo: "Gerenciar dispositivos",
    descricao: "Veja onde sua conta está conectada.",
    icone: <Smartphone size={20} />,
  },
  {
    titulo: "Privacidade",
    descricao: "Controle quem pode visualizar seu perfil.",
    icone: <Shield size={20} />,
  },
  {
    titulo: "Notificações",
    descricao: "Configure avisos e lembretes.",
    icone: <Bell size={20} />,
  },
];

function Configuracoes() {
  return (
    <div className={styles.container}>

      {/* Cabeçalho */}

      <div className={styles.header}>
        <div className={styles.titulo}>
          <Settings />
          <h1>Configurações</h1>
        </div>

        <p>
          Gerencie sua conta, personalize sua experiência e ajuste suas preferências.
        </p>
      </div>

      {/* Layout */}

      <div className={styles.layout}>

        {/* Coluna Esquerda */}

        <div className={styles.left}>

          {/* Perfil */}

          <section className={styles.profileCard}>

            <div className={styles.avatar}>
              <img
                src="https://i.pravatar.cc/200?img=32"
                alt=""
              />
            </div>

            <div className={styles.profileInfo}>

              <div className={styles.nomeLinha}>
                <h2>Luna Silveira</h2>

                <BadgeCheck color="#4F7CFF" />
              </div>

              <p>Nível 12 • Viajante das Histórias</p>

              <span>viagem.literaria@gmail.com</span>

              <small>Membro desde 15/04/2024 • Brasil</small>

              <button className={styles.editar}>
                <Pencil size={18} />
                Editar Perfil
              </button>

            </div>

          </section>

          {/* Estatísticas */}

          <section className={styles.stats}>

          {estatisticas.map((item, index) => (

            <div
              key={index}
              className={`${styles.statCard} ${item.classe}`}
            >

              <div className={styles.icon}>
                {item.icone}
              </div>

              <h2>{item.valor}</h2>

              <span>{item.titulo}</span>

            </div>

          ))}

        </section>
                    {/* Aparência */}

          <section className={styles.card}>

            <div className={styles.cardHeader}>
              <h3>Aparência</h3>

              <p>Escolha como deseja visualizar o Readduo.</p>
            </div>

            <div className={styles.temas}>

              {aparencia.map((item, index) => (

                <button
                  key={index}
                  className={styles.tema}
                >

                  <div className={styles.temaIcone}>
                    {item.icone}
                  </div>

                  <strong>{item.titulo}</strong>

                  <span>{item.descricao}</span>

                </button>

              ))}

            </div>

          </section>

        </div>

        {/* Coluna Direita */}

        <div className={styles.right}>

          {/* Segurança */}

          <section className={styles.sideCard}>

            <div className={styles.cardHeader}>

              <h3>Conta e Segurança</h3>

            </div>

            {seguranca.map((item, index) => (

              <button
                key={index}
                className={styles.item}
              >

                <div className={styles.itemIcon}>

                  {item.icone}

                </div>

                <div className={styles.itemInfo}>

                  <strong>{item.titulo}</strong>

                  <span>{item.descricao}</span>

                </div>

                <ChevronRight size={18} />

              </button>

            ))}

          </section>

          {/* Sobre */}

          <section className={styles.sideCard}>

            <div className={styles.cardHeader}>

              <h3>Sobre o Readduo</h3>

            </div>

            <div className={styles.sobre}>

              <div className={styles.sobreItem}>
                <User size={18} />
                <span>Conta Premium: Não</span>
              </div>

              <div className={styles.sobreItem}>
                <Star size={18} />
                <span>Versão 1.0.0</span>
              </div>

              <div className={styles.sobreItem}>
                <Settings size={18} />
                <span>Última atualização: Hoje</span>
              </div>

            </div>

          </section>

          {/* Atalhos */}

          <section className={styles.sideCard}>

            <div className={styles.cardHeader}>

              <h3>Atalhos</h3>

            </div>

            <button className={styles.atalho}>
              Editar Perfil
              <ChevronRight size={18} />
            </button>

            <button className={styles.atalho}>
              Central de Ajuda
              <ChevronRight size={18} />
            </button>

            <button className={styles.atalho}>
              Política de Privacidade
              <ChevronRight size={18} />
            </button>

            <button className={styles.atalho}>
              Termos de Uso
              <ChevronRight size={18} />
            </button>

          </section>

        </div>

      </div>

    </div>
  );
}

export default Configuracoes;