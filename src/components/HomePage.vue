<template>
  <div class="chocomelt">
    <header>
      <h1 class="logo">CHOCOMELT</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Carrinho</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Sobre Nós</a></li>
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
  text-shadow: 2px 2px #000;
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