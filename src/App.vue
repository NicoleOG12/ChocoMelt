<template>
  <div class="chocomelt">
    <header>
      <h1 class="logo">CHOCOMELT</h1>
      <nav>
        <ul>
          <li><router-link to="/HomePage">Home</router-link></li>
          <li><router-link to="/contactUs">Contato</router-link></li>
          <li><router-link to="/aboutUS">Sobre nós</router-link></li>
          <li><router-link to="/LoginForm">Login</router-link></li>
          <li><router-link to="/NewPage">Produtos</router-link></li>
          <li><router-link to="/NewPage">Carrinho</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>
 
<script>
export default {
  name: 'ChocomeltHome'
};
</script>
 
<style scoped>
.chocomelt {
  background-color: #d1a3b8; 
  text-align: center;
  padding: 20px;
  border-radius: 30px;
}
 
header {
  background-image: url('');
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 50px;
}
 
.logo {
  font-family: 'YourChosenFont', sans-serif;
  font-size: 3rem;
  color: #4a2c2a; /* Marrom para combinar com o chocolate */
  /* text-shadow: 1px 1px 2px red, 0 0 1em rgb(166, 173, 255), 0 0 0.2em blue; */

}
 
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}
 
nav ul li a {
  font-family: 'YourChosenFont', sans-serif;
  font-size: 1.2rem;
  color: #4a2c2a;
  text-decoration: none;
  transition: color 0.3s ease;
}
 
nav ul li a:hover {
  color: #d1a3b8;
}
</style>