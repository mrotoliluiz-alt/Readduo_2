import styles from "./index.module.css";

import CardLivro from "../../componentes/cardLivro";

import {
  Search,
  SearchCheck,
  SlidersHorizontal,
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
    
    
  },
  {
    titulo: "Maze Runner",
    autor: "James Dashner",
    tipo: "Livro",
   
    
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    tipo: "Livro",
    
    
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    tipo: "Livro",
    
    
  },
  {
    titulo: "Neuromancer",
    autor: "William Gibson",
    tipo: "Livro",
    
   
  },
  {
    titulo: "Admirável Mundo Novo",
    autor: "Aldous Huxley",
    tipo: "Livro",
    
    
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    tipo: "Livro",
    
    
  },
  {
    titulo: "Duna",
    autor: "Frank Herbert",
    tipo: "Livro",
    
    
  },
];

function Pesquisa() {
  return (
    <div className={styles.container}>

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

    <CardLivro
      key={index}
      titulo={livro.titulo}
      autor={livro.autor}
      tipo={livro.tipo}
      tag={livro.tag}
      corTag={livro.corTag}
      imagem={livro.imagem}
    />

      ))}
    </section>
    </div>
  );
}

export default Pesquisa;