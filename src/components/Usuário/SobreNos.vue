<template>
  <body>
    <header class="header">
      <div class="logo">
        <img src="../../img/Logo.png" alt="Usuário">
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
        <div class="icons"><img src="../../img/user.png" alt="Usuario"></div>
      </router-link>
    </header>
  
  <div class="about-container">
    <h1>Sobre Nós</h1>

    <div class="team">

      <div class="team-member">
        <div 
          class="circle" 
          @mouseover="showInfo('clara')" 
          @mouseleave="hideInfo('clara')">
          <img src="../../img/Clara.png" alt="Clara Araújo">
        </div>
        <h3>Clara Araújo</h3>
        <div class="info" :class="{'visible': isInfoVisible.clara}">
          <div class="popup-content">
            <img class="popup-img" src="../../img/Clara.png" alt="Clara Araújo">
            <h4>Clara Araújo</h4>
            <p><strong>Idade:</strong> 20 Anos</p>
            <p>
              Uma das minhas coisas favoritas de fazer é arte, de todos os tipos - visual, música, cinema, escrita etc. 
              Outros hobbies que eu amo são videogames, confeitaria e aprender outros idiomas.
            </p>
          </div>
        </div>
      </div>

      <div class="team-member">
        <div 
          class="circle" 
          @mouseover="showInfo('julia')" 
          @mouseleave="hideInfo('julia')">
          <img src="../../img/Julia.png" alt="Júlia Lins">
        </div>
        <h3>Júlia Lins</h3>
        <div class="info" :class="{'visible': isInfoVisible.julia}">
          <div class="popup-content">
            <img class="popup-img" src="../../img/Julia.png" alt="Júlia Lins">
            <h4>Júlia Lins</h4>
            <p><strong>Idade:</strong> 18 Anos</p>
            <p>
              Sou apaixonada por ouvir música, mergulhar em jogos e, no meu tempo livre, adoro sair com pessoas que fazem 
              meu dia mais especial. Esses momentos fazem o equilíbrio perfeito entre diversão e conexão.
            </p>
          </div>
        </div>
      </div>

      <div class="team-member">
        <div 
          class="circle" 
          @mouseover="showInfo('nicole')" 
          @mouseleave="hideInfo('nicole')">
          <img src="../../img/nicole.png" alt="Nicole Oliveira">
        </div>
        <h3>Nicole Oliveira</h3>
        <div class="info" :class="{'visible': isInfoVisible.nicole}">
          <div class="popup-content">
            <img class="popup-img" src="../../img/nicole.png" alt="Nicole Oliveira">
            <h4>Nicole Oliveira</h4>
            <p><strong>Idade:</strong> 17 Anos</p>
            <p>
              Adora ler livros principalmente fantasia, suspense e romance. Gosto de ouvir música, cozinhar, fazer artesanatos, costurar 
              e sempre que posso gosto de sair com as pessoas especiais que tenho em minha vida.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      isInfoVisible: {
        clara: false,
        julia: false,
        nicole: false
      }
    };
  },
  methods: {
    showInfo(person) {
      this.isInfoVisible[person] = true;
    },

    hideInfo(person) {
      this.isInfoVisible[person] = false;
    }
  }
};
</script>

<style scoped>
body{
  background-color: #A8D1E7;
  /*padding: 0;*/
  /*margin: 0;*/
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
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
  color: #C191B2;
  height: 30px;
  top: -250px;
  position: relative;
 
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
  padding-left: 20px;
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

nav ul li a .icon img {
  margin-left: 25px;
  margin-top: -50px;
  color: #C191B2;
  height: 30px;
}

.about-container {
  background-color: #a8d1e7e8;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
  text-align: center;
  margin-top: -400px;
}

h1 {
  font-size: 2.5rem;
  color: #C191B2;
  margin-bottom: 30px;
}

.team {
  display: flex;
  justify-content: space-evenly;
  gap: 40px; 
  margin-top: 100px;
}

.team-member {
  position: relative;
  width: 150px;
}

.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #F2A2C3; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h3 {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #C191B2;
}

.info {
  display: none;
  position: absolute;
  top: -190px; 
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(242, 162, 195, 0.9); 
  padding: 20px;
  border-radius: 8px;
  width: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.popup-content {
  text-align: center;
}

.popup-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.info.visible {
  display: block;
  opacity: 1;
}

@media (max-width: 768px) {
  .team {
    flex-direction: column;
    align-items: center;
  }

  .team-member {
    margin-bottom: 30px;
  }
}
</style>
