<template>
  <body>
    <header class="header">
      <div class="logo">
        <img src="../../img/Logo.png" alt="Usuário" />
      </div>
      <nav class="nav">
        <ul>
          <li><router-link to="/HomePage">Home</router-link></li>
          <li><router-link to="/Produtos">Produtos</router-link></li>
          <li><router-link to="/Contato">Contato</router-link></li>
          <li><router-link to="/Sobre Nós">Sobre Nós</router-link></li>
          <li>
            <router-link to="/Carrinho">
              <div class="icon"><img src="../../img/carrinho.png" alt="Carrinho" /></div>
            </router-link>
          </li>
        </ul>
      </nav>

      <router-link to="/Login">
        <div class="icons"><img src="../../img/user.png" alt="Usuario" /></div>
      </router-link>
    </header>

    <div id="promocoes">
      <div class="items">
        <div class="capa-promo1"><div class="div1"></div></div>
        <div class="capa-promo2"><div class="div2"></div></div>
        <div class="capa-promo3"><div class="div3"></div></div>
        <div class="capa-promo4"><div class="div4"></div></div>
        <div class="capa-promo5"><div class="div5"></div></div>
        <div class="capa-promo1"><div class="div1"></div></div>
        <div class="capa-promo2"><div class="div2"></div></div>
        <div class="capa-promo3"><div class="div3"></div></div>
        <div class="capa-promo4"><div class="div4"></div></div>
        <div class="capa-promo5"><div class="div5"></div></div>
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
  background-color: #a8d1e7;
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
  color: #a8d1e7;
  margin-top: 0;
  padding: 0 40px;
  margin-top: -0px;
}

.logo img {
  color: #c191b2;
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
  color: #c191b2;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
}

nav ul li a .icon img {
  margin-left: 25px;
  margin-top: -50px;
  color: #c191b2;
  height: 30px;
}

#promocoes {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 300px;
  left: 0;
  border: 5px solid #d1a3b8;
  border-radius: 15px;
  overflow: hidden;
  bottom: 40px;
}

.items {
  display: flex;
  flex-wrap: nowrap;
  gap: 5PX; 
  animation: slide-loop 20s linear infinite;
  width: max-content;
  will-change: transform;
}

@keyframes slide-loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-35%);
  }
}

.capa-promo1,
.capa-promo2,
.capa-promo3,
.capa-promo4,
.capa-promo5 {
  height: 250px;
  width: 400px;
  margin: auto;
  transition: all 0.4s ease-in-out;
  position: relative;
  border-radius: 10px;
  border: 3px solid #c191b2;
  box-sizing: border-box;
  cursor: pointer;
}

.capa-promo1:hover,
.capa-promo2:hover,
.capa-promo3:hover,
.capa-promo4:hover,
.capa-promo5:hover {
  transform: scale(1.1) translateZ(20px);
  z-index: 10;
}

.capa-promo1 .div1,
.capa-promo2 .div2,
.capa-promo3 .div3,
.capa-promo4 .div4,
.capa-promo5 .div5 {
  height: 100%;
  width: 90%;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
}

.capa-promo1 .div1 {
  background-image: url('../../img/BOLO1.png');
  height: 300px;
  width: 320px;
  left: 40px;
  top: -40px;
}

.capa-promo2 .div2 {
  background-image: url('../../img/BOLO2.png');
  left: 20px;
}

.capa-promo3 .div3 {
  background-image: url('../../img/BOLO3.png');
  left: 20px;
}

.capa-promo4 .div4 {
  background-image: url('../../img/BOLO4.png');
  height: 250px;
  width: 250px;
  left: 70px;
}

.capa-promo5 .div5 {
  background-image: url('../../img/BOLO5.png');
  height: 230px;
  width: 280px;
  left: 50px;
  top: 10px;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  nav ul {
    flex-direction: column;
    gap: 10px;
  }

  .items {
    flex-direction: column;
    gap: 20px;
    animation: none;
    width: auto;
  }

  .capa-promo1,
  .capa-promo2,
  .capa-promo3,
  .capa-promo4,
  .capa-promo5 {
    width: 50%;
    height: 50px;
  }
}
</style>
