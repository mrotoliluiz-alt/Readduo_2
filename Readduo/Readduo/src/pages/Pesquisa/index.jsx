import styles from "./index.module.css";

import {
  Search,
  SearchCheck,
  SlidersHorizontal,
  Bookmark,
  Star,
  ChevronDown,
} from "lucide-react";

const sugestoes = [
  "Dom Casmurro",
  "Jorge Amado",
  "Distopia",
  "Autoajuda",
  "Machado de Assis",
  "Romance",
];

const filtros = [
  "Todos os tipos",
  "Gêneros",
  "Filtros",
  "Idioma",
  "Mais recentes",
];

const livros = [
  {
    titulo: "Jogos Vorazes",
    autor: "Suzanne Collins",
    tipo: "Livro",
    tag: "Mais popular",
    cor: "#ff7b29",
    imagem: "img/livro1.jpg",
  },
  {
    titulo: "Maze Runner",
    autor: "James Dashner",
    tipo: "Livro",
    tag: "Em alta",
    cor: "#ff4d4f",
    imagem: "img/livro2.jpg",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    tipo: "Livro",
    tag: "Clássico",
    cor: "#4f7cff",
    imagem: "img/livro3.jpg",
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    tipo: "Livro",
    tag: "Distopia clássica",
    cor: "#b45eff",
    imagem: "img/livro4.jpg",
  },
  {
    titulo: "Neuromancer",
    autor: "William Gibson",
    tipo: "Livro",
    tag: "Novo",
    cor: "#22c55e",
    imagem: "img/livro5.jpg",
  },
  {
    titulo: "Admirável Mundo Novo",
    autor: "Aldous Huxley",
    tipo: "Livro",
    tag: "Recomendado",
    cor: "#0FA6B3",
    imagem: "img/livro6.jpg",
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    tipo: "Livro",
    tag: "Clássico",
    cor: "#4f7cff",
    imagem: "img/livro7.jpg",
  },
  {
    titulo: "Duna",
    autor: "Frank Herbert",
    tipo: "Livro",
    tag: "Épico",
    cor: "#fb923c",
    imagem: "img/livro8.jpg",
  },
];

function Pesquisa() {
  return (
    <div className={styles.container}>
      {/* Cabeçalho */}

      <div className={styles.header}>
        <SearchCheck />

        <h1>Pesquisar</h1>
      </div>

      {/* Barra */}

      <section className={styles.searchArea}>
        <h2>O que você quer descobrir hoje?</h2>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Pesquise por livros, autores ou categorias..."
          />

          <Search size={22} />
        </div>

        <div className={styles.sugestoes}>
          <span>Sugestões:</span>

          {sugestoes.map((item, index) => (
            <button key={index}>{item}</button>
          ))}
        </div>
      </section>

      {/* Resultado */}

      <section className={styles.resultado}>
        <h2>distopia</h2>

        <div className={styles.rightResult}>
          <span>132 resultados encontrados</span>

          <button>
            Mais relevantes

            <ChevronDown size={16} />
          </button>
        </div>
      </section>

      {/* Filtros */}

      <section className={styles.filtros}>
        {filtros.map((item, index) => (
          <button key={index}>
            <SlidersHorizontal size={16} />

            {item}
          </button>
        ))}
      </section>

      {/* Grid */}

      <section className={styles.grid}>
        {livros.map((livro, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imagemContainer}>
              <img src={livro.imagem} alt={livro.titulo} />

              <span
                className={styles.tag}
                style={{ backgroundColor: livro.cor }}
              >
                {livro.tag}
              </span>

              <button className={styles.salvar}>
                <Bookmark size={18} />
              </button>
            </div>

            <div className={styles.info}>
              <h3>{livro.titulo}</h3>

              <p>{livro.autor}</p>

              <div className={styles.footer}>
                <span>{livro.tipo}</span>

                <Star
                  size={16}
                  fill="#facc15"
                  color="#facc15"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Pesquisa;