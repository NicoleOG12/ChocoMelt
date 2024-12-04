<template>
  <div class="group">
    <div class="group2">
      <h1 class="title" style="color: blue; top: 40px; position: relative;">Registro</h1>

      <div style="margin-bottom: 20px; top: 70px; position: relative;">
        <input v-model="name" placeholder="Nome Completo" type="text" class="input" />
      </div>

      <div style="margin-bottom: 20px; top: 70px; position: relative;">
        <input v-model="cpf" placeholder="CPF" type="text" class="input" />
      </div>

      <div style="margin-bottom: 20px; top: 70px; position: relative;">
        <input v-model="email" placeholder="Email" type="email" class="input" />
      </div>

      <div style="position: relative; margin-bottom: 20px; top: 70px;">
        <input v-model="phone" placeholder="Telefone" type="text" class="input" />
      </div>

      <div style="position: relative; margin-bottom: 20px; top: 70px;">
        <input v-model="birthDate" placeholder="Data de Nascimento" type="date" class="input" />
      </div>

      <div style="position: relative; margin-bottom: 20px; top: 70px;">
        <input v-model="password" placeholder="Senha" type="password" class="input" />
      </div>

      <div style="position: relative; margin-bottom: 20px; top: 70px;">
        <input v-model="confirmPassword" placeholder="Confirmar Senha" type="password" class="input" />
      </div>

      <button @click="register" style="top: 80px; position: relative;">Criar Conta</button>

      <div style="position: relative; top: 100px;">
        <p style="color: black; top: 0px; position: relative;">Já tem uma conta?</p>
        <router-link to="/Login" style="color: blue; text-decoration: underline;">Entre aqui</router-link>
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
      cpf: "",
      email: "",
      phone: "",
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
          cpf: this.cpf,
          email: this.email,
          telefone: this.phone,
          data_nascimento: this.birthDate,
          userType: "user", 
        });

        this.$router.push({ name: "HomePage", params: { userId: user.uid } });
      } catch (error) {
        alert("Erro ao criar conta: " + error.message);
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
  justify-content: center; 
  align-items: center; 
  gap: 20px;
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
  color:rgba(255, 255, 255, 0.8);
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
