<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Do Campo ao Copo | UX & Agro</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="header" id="topo">
    <div class="header-inner">
      <a class="logo" href="#inicio">
        <img src="./img/logo.png" alt="Logo Agrinho" />
      </a>
      <nav class="navbar" aria-label="Navegação principal">
        <button class="hamburger" id="menu-toggle" aria-label="Abrir menu">☰</button>
        <ul class="nav-links" id="nav-links">
          <li><a href="#jornada">Jornada</a></li>
          <li><a href="#sustentabilidade">Sustentabilidade</a></li>
          <li><a href="#quiz">Quiz</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <aside class="accessibility-controls">
    <button onclick="changeFontSize('increase')" aria-label="Aumentar fonte">A+</button>
    <button onclick="changeFontSize('decrease')" aria-label="Diminuir fonte">A-</button>
    <button onclick="toggleContrast()" aria-label="Alto Contraste">◐</button>
  </aside>

  <main>
    <section id="inicio" class="hero-section reveal">
      <h1>Agro forte, futuro sustentável.</h1>
      <p>A conexão entre o campo e a cidade através do malte.</p>
    </section>

    <section id="jornada" class="content-section reveal">
      <div class="section-heading">
        <h2>A Jornada do Grão</h2>
      </div>
      <div id="jornada-container" class="process-grid">
        </div>
    </section>

    <section id="sustentabilidade" class="content-section reveal">
      <div class="section-heading">
        <h2>Sustentabilidade</h2>
      </div>
      <div id="sustentabilidade-container" class="cards-grid">
        </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
