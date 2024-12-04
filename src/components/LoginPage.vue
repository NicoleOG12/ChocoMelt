<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

    <header class="header">
        <nav class="navbar">
            <router-link to="/HomePage">Home</router-link>
            <a href="#">Produtos</a>
            <a href="#">Contato</a>
            <a href="#">Sobre</a>
        </nav>
    </header>

    <div class="background"></div>
    <div class="container">
        <div class="content">
            <h2 class="title">Chocomelt</h2>

            <div class="text-sci">
                <h2 class="logo"> Bem-vindo! <br> <span>Ao nosso site.</span></h2>

                <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Deserunt deleniti vel 
                fugiat in voluptates quos cum ex eos labore. 
                Excepturi vel voluptates a, ducimus veritatis 
                laboriosam officia repellendus esse debitis.</p>

                <div class="social-icons">
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                    <a href="#"></a>
                </div>
            </div>
        </div>
            
        <div class="logreg-box">
            <div class="form-box login" >
                <form action="#">
                    <h2>Login</h2>

                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope' ></i></span>
                        <input placeholder="Email" type="email" required>
                        <!-- <label>Email</label> -->
                    </div>

                    <div class="input-box">
                        <span class="icon"><box-icon type='solid' name='lock'></box-icon></span>
                        <input placeholder="Senha" type="password" required>
                        <!-- <label>Senha</label> -->
                    </div>
                    <div class="remember-forgot">
                        <label for=""><input type="checkbox">Lembrar da minha conta</label>
                        <a href="#">Esqueceu sua senha?</a>
                    </div>

                    <button type="submit" class="btn">Sign In</button>

                    <div class="login-link">
                        <p>Não tem uma conta?<a href="#" class="register-link"> Registre-se</a></p>
                    </div>
                </form>
            </div>

            <div class="form-box register" >
                <form action="#">
                    <h2>Registro</h2>

                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope' ></i></span>
                        <input placeholder="Nome" type="text" required>
                        <!-- <label>Nome</label> -->
                    </div>

                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope' ></i></span>
                        <input placeholder="Email" type="email" required>
                        <!-- <label>Email</label> -->
                    </div>

                    <div class="input-box">
                        <span class="icon"><box-icon type='solid' name='lock'></box-icon></span>
                        <input placeholder="Senha" type="password" required>
                        <!-- <label>Senha</label> -->
                    </div>
                    <div class="remember-forgot">
                        <label for=""><input type="checkbox">Eu concordo com os termos & condições</label>
                
                    </div>

                    <button type="submit" class="btn">Registrar</button>

                    <div class="login-register">
                        <p>Possui uma conta?<a href="#" class="login-link"> Faça o login aqui</a></p>
                    </div>
                </form>
            </div>


        </div>
    </div>
    <!-- <script src="script.js"></script> -->
</template>


<script>

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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    
}

body{
    background-color: "blue";
    width: 100%;
    
}

.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px 12.5%;
    background-color: transparent;
    display: flex;
    justify-content: space-between ;
    align-items: center;
    z-index: 100;
    background-color: blue;
}

.navbar a {
    position: relative;
    font-size: 16px;
    color: white;
    text-decoration: none;
    font-weight: 500;
    margin-right: 30px;
}

.navbar a::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: white;
    border-radius: 5px;
    transform: translateY(10px);
    opacity: 0;
    transition: .5s;
}

.navbar a:hover::after{
    transform: translateY(0);
    opacity: 1;
}

.background{
    width: 100%;
    height: 100vh;
    background: url(../assets/steve-johnson-YtU1IdsS9Y8-unsplash.jpg) no-repeat;    
    background-size: cover;
    background-position: center;
} 

.container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 550px;
    background: url(../assets/steve-johnson-YtU1IdsS9Y8-unsplash.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-top: 10px;
}

.container .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 58%;
    height: 100%;
    background-color: transparent ;
    padding: 80px;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
    text-shadow: 1px 1px 2px rgb(110, 41, 64);
}

.content .logo {
    font-size: 30px;

}

.text-sci h2 {
    font-size: 40px;
    line-height: 1;
}

.text-sci h2 span {
    font-size: 25px;
}

.text-sci p {
    font-size: 16px;
    margin: 50px 0;
}

.social-icons a i {
    font-size: 22px;
    color: white;
    margin-right: 10px;
    transition: .5s ease ;
}

.social-icons a:hover i {
    transform: scale(1.2);
}

.container .logreg-box {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% - 58%);
    height: 100%;
    background-color: transparent;
    overflow: hidden;
}

.logreg-box .form-box {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    backdrop-filter: blur(20px);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: white;

}

.logreg-box .form-box.login {
    transform: translateX(0);
    transition: transform .6s ease;
    transition-delay: .7s;
}

.logreg-box.active .form-box.login {
    transform: translateX(430px);
    transition-delay: 0s;
}

.logreg-box .form-box.register {
    transform: translateX(430px);
    transition: transform .5s ease;
    transition-delay: 0s;
}

.logreg-box.active .form-box.register {
    transform: translateX(0);
    transition-delay: .7s;
}


.form-box h2 {
    font-size: 32px;
    text-align: center;
}

.form-box .input-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    position: relative;
    width: 340px;
    height: 50px;
    /* border-bottom: 2px solid white; */
    margin: 30px 0;
    gap: 20px;
    justify-content: center; 


}

.input-box input {
    width: 100%;
    height: 40px;
    background-color: white;
    /* border: none; */
    outline: none;
    font-size: 16px;
    color: rgb(0, 0, 0);
    font-weight: 500; 
    padding-right: 28px;
    padding: 0 6rem;
    padding-left: 1.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
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


.input-box label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 500;
    pointer-events: none;
    transition: .5s ease;
    color: black;

}

.input-box input:focus~label,
.input-box input:valid~label {
    top: -5px;
}


.input-box .icon {
    position: absolute;
    top: 13px;
    right: 0;
    font-size: 19px;
}

.form-box .remember-forgot {
    font-size: 14.5px;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;

}

.remember-forgot label input {
    accent-color: white;
    margin-right: 3px;
}

.remember-forgot a {
    color: white;
    text-decoration: none;
}

.remember-forgot a:hover {
    text-decoration: underline;
}

.btn {
position: relative;
  display: inline-block;
  margin: 16px;
  padding: 13px 35px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #a40e00;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #a60000;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #bbb8e4;
}


button:hover {
  color: white;
  box-shadow: inset 0 -100px 0 0 #591a1a;
}

button:active {
  transform: scale(0.9);
}

.form-box .login-register {
    font-size: 14.5px;
    font-weight: 500;
    text-align: center;
    margin-top: 25px;
}

.login-register p a {
    color: white;
    font-weight: 600;
    text-decoration: none;
    
    
}

.login-register p a:hover {
    text-decoration: underline;
}

.title {
    font-family: "Lobster Two", sans-serif;
    font-weight: 400px;
    font-size: 50px;
    text-shadow: 1px 1px 2px red, 0 0 1em rgb(106, 40, 40), 0 0 0.2em rgb(56, 27, 20);
}
</style>
