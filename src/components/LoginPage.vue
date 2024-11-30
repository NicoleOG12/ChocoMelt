<template>
  <div class="group">
    <div class="group2">
      <h1 class="title" style="color: blue; top: 40px; position: relative;">Login</h1>

      <div style="margin-bottom: 20px; top: 70px; position: relative;">
        <input v-model="email" placeholder="Email" type="email" class="input" />
      </div>

      <div style="position: relative; margin-bottom: 20px; top: 70px;">
        <input v-model="password" placeholder="Senha" type="password" class="input" />
      </div>

      <router-link>
        <p style="color: black; position: relative; top: 60px; font-size: 14px; left: 70px;">Esqueceu sua senha?</p>
      </router-link>

      <button @click="login" style="top: 80px; position: relative;">Entrar</button>

      <div style="position: relative; top: 100px;">
        <p style="color: black; top: 0px; position: relative;">Não possui uma conta?</p>
        <router-link to="/Register" style="color: blue; text-decoration: underline;">Crie aqui</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../FirebaseConfig"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore"; 

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);  
        alert("Login bem-sucedido!");
        const user = userCredential.user;
        const db = getFirestore(); 
        const userDocRef = doc(db, "Usuário", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const userType = userData.userType;

          if (userType === "user") {
            this.$router.push({ name: "Home Page", params: { userId: user.uid } });
          }
        } else {
          const companyDocRef = doc(db, "Empresa", user.uid); 
          const companyDoc = await getDoc(companyDocRef);

          if (companyDoc.exists()) {
            this.$router.push({ name: "AdicionarProdutos", params: { userId: user.uid } });
          } else {
            alert("Erro: usuário não encontrado no Firestore!");
          }
        }
      } catch (error) {
        alert("Erro ao fazer login: " + error.message);
      }
    },
  },
};
</script>

<style scoped>
body {
  background-image: url(../assets/steve-johnson-YtU1IdsS9Y8-unsplash.jpg);
  background-repeat: no-repeat;
}

button {
  position: relative;
  display: inline-block;
  margin: 16px;
  padding: 13px 35px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #3c00ff;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #0400ff;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #bbb8e4;
}

button:hover {
  color: white;
  box-shadow: inset 0 -100px 0 0 #3c01ff;
}

button:active {
  transform: scale(0.9);
}

.title {
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.group {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
  gap: 20px;
  justify-content: center; 
  align-items: center; 
}

.input {
  height: 40px;
  padding: 0 6rem;
  padding-left: 1.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: .3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus, input:hover {
  outline: none;
  border-color: rgba(87, 76, 234, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgba(55, 85, 255, 0.1);
}

.group2 {
  background-color: #ffffff;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.219), 0 6px 6px 0 rgba(0, 0, 0, 0.151);
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  position: relative;
  padding-left: 90px;
  padding-right: 90px;
  padding-bottom: 160px;
}
</style>
