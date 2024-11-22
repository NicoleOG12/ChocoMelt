<template>
  <body>
  <header class="header">
    <h1 class="logo">CHOCOMELT</h1>
    <nav>
        <ul>
          <li><router-link to="/HomePage">Home</router-link></li>
            <li><router-link to="/Produtos">Produtos</router-link></li>
            <li><router-link to="/Contato">Contato</router-link></li>
            <li><router-link to="/Sobre Nós">Sobre Nós</router-link></li>
            <li><router-link to="/Carrinho"><div class="icon"><img src="../img/carrinho.png"></div> </router-link></li>
        </ul>
      </nav>
    <div class="icons">
      <img src="../img/user.png" alt="">
    </div>
  </header>

  <div class="search"> <span></span><div class="centro"> </div>
  <span></span></div>
  <main class="products">
    <div v-for="product in products" :key="product.id" class="product-card">
      <div name="centralizado" class="centrulo"> <span></span><div class="circulo"> </div>
        <span></span>    </div>
      <h3>{{ product.name }}</h3>
      <p>R$ {{ product.price.toFixed(2) }}</p>
      <button @click="addToCart(product)">Adicionar ao Carrinho</button>
    </div>
  </main>
</body>
</template>

<script>
export default {
  data() {
    return {
      products: [
{ id: 1, name: "Bolo de Chocolate", price: 39.9,},
{ id: 2, name: "Bolo de Morango", price: 39.9,},
{ id: 3, name: "Bolo de Frutas", price: 39.9, },
{ id: 4, name: "Bolo de Chocolate", price: 39.9,},
{ id: 5, name: "Bolo de Morango", price: 39.9,},
{ id: 6, name: "Bolo de Chocolate", price: 39.9,},
{ id: 7, name: "Bolo de Morango", price: 39.9,},
{ id: 8, name: "Bolo de Frutas", price: 39.9, },
{ id: 9, name: "Bolo de Chocolate", price: 39.9,},
{ id: 10, name: "Bolo de Morango", price: 39.9,},
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
alert(`${product.name} foi adicionado ao carrinho!`);
    },
  },
};
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

.logo{
  color: #A8D1E7;
  margin: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(../img/image.png);
  height: 200px;
  background-repeat: no-repeat ;
  color: white;
  padding: 20px;
  position: relative;
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
     margin-bottom: 20px;
  }
   
  nav ul li a:hover {
    color: #d1a3b8;
  }
 
.icons img{
  margin-left: 25px;
  cursor: pointer;
  color: #C191B2;
  height: 40px;
  padding: 20px;
}

nav ul li a .icon img{
  margin-left: 15px;
  cursor: pointer;
  color: #C191B2;
  height: 30px;
}

.search{
  border: 1px solid #ffffff;
  width: 650px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 20px;
  text-align: center;
  margin:2% auto 2% auto;
}

.search .centro{
  display: grid;
  grid-template-columns:auto 6000px auto;

} 

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  padding: 20px;
  margin: 50px;
}
 
.product-card {
  text-align: center;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f900;
  margin: 20;
}

.circulo{
  border: 1px solid #C191B2;
  width: 150px;
  height: 150px;
  border-radius: 100px;
  background-color: #C191B2;
}

.product-card .centrulo{
  display: grid;
  grid-template-columns:auto 160px auto;
}
 
.product-card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}
 
.product-card button {
  margin-top: 10px;
  padding: 8px 12px;
  background: #C191B2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
 
.product-card button:hover {
  background: #d1a3b8;
}

h3{
  color: #C191B2;
}
 
.cart {
  padding: 20px;
  background: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px;
}
 
.cart ul {
  list-style: none;
  padding: 0;
}
 
.cart li {
  margin-bottom: 10px;
}


@media (max-width: 768px) {
  .header {
    flex-direction: column;
    text-align: center;
  }
  nav ul {
    flex-direction: column;
    gap: 10px;
  }
  .products {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
</style>