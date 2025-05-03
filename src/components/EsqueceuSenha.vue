<template> 
    <div class="container">
      <div class="group">
        <div class="group2">
          <img src="../img/image.png" alt="Imagem do formulário" class="form-image" />
  
          <h1 class="title">Redefinir Senha</h1>
  
          <div class="input-wrapper">
            <input v-model="email" placeholder="Email" type="email" class="input" />
            <p
              :style="{
                color: corMensagem,
                marginTop: '5px',
                minHeight: '20px',
                visibility: mensagem ? 'visible' : 'hidden'
              }"
            >
              {{ mensagem }}
            </p>
          </div>
  
          <button @click="redefinirSenha">Redefinir</button>
        </div>
      </div>
  
      <div v-if="showModal" class="modal-overlay">
        <div class="modal">
          <p>Email de redefinição enviado com sucesso!</p>
          <button @click="fecharModal">OK</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getAuth, sendPasswordResetEmail } from "firebase/auth";
  import { app } from "@/FirebaseConfig";
  
  export default {
    data() {
      return {
        email: "",
        mensagem: "",
        corMensagem: "green",
        showModal: false,
      };
    },
    methods: {
      async redefinirSenha() {
        const auth = getAuth(app);
  
        if (!this.email) {
          this.mensagem = "Por favor, insira um e-mail.";
          this.corMensagem = "red";
          return;
        }
  
        try {
          await sendPasswordResetEmail(auth, this.email);
          this.showModal = true;
          this.email = "";
          this.mensagem = "";
        } catch (error) {
          if (error.code === "auth/user-not-found") {
            this.mensagem = "Usuário não encontrado.";
          } else if (error.code === "auth/invalid-email") {
            this.mensagem = "Email inválido.";
          } else {
            this.mensagem = "Erro ao tentar redefinir a senha.";
          }
          this.corMensagem = "red";
        }
      },
      fecharModal() {
        this.showModal = false;
        this.$router.push("/login");
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
    height: 460px;
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
    flex-direction: column;
    align-items: center;
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
    top: -20px;
  }
  
  button:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #C191B2;
  }
  
  button:active {
    transform: scale(0.9);
  }
  
  .form-image {
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    height: 200px;
    margin-bottom: -65px;
    margin-top: -35px;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .modal {
    background-color: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .modal button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #C191B2;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .modal button:hover {
    background-color: #a46d98;
  }
  </style>
  