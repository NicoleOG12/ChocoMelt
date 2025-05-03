<template>
  <div class="container">
    <div class="group">
      <div class="group2">
        <img src="../img/image.png" alt="Imagem do formulário" class="form-image" />

        <h1 class="title">Login</h1>

        <div class="input-wrapper">
          <input v-model="email" placeholder="Email" type="email" class="input" />
        </div>

        <div class="input-wrapper">
          <input v-model="password" placeholder="Senha" type="password" class="input" />
        </div>

        <router-link to="/EsqueceuSenha" >
          <p class="forgot-password">Esqueceu sua senha?</p>
        </router-link>

        <button @click="login">Entrar</button>

        <div class="register-area">
          <p>Não possui uma conta?</p>
          <router-link to="/Register" class="register-link">Crie aqui</router-link>
        </div>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.group {
  height: 660px;
  width: 500px;
  background-color: #A8D1E7;
  border-radius: 25px;
  border: solid 5px #C191B2;
  color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.219), 0 6px 6px 0 rgba(0, 0, 0, 0.151);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.group2 {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.title {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  color: #C191B2;
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 40px;
}

.input-wrapper {
  margin-bottom: 20px;
  width: 400px;
  display: flex;
  justify-content: center;
}

.input {
  height: 40px;
  width: 80%;
  padding-left: 1.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: #f3f3f4;
  color: #916282;
  transition: .3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
.input:hover {
  outline: none;
  border-color: #C191B2;
  background-color: #fff;
  box-shadow: 0 0 0 4px rgba(55, 85, 255, 0.1);
}

button {
  display: inline-block;
  margin: 16px;
  padding: 13px 35px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  color: #C191B2;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #af88a3;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #ddaacd;
  position: relative;
  top: 10px;
}

button:hover {
  color: white;
  box-shadow: inset 0 -100px 0 0 #C191B2;
}

button:active {
  transform: scale(0.9);
}

.forgot-password {
  color: black;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 95px;
  text-align: right;
  width: 80%;
}

.register-area {
  color: black;
  text-align: center;
  margin-top: 20px;
}

.register-link {
  color: #C191B2;
  text-decoration: underline;
  margin-left: 4px;
}

.form-image {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  height: 200px;
  margin-bottom: -40px;
  margin-top: -52px;
}

</style>
