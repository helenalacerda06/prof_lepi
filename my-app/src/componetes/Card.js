import styles from './Card.modules.css';

function Card({ titulo, descricao, imagem }) {
  return (
    <article className={styles.card}>
      {imagem && (
        <img className={styles.cardImage} src={imagem} alt={titulo || 'Card ilustrativo'} />
      )}

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{titulo}</h3>
        <p className={styles.cardDescription}>{descricao}</p>
        <button className={styles.cardButton} type="button">
          Saiba mais
        </button>
      </div>
    </article>
  );
}

export default Card;
