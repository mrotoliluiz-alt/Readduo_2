import styles from "./index.module.css";
import Botao from '../../componentes/botao';

import {
  PenTool,
  Upload,
  Plus,
  Search,
  MoreVertical,
  Tag,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  CheckCircle2,
} from "lucide-react";

const abas = [
  "Minhas Obras",
  "Rascunhos",
  "Colaborações",
  "Templates",
];

const obras = [
  {
    titulo: "Ecos de Éter",
    genero: "Fantasia",
    capitulo: "Cap. 8",
    data: "12/05/2024",
    ativa: true,
  },
  {
    titulo: "O Último Sussurro",
    genero: "Terror",
    capitulo: "Cap. 3",
    data: "10/05/2024",
    ativa: false,
  },
  {
    titulo: "Cidades de Néon",
    genero: "Ficção Científica",
    capitulo: "Cap. 5",
    data: "08/05/2024",
    ativa: false,
  },
  {
    titulo: "Flores no Concreto",
    genero: "Romance",
    capitulo: "Cap. 2",
    data: "05/05/2024",
    ativa: false,
  },
];

function Oficina() {
  return (
    <div className={styles.container}>
      {/* HEADER */}

      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <div className={styles.title}>
            <PenTool />

            <h1>Oficina Autoral</h1>
          </div>

          <p>Crie, escreva e dê vida às suas histórias.</p>
        </div>

        <div className={styles.headerButtons}>
          <button className={styles.importar}>
            <Upload size={18} />
            Importar obra
          </button>

          <Botao 
          texto="+ Nova Obra"
          variante="Login"
        />
        </div>
      </div>
      {/* CONTEÚDO */}

      <section className={styles.workspace}>
        {/* SIDEBAR */}

        <aside className={styles.sidebar}>
          <div className={styles.searchBar}>
            <input placeholder="Buscar obra..." />

            <Search size={18} />
          </div>

          <div className={styles.obrasHeader}>
            <span>MINHAS OBRAS</span>

            <button>
              <Plus size={16} />
            </button>
          </div>

          <div className={styles.listaObras}>
            {obras.map((obra, index) => (
              <div
                key={index}
                className={`${styles.obraCard} ${
                  obra.ativa ? styles.obraAtiva : ""
                }`}
              >
                <div>
                  <h3>{obra.titulo}</h3>

                  <span>{obra.genero}</span>

                  <p>
                    {obra.capitulo} • {obra.data}
                  </p>
                </div>

                <button>
                  <MoreVertical size={18} />
                </button>
              </div>
            ))}
          </div>

          <button className={styles.verTodas}>
            <Tag size={16} />

            Ver todas as obras
          </button>
        </aside>

        {/* EDITOR */}

        <main className={styles.editor}>
          {/* Cabeçalho */}

          <div className={styles.editorHeader}>
            <div>
              <h2>Ecos de Éter</h2>

              <div className={styles.salvamento}>
                <CheckCircle2
                  size={15}
                  color="#22c55e"
                />

                <span>Salvo automaticamente há 2 segundos</span>
              </div>
            </div>

            <span className={styles.palavras}>
              12.543 palavras
            </span>
          </div>

          {/* Barra de ferramentas */}

          <div className={styles.toolbar}>
            <button>
              Título 1
              <ChevronDown size={15} />
            </button>
            <button>
              <Bold size={16} />
            </button>

            <button>
              <Italic size={16} />
            </button>

            <button>
              <Underline size={16} />
            </button>

            <button>
              <Strikethrough size={16} />
            </button>
          </div>

          {/* Editor */}

          <div
            className={styles.textEditor}
            contentEditable
            suppressContentEditableWarning
          >
            <h1>Capítulo 8 – O Guardião Despertado</h1>

            <p>
              O vento uivava entre as torres quebradas de
              Veyrion, carregando consigo fragmentos de algo
              antigo, esquecido e perigoso.
            </p>

            <p>
              Luna sentia o peso da escolha apertar seu peito
              enquanto avançava em direção ao altar central.
              As runas brilhavam, pulsando como um coração
              adormecido.
            </p>

            <p>
              — Você não entende o que está prestes a fazer —
              disse Kael, surgindo das sombras.
            </p>

            <p>
              Mas ela já não tinha mais dúvidas.
            </p>

            <p>
              O poder nunca foi o verdadeiro problema.
            </p>

            <p>
              O problema sempre foi quem o controlava.
            </p>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Oficina;