<template>
    <body>
        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <img :src="product.image" alt="Imagem do produto">
            <p>Preço: R$ {{ product.price.toFixed(2) }}</p>
            <p>{{ product.description }}</p>
            <button @click="addToCart(product)">Adicionar ao Carrinho</button>
        </div>
    </body>
</template>
  
<script>
  export default {
    data() {
      return {
        product: null, 
      };
    },
    mounted() {
      const productId = this.$route.params.id; 
      this.fetchProductDetails(productId);  
    },
    methods: {
      fetchProductDetails(id) {
        const products = [
          { id: 1, name: "Bolo de Chocolate", price: 39.9, description: "Delicioso bolo de chocolate", image: require("../../img/BOLO1.png") },
          { id: 2, name: "Bolo de Morango", price: 39.9, description: "Bolo de morango fresquinho", image: require("../../img/BOLO2.png") },
          { id: 3, name: "Bolo de Frutas", price: 39.9, description: "Bolo com frutas variadas", image: require("../../img/BOLO3.png") },
          { id: 4, name: "Bolo de Chocolate Branco", price: 39.9, description: "Bolo de chocolate branco cremoso", image: require("../../img/BOLO4.png") },
       
        ];
  
        this.product = products.find(product => product.id === parseInt(id)); 
      },
      addToCart(product) {
        alert(`${product.name} foi adicionado ao carrinho!`);
      }
    },
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

  .product-details {
    text-align: center;
    padding: 20px;
  }
  
  .product-details img {
    max-width: 300px;
    margin-bottom: 20px;
  }
  
  .product-details button {
    padding: 10px 20px;
    background-color: #C191B2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .product-details button:hover {
    background-color: #d1a3b8;
  }
  </style>
  