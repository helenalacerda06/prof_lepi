import styles from './QuemSomos.module.css';
import Card from './Card';
import Helena from '../imagem/helena.jpeg';
import Nat from '../imagem/nat.jpeg';
import Riam from '../imagem/Riam.jpeg';

function QuemSomos() {
  return (
    <div className={styles.QuemSomos}>
      <h1>Quem Somos</h1>
      <h2>Esse site é dedicado ao trabalho de Literatura do segundo ano do ensino médio do colégio Acesso.</h2>
      <p>Aqui vamos divulgar informações sobre os livros da federal, de uma forma divertida com a ajuda do professor Lepi, a traça.</p>

      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          <Card
            titulo="Helena"
            descricao="Helena faz os posts do nosso instagram, além de ser responsável pole desenvolvimento do nosso blog e das publicações."
            imagem={Helena}
          />
          <Card
            titulo="Natalia"
            descricao="Natalia é responsável por criar os desenhos tanto para o nosso blog quanto para o nosso instagram."
            imagem={Nat}
          />
          <Card
            titulo="Riam"
            descricao="Riam é responsável pela organização do trabalho e quais os assuntos abordados em nossas postagens."
            imagem={Riam}
          />
        </div>
      </section>
    </div>
  );
}
export default QuemSomos;