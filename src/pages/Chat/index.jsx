import styles from "./index.module.css";

import {
  MessageCircle,
  Search,
  SquarePen,
  Users,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

const conversas = [
  {
    nome: "Mariana Costa",
    mensagem: "Você terminou Duna?",
    tempo: "09:32",
    online: true,
  },
  {
    nome: "Grupo • Clube da Distopia",
    mensagem: "Nova discussão iniciada.",
    tempo: "Ontem",
    online: false,
  },
  {
    nome: "Lucas Ferreira",
    mensagem: "Gostei muito da sua história!",
    tempo: "Seg",
    online: true,
  },
];

function Chat() {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}

      <div className={styles.header}>
        <div>
          <div className={styles.titulo}>
            <MessageCircle />

            <h1>Chat</h1>
          </div>

          <p>
            Converse, compartilhe ideias e aprenda com outros leitores e
            escritores.
          </p>
        </div>
      </div>

      {/* Área Principal */}

      <section className={styles.chatArea}>
        {/* Lista de Conversas */}

        <aside className={styles.sidebar}>
          <div className={styles.searchArea}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Buscar conversas..."
              />

              <Search size={18} />
            </div>

            <button className={styles.novaConversa}>
              <SquarePen size={18} />
            </button>
          </div>

          {conversas.length === 0 ? (
            <div className={styles.semConversa}>
              <MessageCircle size={55} />

              <h3>Nenhuma conversa ainda</h3>

              <p>
                Clique no botão acima para iniciar uma nova conversa.
              </p>
            </div>
          ) : (
            <div className={styles.listaConversas}>
              {conversas.map((item, index) => (
                <button
                  key={index}
                  className={styles.conversa}
                >
                  <div className={styles.avatar}>
                    {item.nome.charAt(0)}
                  </div>

                  <div className={styles.info}>
                    <strong>{item.nome}</strong>

                    <span>{item.mensagem}</span>
                  </div>

                  <div className={styles.direita}>
                    <small>{item.tempo}</small>

                    {item.online && (
                      <div className={styles.online}></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </aside>

        {/* Chat */}

        <main className={styles.chat}>
          <div className={styles.chatVazio}>
            <MessageCircle size={80} />

            <h2>Selecione uma conversa</h2>

            <p>
              Escolha uma conversa existente ou inicie uma nova para conversar
              sobre livros, escrita e leitura.
            </p>

            <button>
              <SquarePen size={18} />
              Nova conversa
            </button>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Chat;