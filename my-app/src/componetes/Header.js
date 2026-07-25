function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <div className="logo">Prof. Lepi</div>
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