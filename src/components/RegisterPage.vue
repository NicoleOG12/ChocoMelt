<template>
  <div class="container">
    <div class="group">
      <div class="group2">
        <img src="../img/image.png" alt="Imagem do formulário" class="form-image" />

        <h1 class="title">Cadastro</h1>

        <div class="input-wrapper">
          <input v-model="name" placeholder="Nome Completo" type="text" class="input" />
        </div>
  
        <div class="input-wrapper">
          <input v-model="email" placeholder="Email" type="email" class="input" />
        </div>
  
        <div class="input-wrapper">
          <input v-model="birthDate" placeholder="Data de Nascimento" type="date" class="input" />
        </div>
  
        <div class="input-wrapper">
          <input v-model="password" placeholder="Senha" type="password" class="input" />
        </div>
  
        <div class="input-wrapper">
          <input v-model="confirmPassword" placeholder="Confirmar Senha" type="password" class="input" />
        </div>
  
        <button @click="register" style="top: 80px; position: relative;">Criar Conta</button>
  
        <div class="login-area">
          <p>Já possui uma conta?</p>
          <router-link to="/Login" class="login-link">Entre aqui</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, firestore } from "../FirebaseConfig"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      email: "",
      birthDate: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        alert("As senhas não coincidem.");
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);  
        alert("Conta criada com sucesso!");
        const user = userCredential.user;

        await setDoc(doc(firestore, "Usuário", user.uid), {
          nome: this.name,
          email: this.email,
          data_nascimento: this.birthDate,
          userType: "user", 
        });

        this.$router.push({ name: "Home Page", params: { userId: user.uid } });
      } catch (error) {
        alert("Erro ao criar conta: " + error.message);
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
  height: 740px;
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
  margin-top: -5px;
  margin-bottom: 30px;
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
  margin-top: -50px;
}

button:hover {
  color: white;
  box-shadow: inset 0 -100px 0 0 #C191B2;
}

button:active {
  transform: scale(0.9);
}

.login-area {
  color: black;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 20px;
}

.login-link {
  color: #C191B2;
  text-decoration: underline;
  margin-left: 4px;
}

.form-image {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  height: 200px;
  margin-bottom: -28px;
}
</style>
