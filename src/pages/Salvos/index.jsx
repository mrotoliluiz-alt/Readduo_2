import styles from "./index.module.css";


import CardLivro from "../../componentes/CardLivro";

import {
  Bookmark,
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Grid2x2,
  List,
} from "lucide-react";

const categorias = [
  "Todos",
  "Livros",
  "Contos",
  "Artigos",
  "Poemas",
];

const livros = [
  {
    titulo: "A Quinta Estação",
    autor: "N. K. Jemisin",
    tipo: "Livro",
    tag: "Fantasia",
    corTag: "#8b5cf6",
  },
  {
    titulo: "Jogos Vorazes",
    autor: "Suzanne Collins",
    tipo: "Livro",
    tag: "Popular",
    corTag: "#fb923c",
  },
  {
    titulo: "Duna",
    autor: "Frank Herbert",
    tipo: "Livro",
    tag: "Épico",
    corTag: "#0FA6B3",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    tipo: "Livro",
    tag: "Clássico",
    corTag: "#4f7cff",
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    tipo: "Livro",
    tag: "Distopia",
    corTag: "#b45eff",
  },
  {
    titulo: "Neuromancer",
    autor: "William Gibson",
    tipo: "Livro",
    tag: "Cyberpunk",
    corTag: "#22c55e",
  },
];

function Salvos() {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}

      <div className={styles.header}>
        <Bookmark />

        <div>
          <h1>Minhas Obras Salvas</h1>

          <p>Todas as obras que você salvou para ler depois.</p>
        </div>
      </div>

      {/* Barra de pesquisa */}

      <section className={styles.searchArea}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Buscar nas obras salvas..."
          />

          <Search size={20} />
        </div>
      </section>

      {/* Categorias */}

      <section className={styles.tabs}>
        {categorias.map((categoria, index) => (
          <button
            key={index}
            className={index === 0 ? styles.active : ""}
          >
            {categoria}
          </button>
        ))}
      </section>

      {/* Linha superior */}

      <section className={styles.topBar}>
        <span>48 obras salvas</span>

        <div className={styles.actions}>
          <button>
            <SlidersHorizontal size={16} />

            Filtros
          </button>

          <button>
            <ArrowUpDown size={16} />

            Ordenar por
          </button>

          <div className={styles.viewButtons}>
            <button className={styles.activeView}>
              <Grid2x2 size={18} />
            </button>

            <button>
              <List size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}

      <section className={styles.grid}>
        {livros.map((livro, index) => (
          <CardLivro
            key={index}
            titulo={livro.titulo}
            autor={livro.autor}
            tipo={livro.tipo}
            tag={livro.tag}
            corTag={livro.corTag}
          />
        ))}
      </section>
    </div>
  );
}

export default Salvos;