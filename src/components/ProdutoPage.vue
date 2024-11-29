<template>
  <body>
    <header class="header">
      <div class="logo">
        <img src="../img/Logo.png" alt="Usuário">
      </div>
      <nav class="nav">
        <ul>
          <li><router-link to="/HomePage">Home</router-link></li>
          <li><router-link to="/Produtos">Produtos</router-link></li>
          <li><router-link to="/Contato">Contato</router-link></li>
          <li><router-link to="/Sobre Nós">Sobre Nós</router-link></li>
          <li>
            <router-link to="/Carrinho">
              <div class="icon"><img src="../img/carrinho.png" alt="Carrinho"></div>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="icons">
        <img src="../img/user.png" alt="Usuário">
      </div>
    </header>
 
    <div class="search">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Pesquise produtos..."
        @input="searchProducts"
      />
      <button @click="searchProducts">Buscar</button>
    </div>
 
    <main class="products">
      <div v-for="product in filteredProducts" :key="product.id" class="product-card">
        <div class="centrulo">
          <span></span>
          <div class="circulo">
            <img :src="product.image" alt="Imagem do produto">
          </div>
          <span></span>
        </div>
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
      searchQuery: "",  
      products: [
        { id: 1, name: "Bolo de Chocolate", price: 39.9, image: require("../img/BOLO1.png") },
        { id: 2, name: "Bolo de Morango", price: 39.9, image: require( "../img/BOLO2.png") },
        { id: 3, name: "Bolo de Frutas", price: 39.9, image: require( "../img/BOLO3.png") },
        { id: 4, name: "Bolo de Chocolate Branco", price: 39.9, image: require( "../img/BOLO4.png") },
        { id: 5, name: "Bolo de Chocolate", price: 39.9, image: require("../img/BOLO1.png") },
        { id: 6, name: "Bolo de Morango", price: 39.9, image: require( "../img/BOLO2.png") },
        { id: 7, name: "Bolo de Frutas", price: 39.9, image: require( "../img/BOLO3.png") },
        { id: 8, name: "Bolo de Chocolate Branco", price: 39.9, image: require( "../img/BOLO4.png") },
      ],
      cart: [],
    };
  },
  computed: {
    filteredProducts() {
      if (!this.searchQuery) {
        return this.products;
      }
      return this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      alert(`${product.name} foi adicionado ao carrinho!`);
    },
    searchProducts() {
    },
  },
};
</script>
 
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(../img/image.png);
  background-size: cover;
  background-position: center; 
  height: 100vh;
  color: white;
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


.search {
  width: 650px;
  margin: 2% auto;
  text-align: center;
  margin-top: -150px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.search input {
  width: 80%;
  height: 40px;
  padding: 0 10px;
  border-radius: 20px;
  border: 1px solid #C191B2;
  font-size: 16px;
}

.search button {
  background-color: #C191B2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.search button:hover {
  background-color: #d1a3b8;
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
  margin: 0px;
}

.circulo {
  border: 1px solid #C191B2;
  width: 150px;
  height: 150px;
  border-radius: 100px;
  background-color: #C191B2;
}

.product-card .centrulo {
  display: grid;
  grid-template-columns: auto 160px auto;
}

.circulo img {
  width: 150px;
  height: 130px;
  top: 10px;
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

h3 {
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
    justify-content: center; 
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