<template>
  <body>
    <header class="header">
      <div class="logo">
        <img src="../../img/Logo.png" alt="Usuário">
      </div>
      <nav class="nav">
        <ul>
          <li><router-link to="/HomePage">Home</router-link></li>
          <li><router-link to="/Produtos">Produtos</router-link></li>
          <li><router-link to="/Contato">Contato</router-link></li>
          <li><router-link to="/SobreNos">Sobre Nós</router-link></li>
          <li>
            <router-link to="/Carrinho">
              <div class="icon"><img src="../../img/carrinho.png" alt="Carrinho"></div>
            </router-link>
          </li>
        </ul>
      </nav>

      <router-link to="/Login">
        <div class="icons"><img src="../../img/user.png" alt="Usuario"></div>
      </router-link>
    </header>

    <div class="cart-container">
      <h2>Itens no Carrinho</h2>

      <div v-if="cartItems.length === 0" class="empty-cart">
        <p>Seu carrinho está vazio!</p>
      </div>

      <div v-else class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" alt="Imagem do Produto" class="cart-item-image"/>
          <div class="cart-item-details">
            <h3>{{ item.name }}</h3>
            <p><strong>Preço:</strong> {{ formatPrice(item.price) }}</p>
          </div>

          <div class="cart-item-footer">
            <div class="quantity-control">
              <button @click="changeQuantity(item.id, -1)" :disabled="item.quantity <= 1">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="changeQuantity(item.id, 1)">+</button>
            </div>
            <div class="checkbox">
              <input 
                type="checkbox" 
                :id="'item-' + item.id" 
                v-model="item.selected"
                @change="updateTotalPrice" 
              />
              <label :for="'item-' + item.id">Selecionar</label>
            </div>
          </div>
        </div>

        <div class="total">
          <p><strong>Total:</strong> {{ formatPrice(totalPrice) }}</p>
        </div>
        
        <div class="buttons-container">
          <div class="delete-button">
          <button 
          @click="deleteSelectedItems"
          :disabled="!hasSelectedItems"
          :class="{'disabled': !hasSelectedItems}"
        >
           Excluir Itens Selecionados
          </button>
        </div>

          <div class="purchase-button">
            <button 
            @click="handlePurchase" 
            :disabled="!hasSelectedItems"
            :class="{'disabled': !hasSelectedItems}"
          >
            Finalizar Compra
          </button>
        </div>
        
      </div>
    </div>
  </div>
  </body>
</template>

<script>
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"; 

export default {
  data() {
    return {
      cartItems: [], 
      totalPrice: 0,
    };
  },
  computed: {
    hasSelectedItems() {
      return this.cartItems.some(item => item.selected); 
    },
  },
  mounted() {
    this.fetchCartItems(); 
  },
  methods: {

    async fetchCartItems() {
      const user = getAuth().currentUser; 

      if (user) {
        try {
          const firestore = getFirestore(); 

          const cartQuery = query(
            collection(firestore, "Carrinho"),
            where("userId", "==", user.uid) 
          );
          const querySnapshot = await getDocs(cartQuery);
          
          this.cartItems = [];

          querySnapshot.forEach((doc) => {
            const item = doc.data();
            const price = parseFloat(item.price.replace('R$', '').replace(',', '.'));

            this.cartItems.push({
              id: doc.id,
              name: item.name,
              price: price, 
              image: item.image,
              quantity: item.quantity || 1,
              selected: false, 
            });
          });

          this.calculateTotal();

        } catch (error) {
          console.error("Erro ao buscar os itens do carrinho:", error);
          this.cartItems = [];
        }
      } else {
        this.cartItems = []; 
      }
    },

    calculateTotal() {
      this.totalPrice = this.cartItems.reduce((acc, item) => {
        if (item.selected) {
          return acc + (item.price * item.quantity); 
        }
        return acc;
      }, 0);
    },

    updateTotalPrice() {
      this.calculateTotal(); 
    },

    changeQuantity(itemId, change) {
      const item = this.cartItems.find(i => i.id === itemId);

      if (item) {
        item.quantity += change;
        if (item.quantity < 1) item.quantity = 1; 

        this.calculateTotal();

        this.updateCartItemQuantity(itemId, item.quantity);
      }
    },

    async updateCartItemQuantity(itemId, quantity) {
      const firestore = getFirestore();
      const itemRef = doc(firestore, "Carrinho", itemId);
      
      try {
        await updateDoc(itemRef, {
          quantity: quantity,
        });
      } catch (error) {
        console.error("Erro ao atualizar a quantidade no Firestore:", error);
      }
    },

    async deleteSelectedItems() {
      const selectedItems = this.cartItems.filter(item => item.selected);

      if (selectedItems.length > 0) {
        const firestore = getFirestore();
        for (let item of selectedItems) {
          const itemRef = doc(firestore, "Carrinho", item.id);
          await deleteDoc(itemRef);
        }

        this.fetchCartItems();
      }
    },

    formatPrice(price) {
      if (typeof price !== "number" || isNaN(price)) {
        return "R$ 0,00"; 
      }

      return "R$ " + price.toFixed(2).replace(".", ","); 
    },

    handlePurchase() {
      const selectedItems = this.cartItems.filter(item => item.selected);

      if (selectedItems.length > 0) {
        this.$router.push({ name: 'Compra', params: { selectedItems } });
      } else {
        alert("Nenhum item selecionado para compra.");
      }
    },
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

.cart-container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -250px;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.cart-item-details {
  flex-grow: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

.cart-item-details h3,
.cart-item-details p {
  margin: 0;
  font-size: 1.2rem;
  text-align: left; 
}

.cart-item-footer {
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  gap: 20px; 
}

.checkbox {
  display: flex;
  align-items: center;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px; 
}

.quantity-control button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
}

.quantity-control button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.total {
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
}

.buttons-container {
  display: flex;
  justify-content: space-between; 
  gap: 10px; 
  margin-top: 40px;
}

.purchase-button{
  display: flex;
  justify-content: left; 
  flex-grow: 1;
}

.delete-button {
  display: flex;
  justify-content: right; 
  flex-grow: 1; 
}

.purchase-button button {
  padding: 10px 20px;
  background-color: #C191B2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  width: auto; 
}

.delete-button button {
  padding: 10px 20px;
  background-color: #e03b3b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  width: auto; 
}

.purchase-button button.disabled,
.delete-button button.disabled {
  background-color: #cccccc; 
}

.empty-cart {
  text-align: center;
  font-size: 1.5rem;
  color: #888;
}

</style>