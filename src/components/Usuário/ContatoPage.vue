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
    
    <div class="contact-container">
      <h1>Contato</h1>

      <div class="contact-card">
        <h2>Envie-nos uma mensagem</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>

          <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>

          <div class="form-group">
            <label for="message">Mensagem:</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>

          <button type="submit" class="btn submit-btn">Enviar Mensagem</button>
        </form>
      </div>

      <div class="contact-info">
        <h3>Outras formas de contato</h3>
        <p><strong>Endereço:</strong> Rua das Flores, 140 - São Paulo - SP</p>
        <p><strong>Telefone:</strong> (11) 4002-8922</p>
        <p><strong>Email:</strong> chocomelt@gmail.com</p>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Enviando mensagem:', this.form);
      alert("Sua mensagem foi enviada com sucesso!");
  
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
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

.contact-container {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 1000px;
  margin-left: 150px;
  margin-right: 150px;
  margin-top: -150px;
}

.contact-card {
  background-color: #C191B2;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.contact-info {
  margin-top: 30px;
  text-align: center;
}

.contact-info p {
  margin: 5px 0;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 500px;
  padding: 10px;
  margin-top: 5px;
  border-radius: 10px;
  border: 1px solid #C191B2;
}

.form-group textarea {
  height: 100px;
}

.submit-btn {
  background-color: #C191B2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #d1a3b8;
}
</style>
