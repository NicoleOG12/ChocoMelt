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
      <h2>Adicionar Produto</h2><br>

      <form @submit.prevent="addProduct">

        <div class="form-group">
          <label for="nome">Nome</label>
          <input v-model="product.Nome" type="text" id="nome" required />
        </div><br>

        <div class="form-group">
          <label for="foto">Foto</label>
          <input @change="handleFileUpload" type="file" id="foto" required />
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

        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  </body>
</template>

<script>
import { getAuth } from "firebase/auth"; 
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

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
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          this.product.Foto = reader.result; 
        };

        reader.readAsDataURL(file);  
      }
    },

    async addProduct() {
      try {
        const db = getFirestore(); 
        const auth = getAuth();  
        const user = auth.currentUser;  

        if (!user) {
          alert("Você precisa estar logado para adicionar um produto!");
          return;
        }

        await addDoc(collection(db, "Produtos"), {
          Nome: this.product.Nome,
          Foto: this.product.Foto, 
          Categoria: this.product.Categoria,
          Descricao: this.product.Descricao,
          Peso: this.product.Peso,
          Preco: this.product.Preco,
        });

        alert("Produto adicionado com sucesso!");
        
        this.product = {
          Nome: "",
          Foto: null,     
          Categoria: "", 
          Descricao: "",      
          Peso: "",      
          Preco: "",
        };
      } catch (error) {
        alert("Erro ao adicionar produto: " + error.message);
      }
    }
  }
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