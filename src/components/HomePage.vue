<template>
  <body>
    <header>
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
  </body>
</template>
 
<script>

</script>
 
<style scoped>
body{
  background-color: #A8D1E7;
  height: 1200px;
  /*padding: 0;*/
  /*margin: 0;*/
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
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
     color: #d1a3b8;
     text-decoration: none;
     transition: color 0.3s ease;
  }
   
  nav ul li a:hover {
    color: #d1a3b8;
  }

</style>