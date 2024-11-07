<template>
  <div id="app">
    <header class="menu">
      <nav>
        <ul>
          <li><router-link to="/HomePage">Home Page</router-link></li>
          <li><router-link to="/contactUs">Contate-nos</router-link></li>
          <li><router-link to="/aboutUS">Sobre nós</router-link></li>
          <li><router-link to="/LoginForm">Login</router-link></li>
          <li><router-link to="/NewPage">NewPage</router-link></li>
          
        </ul>
      </nav>
    </header>

    <router-view></router-view>
  </div>

  <div class="footer">
      <footer>
        <div>
          <p class="copyright" >Copyright © 2024</p>
        </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  background-image: url(https://images.app.goo.gl/tUkbf2CLc8V7gjVS6);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
}

.menu {
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 10px; 
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  margin-top: -50px;
}

.menu nav ul {
  list-style-type: none;
  padding: 0;
}

.menu nav ul li {
  display: inline;
  margin-right: 15px; 
}

.menu nav ul li a {
  text-decoration: none;
  color: #000000; 
  font-family: 'Allura';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/allura/v21/9oRPNYsQpS4zjuA_iwgW.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.footer {
  padding: 20px 0;
  background-color:#ffffff;
  color:#000000;
  margin-top: 10px;
}

.footer .copyright {
  margin-top:14px;
  margin-bottom:0;
  font-size:13px;
  opacity:0.6;
}
</style>