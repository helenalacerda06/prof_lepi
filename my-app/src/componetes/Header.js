function Header() {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(40, 44, 52, 0.75), rgba(40, 44, 52, 0.75)), url(${process.env.PUBLIC_URL}/professorLepi.jpeg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <header className="App-header" style={headerStyle}>
      <div className="header-content">
        <div className="logo" style={{ color: '#830000' }}>Prof. Lepi</div>
        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
      <div className="header-text">
        <h1>Bem-vindo ao Projeto Prof. Lepi</h1>
        <p>Este é um cabeçalho simples para começar seu site em React.</p>
      </div>
    </header>
  );
}

export default Header;