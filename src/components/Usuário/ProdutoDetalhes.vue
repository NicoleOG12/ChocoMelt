<template>
  <body>
    <div class="icons">
      <img src="../../img/carrinho.png" alt="Carrinho">
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
      
      <div class="actions">
        <button @click="addToCart" class="btn add-to-cart">Adicionar ao Carrinho</button>
        <button @click="buyNow" class="btn buy-now">Comprar Agora</button>
      </div>
    </div>

  </body>
</template>

<script>
import { firestore, doc, getDoc, collection, addDoc } from '../../FirebaseConfig'; 
import { getAuth } from 'firebase/auth'; 

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
          this.product.id = docSnapshot.id; 
          console.log('Produto carregado:', this.product); 
        } else {
          console.log('Produto não encontrado');
          this.product = null;
        }
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
        this.product = null;
      }
    },
    
    async addToCart() {
      if (this.product && this.product.id) {
        try {
          const user = getAuth().currentUser; 

          if (user) {
            const cartItem = {
              userId: user.uid,
              productId: this.product.id,
              name: this.product.Nome, 
              price: this.product.Preco,
              image: this.product.Foto,
              createdAt: new Date(),
            };

            console.log('Adicionando ao carrinho:', cartItem);
            
            await addDoc(collection(firestore, 'Carrinho'), cartItem);
            
            console.log('Produto adicionado ao carrinho do Firebase:', cartItem);
          } else {
            console.log('Usuário não autenticado');
          }
        } catch (error) {
          console.error('Erro ao adicionar ao carrinho:', error);
        }
      } else {
        console.log('Produto ou ID do produto não está definido');
      }
    },

    buyNow() {
      if (this.product) {
        console.log('Iniciando a compra do produto:', this.product);
        this.$router.push({ name: 'Checkout' }); 
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

.actions {
  margin-top: 20px;
}

.btn {
  background-color: #C191B2;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #A87C9B;
}

.add-to-cart {
  background-color: #C191B2;
}

.add-to-cart:hover {
  background-color: #835a76;
}

.buy-now {
  background-color: #96bfd4;
}

.buy-now:hover {
  background-color: #6f92a3;
}
</style>
