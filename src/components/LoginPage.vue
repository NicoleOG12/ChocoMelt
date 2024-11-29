<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">



<div class="group">
   
    
   
     <div class="group2">
        <h1 class="title" style="color: blue; top: 40px; position: relative;">Login</h1>

    
        <div style="margin-bottom: 20px; position: relative; top: 70px; ">
        <input placeholder="Nome" type="text" class="input">
        </div>

        <div style="margin-bottom: 20px; top: 70px; position: relative;">
        <input placeholder="Email" type="email" class="input">
        </div>

        <div style="position: relative; margin-bottom: 20px; position: relative; top: 70px;"> 
        <input placeholder="Senha" type="password" class="input">
        </div>
        
      <router-link>
        <p style="color: black; position: relative; top: 60px; font-size: 14px; left: 70px;">Esqueceu sua senha?</p>
      </router-link>

        <button style="top: 80px; position: relative;">Entrar</button>

        <div style="position: relative; top: 100px;">
        <p style="color: black; top: 0px; position: relative;">Não possui uma conta?</p> 
         <router-link to="/Register" style="color: blue; text-decoration: underline;">Crie aqui</router-link> 
        </div>
     </div>   
       

       
</div>
</template>

<script>

</script>


<style>

body{
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
 /* line-height: 58px; */
 align-items: center;
 /* position: relative; */
 /* max-width: 190px; */
 flex-direction: column;
 background-color: transparent;
 width: 100%;
 /* height: 100%; */
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

/* .icon {
 position: absolute;
 left: 1rem;
 fill: #9e9ea7;
 width: 1rem;
 height: 1rem;
} */

.group2 {
    background-color: #ffffff;
    /* width: 500px;
    height: 350px; */
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