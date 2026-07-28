import styles from './QuemSomos.module.css';
import Card from './Card';

function QuemSomos() {
  return (
    <div className={styles.QuemSomos}>
      <h1>Quem Somos</h1>
      <h2>Esse site é dedicado ao trabalho de Literatura do segundo ano do ensino médio do colégio Acesso.</h2>
      <p>Aqui vamos divulgar informações sobre os livros da federal, de uma forma divertida com a ajuda do professor Lepi, a traça.</p>
      
      <section style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Card
          titulo=""
          descricao="Aprenda a criar interfaces modernas com React."
          imagem="https://via.placeholder.com/300x180"
        />
        <Card
          titulo="Design Responsivo"
          descricao="Estruture páginas que funcionam em qualquer tela."
          imagem="https://via.placeholder.com/300x180"
        />
      </section>
    </div> 
  );
}
export default QuemSomos;