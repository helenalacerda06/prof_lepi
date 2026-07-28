import styles from './QuemSomos.module.css';
import Card from './Card';

function QuemSomos() {
  return (
    <div className={styles.QuemSomos}>
      <h1>Quem Somos</h1>
      <h2>Esse site é dedicado ao trabalho de Literatura do segundo ano do ensino médio do colégio Acesso.</h2>
      <p>Aqui vamos divulgar informações sobre os livros da federal, de uma forma divertida com a ajuda do professor Lepi, a traça.</p>

      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          <Card
            titulo="Leitura em Foco"
            descricao="Descubra livros e temas que despertam a curiosidade e a imaginação."
            imagem="https://via.placeholder.com/300x180/830000/ffffff?text=Leitura"
          />
          <Card
            titulo="Análise Literária"
            descricao="Explore reflexões, interpretações e ideias que vão além da página."
            imagem="https://via.placeholder.com/300x180/8b5a2b/ffffff?text=Analise"
          />
          <Card
            titulo="Cultura e Conhecimento"
            descricao="Acompanhe conteúdos criativos que conectam literatura, arte e educação."
            imagem="https://via.placeholder.com/300x180/4a5568/ffffff?text=Cultura"
          />
        </div>
      </section>
    </div>
  );
}
export default QuemSomos;