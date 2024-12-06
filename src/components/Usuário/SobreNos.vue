<template>
  <body>
    <header class="header">
      <div class="logo">
        <img src="../../img/Logo.png" alt="Logo">
      </div>
      <nav class="nav">
        <ul>
          <li><router-link to="/HomePage">Home</router-link></li>
          <li><router-link to="/Produtos">Produtos</router-link></li>
          <li><router-link to="/Contato">Contato</router-link></li>
          <li><router-link to="/Sobre Nós">Sobre Nós</router-link></li>
          <li>
            <router-link to="/Carrinho">
              <div class="icon"><img src="../../img/carrinho.png" alt="Carrinho"></div>
            </router-link>
          </li>
        </ul>
      </nav>
      <router-link to="/Login">
        <div class="icons"><img src="../../img/user.png" alt="Usuário"></div>
      </router-link>
    </header>

    <div class="about-container">
      <h1>Sobre Nós</h1>

      <div class="about-content">
        <div class="about-text">
          <h2>Quem Somos</h2>
          <p>
            Somos uma empresa dedicada a oferecer os melhores produtos para os nossos clientes. 
            Nossa missão é proporcionar uma experiência única de compra online, com qualidade e preços acessíveis.
          </p>

          <h2>Missão</h2>
          <p>
            Nossa missão é oferecer produtos inovadores que atendam às necessidades e expectativas dos nossos clientes, 
            promovendo excelência no atendimento e qualidade em todos os processos.
          </p>

          <h2>Visão</h2>
          <p>
            Ser reconhecida como a principal referência em nosso segmento, por meio da confiança dos clientes 
            e da excelência dos nossos serviços.
          </p>

          <h2>Valores</h2>
          <ul>
            <li>Compromisso com a qualidade</li>
            <li>Atendimento ao cliente de excelência</li>
            <li>Inovação constante</li>
            <li>Responsabilidade social e ambiental</li>
          </ul>
        </div>

        <div class="about-image">
          <img src="" alt="Sobre a Empresa">
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-color: #A8D1E7;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(../../img/image.png);
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: #A8D1E7;
  margin-top: 0;
  padding: 0 40px;
}

.logo img {
  height: 30px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: -200px;
}

nav ul li a {
  font-family: 'YourChosenFont', sans-serif;
  font-size: 1.2rem;
  color: #d1a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #d1a3b8;
}

.icons img {
  color: #C191B2;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
}

.about-container {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
  margin-top: 50px;
}

.about-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.about-text {
  width: 60%;
}

.about-text h2 {
  color: #C191B2;
  font-size: 1.5rem;
  margin-top: 20px;
}

.about-text p {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
}

.about-text ul {
  margin-top: 10px;
  list-style-type: disc;
  padding-left: 20px;
}

.about-image {
  width: 30%;
  text-align: center;
}

.about-image img {
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .about-text {
    width: 100%;
    margin-bottom: 20px;
  }

  .about-image {
    width: 100%;
  }
}
</style>
