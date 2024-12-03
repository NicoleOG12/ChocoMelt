<template>
  <body>
    <div class="icons">
      <img src="../../img/carrinho.png" alt="Usuário">
    </div>

    <div v-if="!product" class="loading">
      Carregando produto...
    </div>

    <div v-if="product" class="card">
      <img :src="product.Foto" alt="Imagem do produto" v-if="product.Foto" />
    </div>

    <div v-if="product" class="cards">
      <h1>{{ product.Nome || 'Nome não disponível' }}</h1>
      <p><strong>Preço:</strong> {{ product.Preco || 'Não disponível' }} </p>
      <p><strong>Peso:</strong> {{ product.Peso || 'Não disponível' }}</p>
      <p><strong>Categoria:</strong> {{ product.Categoria || 'Não disponível' }}</p>
      <p><strong>Descrição:</strong> {{ product.Descricao || 'Não disponível' }}</p>
    </div>

  </body>
</template>

<script>
import { firestore, doc, getDoc } from '../../FirebaseConfig'; 

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
    async fetchProductDetails(id) {
      try {
        const productDocRef = doc(firestore, 'Produtos', id);
        const docSnapshot = await getDoc(productDocRef);

        if (docSnapshot.exists()) {
          this.product = docSnapshot.data();
        } else {
          console.log('Produto não encontrado');
          this.product = null;
        }
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
        this.product = null; 
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: #A8D1E7;
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  height: 100vh;

  display: flex;  
  justify-content: flex-start; 
  align-items: flex-start;
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

.card {
  background-color: #C191B2;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  height: 400px;
  margin-left: 80px;
  margin-top: 80px;
  text-align: center;
}

.card img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  align-items: center;
  margin-top: 10px;
}

.cards {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  width: 600px;
  height: 400px; 
  margin-left: 0px;
  margin-top: 80px;
}

.loading {
  text-align: center;
  color: #666;
  font-size: 1.2em;
}
</style>
