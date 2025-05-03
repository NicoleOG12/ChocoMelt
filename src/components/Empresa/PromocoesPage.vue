<template>
  <body>
      <header class="header">
          <div class="logo">
              <img src="../../img/Logo.png" alt="Usuário">
          </div>
          <nav class="nav">
              <ul>
                  <li><router-link to="/AdicionarProdutos">Adicionar Produtos</router-link></li>
                  <li><router-link to="/PromocoesPage">Promoções</router-link></li>
                  <li><router-link to="/EditarProdutos">Editar Produtos</router-link></li>
                  <li><router-link to="/PedidosPage">Pedidos</router-link></li>
              </ul>
          </nav>
      </header>  
  </body>
</template>

<script>

</script>

<style scoped>
body {
background-color: #A8D1E7;
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

</style>