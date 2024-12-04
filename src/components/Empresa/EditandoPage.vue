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
    
    <div class="add-product-form">
      <h2>Editar Produto</h2><br>
  
      <form @submit.prevent="updateProduct">
  
        <div class="form-group">
          <label for="nome">Nome</label>
          <input v-model="product.Nome" type="text" id="nome" required />
        </div><br>
  
        <div class="form-group">
          <label for="foto">Foto</label>
          <input @change="handleFileUpload" type="file" id="foto" />
          <p v-if="product.Foto">Imagem selecionada: {{ product.Foto.name }}</p>
        </div><br>
  
        <div class="form-group">
          <label for="categoria">Categoria</label>
          <input v-model="product.Categoria" type="text" id="categoria" required />
        </div><br>
  
        <div class="form-group">
          <label for="detalhes">Descrição</label>
          <textarea v-model="product.Descricao" id="detalhes" required></textarea>
        </div><br>
  
        <div class="form-group">
          <label for="peso">Peso</label>
          <input v-model="product.Peso" type="text" id="peso" required />
        </div><br>
  
        <div class="form-group">
          <label for="preco">Preço</label>
          <input v-model="product.Preco" type="text" id="preco" required />
        </div><br><br>
        
        <div class="button-group">
          <button type="submit">Salvar Alterações</button><br><br>
          <button type="button" @click="deleteProduct">Excluir Produto</button>
      </div> 
      
      </form>
    </div>
  </body>
</template>

<script>
import { getFirestore, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

export default {
  data() {
    return {
      product: {
        Nome: "",
        Foto: null,     
        Categoria: "", 
        Descricao: "",      
        Peso: "",       
        Preco: "",      
      },
      productId: null, 
    };
  },
  async created() {
    this.productId = this.$route.params.id; 
    
    if (this.productId) {
      await this.loadProductData();
    }
  },
  methods: {
    async loadProductData() {
      try {
        const db = getFirestore();
        const docRef = doc(db, "Produtos", this.productId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          this.product = docSnap.data(); 
        } else {
          alert("Produto não encontrado!");
        }
      } catch (error) {
        alert("Erro ao carregar dados do produto: " + error.message);
      }
    },

    async updateProduct() {
      try {
        const db = getFirestore();
        const docRef = doc(db, "Produtos", this.productId);
        
        await updateDoc(docRef, {
          Nome: this.product.Nome,
          Foto: this.product.Foto ? this.product.Foto.name : this.product.Foto, 
          Descricao: this.product.Descricao,
          Peso: this.product.Peso,
          Preco: this.product.Preco,
        });

        alert("Produto atualizado com sucesso!");
      } catch (error) {
        alert("Erro ao atualizar produto: " + error.message);
      }
    },

    async deleteProduct() {
      try {
        const db = getFirestore();
        const docRef = doc(db, "Produtos", this.productId);
        
        await deleteDoc(docRef);
        alert("Produto excluído com sucesso!");

        this.$router.push("/Produtos");
      } catch (error) {
        alert("Erro ao excluir produto: " + error.message);
      }
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.product.Foto = file;
      }
    }
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

.add-product-form {
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  border-radius: 40px;
  max-width: 600px;
  box-shadow: 0 0 10px rgba(114, 15, 15, 0.1);
  margin-top: -400px;
}

.add-product-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #C191B2;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  display: block;
}

.form-group input,
.form-group textarea {
  width: 450px;
  padding: 10px;
  border: 2px solid #b4b4b4;
  border-radius: 10px;
}

.form-group textarea {
  height: 100px;
}

button {
  background-color: #C191B2;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 400px;
  font-size: 16px;
}

button:hover {
  background-color: #d1a3b8;
}

.button-group {
display: flex;
gap: 10px; 
justify-content: center; 
margin-top: 20px; 
}

.form-group input:hover,
.form-group textarea:hover {
  border-color: #d1a3b8;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    text-align: center;
    justify-content: center; 
  }
}
</style>
