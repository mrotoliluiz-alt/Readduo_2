import styles from "./index.module.css";

import { Bookmark, BookOpen, Star } from "lucide-react";

function CardLivro({
  titulo,
  autor,
  tipo,
  imagem,
  corTag,
  favorito = false,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imagemContainer}>
        {imagem ? (
          <img
            src={imagem}
            alt={titulo}
            className={styles.imagem}
          />
        ) : (
          <div className={styles.placeholder}>
            <BookOpen size={55} />

            <h4>{titulo}</h4>

            <span>{autor}</span>
          </div>
        )}

        <button className={styles.salvar}>
          <Bookmark
            size={18}
            fill={favorito ? "white" : "none"}
          />
        </button>
      </div>

      <div className={styles.info}>
        <h3>{titulo}</h3>

        <p>{autor}</p>

        <div className={styles.footer}>
          <span>{tipo}</span>
        </div>
      </div>
    </div>
  );
}

export default CardLivro;