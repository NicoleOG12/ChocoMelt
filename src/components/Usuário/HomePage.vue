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
          <li><router-link to="/Sobre Nós">Sobre Nós</router-link></li>
          <li>
            <router-link to="/Carrinho">
              <div class="icon"><img src="../../img/carrinho.png" alt="Carrinho"></div>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="icons">
        <img src="../../img/user.png" alt="Usuário">
      </div>
    </header>
    
    <div id="promocoes">
      <div class="items">
        <div class="capa-promo">
          <div>fff</div>
        </div>
        <div class="capa-promo">
          <div>fff</div>
        </div>
        <div class="capa-promo">
          <div>fff</div>
        </div>
        <div class="capa-promo">
          <div>fff</div>
        </div>
        <div class="capa-promo">
          <div>fff</div>
        </div>
      </div>
    </div>
  </body>
</template>
  
<script>
import { auth } from "../../FirebaseConfig";
export default {
  name: "HomePage",
  data() {
    return {
      email: "",
      password: "",
      isAuthenticated: false, 
      userId: null, 
    };
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: "Login" });
    },
    
    logout() {
      auth.signOut();
      this.isAuthenticated = false;
      this.userId = null;
      this.$router.push("/"); 
    },
  },
  created() {
    if (auth.currentUser) {
      this.userId = auth.currentUser.uid;
      this.isAuthenticated = true;
    }
  },
  watch: {
    "$route.params.id"(newId) {
      this.userId = newId;
    },
  },
};
</script>
  
<style scoped>
body {
  background-color: #A8D1E7;
  position: absolute;
  top: -8px;
  left: -20px;
  right: -20px;
  height: 120%;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(../../img/image.png);
  background-size: cover;
  background-position: center; 
  height: 100vh;
  color: #C191B2;
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

span, p, a:any-link a:visited, a:link {
  margin: 0px;
  color: inherit;
  text-decoration: none;
  text-decoration-color: none;
}

#promocoes {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  position: absolute;
  top: 300px;
  left: 0;
  border: 5px solid #d1a3b8; 
  border-radius: 15px; 
}

.items {
  display: flex;
  flex-wrap: nowrap;
  gap: 40px; 
  animation: slide-item 40s linear infinite;
  width: 2000px; 
}

.capa-promo {
  height: 200px; 
  width: 300px; 
  border: 3px solid #C191B2; 
  border-radius: 10px; 
}

.capa-promo div {
  height: 200px; 
  width: 300px;  
  margin: auto;
  transition: all 0.4s ease-in-out;
  background-image: url("https://static.vecteezy.com/system/resources/previews/029/720/177/non_2x/mixed-fruit-transparent-background-png.png");
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  border-radius: 10px; 
}

.capa-promo div:hover {
  height: 220px; 
  width: 320px; 
}

@keyframes slide-item {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>
