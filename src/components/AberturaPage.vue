<template>
    <div class="chocomelt">
      <header>
        <h1 class="nome">CHOCOMELT</h1>
        <nav>
          <ul>
            <li><router-link to="/HomePage">Home</router-link></li>
            <li><router-link to="/Produtos">Produtos</router-link></li>
            <li><router-link to="/Carrinho">Carrinho</router-link></li>
            <li><router-link to="/Contato">Contato</router-link></li>
            <li><router-link to="/Sobre Nós">Sobre Nós</router-link></li>
    
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
   
  <style>
  body{
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
   
  .nome {
    font-family: 'YourChosenFont', sans-serif;
    font-size: 3rem;
    color: #4a2c2a;
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