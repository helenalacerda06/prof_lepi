function Card({ titulo, descricao, imagem }) {
  return (
    <div>
      {imagem && (
        <img
          src={imagem}
          alt={titulo}

        />
      )}

      <div >
        <h3>{titulo}</h3>
        <p >{descricao}</p>
        <button>
          Saiba mais
        </button>
      </div>
    </div>
  );
}

export default Card;
