<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  
  
    <div id="app">
  
      <header class="header">
        <nav class="navbar">
          <router-link to="/Sobre Nós">        
          <a href="#">Sobre nós</a>
        </router-link>
  
        </nav>
      </header>
  
  
      <main class="main-content">
        <!-- Círculo Rosa -->
        <div class="circle"></div>
  
   
        <div class="intro">
          <h2>ChocoMelt</h2>
          
        <router-link to="/Login"> 
        <button class="button">
          Começar
        </button>
        </router-link>
  
        </div>
  
  
        <div class="desserts-container">
          <div class="dessert-card" style="top: 30px; left: 49%;">
            <img class="images" :src="require('../assets/cupcakes.png')"/>
            <h3>Cupcakes</h3>
          </div>
          <div class="dessert-card" style="top: 110px; left: 25%;">
            <img class="images" :src="require('../assets/cupcakes.png')"/>
            <h3>Cupcakes</h3>
          </div>
          <div class="dessert-card" style="top: 110px; left: 74%;">
            <img class="images" :src="require('../assets/cupcakes.png')"/>
            <h3>Cupcakes</h3>
          </div>
          <div class="dessert-card" style="top: 360px; left: 37%;">
            <img class="images" :src="require('../assets/cupcakes.png')"/>
            <h3>Cupcakes</h3>
          </div>
          <div class="dessert-card" style="top: 360px; left: 62%;">
            <img class="images" :src="require('../assets/cupcakes.png')"/>
            <h3>Cupcakes</h3>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  
  #app {
    font-family: 'Poppins', sans-serif;
    color: #333;
    background-color: #e8f7ff;
    position: relative;
    height: 100vh;
  }
  
  .images{
    right: 40px;
    position: relative;
  }
  
  
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px 12.5%;
    background-color: #d1a3b8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }
  
  .navbar a {
    font-size: 16px;
    color: white;
    text-decoration: none;
    font-weight: 500;
    margin-right: 30px;
    font-weight: 'bold';
  }
  
    
  
  .circle {
    position: absolute;
    top: 50px;
    left: 10%;
    width: 500px;
    height: 500px;
    border-width: 10px;
    /* border: 2px solid rgb(158, 122, 163);
    background-color: #ffc1c9; */
    border-radius: 50%;
    z-index: 1;
  }
  
  
  .main-content {
    position: relative;   
    padding: 120px 20px 0 20px;
    text-align: left;
  }
  
  .intro {
    position: relative;
    max-width: 300px;
    z-index: 2;
    left: 10%;
  }
  
  .intro h2 {
    font-size: 6rem;
    color: #ffffff;
    font-family: "Lobster Two", sans-serif;
    font-weight: 400px;
    text-shadow: 1px 1px 2px red, 0 0 30px rgba(136, 67, 67, 0.685), 0 0 0.1em rgba(116, 54, 38, 0.774);
  }
  
  .intro ul {
    list-style: none;
    padding: 0;
    margin-top: 10px;
  }
  
  .intro ul li {
    font-size: 1rem;
    margin: 8px 0;
    color: #666;
    display: flex;
    align-items: center;
  }
  
  .intro ul li::before {
    content: '✔️';
    margin-right: 8px;
    color: #ff6666;
  }
  
  
  .desserts-container {
    position: absolute;
    top: 0;
    right: 70px;
    width: 70%;
    height: 100%;
    border-width: 1px;
    justify-content: center;
    
  }
  
  .dessert-card {
    position: absolute;
    text-align: center;
    border: 1px solid rgb(192, 142, 142);
    padding: 5px;
    border-radius: 50%;
    width: 250px;
    right: 50%;
    transition: all 1000ms;
    height: 250px; 
  
  }
  
  .dessert-card:hover {
    transform: scale(1.1);
  }
  
  .dessert-card img {
    width: 100%;
    border-radius: 12px;
  }
  
  .dessert-card h3 {
    margin-top: 10px;
    font-size: 1rem;
    color: #ff4d4d;
    font-weight: bold;
  }
  
  
  
  .button {
    padding: 30px 50px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    color: #af2c2c;
    transition: all 1000ms;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid #af352c;
    left: 30%;
    bottom: 50%;
    background-color: #e8f7ff;
  }
  
  button:hover {
    color: #ffffff;
    transform: scale(1.1);
    outline: 2px solid #8f3434;
    box-shadow: 4px 5px 17px -4px #912626;
  }
  
  button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #965050;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }
  
  button:hover::before {
    width: 250%;
  }
  
  
  </style>
  