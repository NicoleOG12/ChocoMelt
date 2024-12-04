<template>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>


	<div id="homepage">
		<header class="header">
            <div class="menu">
        <div class="item">
            <a href="#" class="link">
            <span> Menu </span>
            <svg viewBox="0 0 360 360" xml:space="preserve">
                <g id="SVGRepo_iconCarrier">
                <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                ></path>
                </g>
            </svg>
            </a>
            <div class="submenu">
            <div class="submenu-item">
                <a href="#" class="submenu-link"> Produtos </a>
            </div>
            <div class="submenu-item">
                <a href="#" class="submenu-link"> Paquetes </a>
            </div>
            <div class="submenu-item">
                <a href="#" class="submenu-link"> Promoções </a>
            </div>
            <div class="submenu-item">
                <a href="#" class="submenu-link"> Pedidos </a>
            </div>
            <div class="submenu-item">
                <a href="#" class="submenu-link"> Sobre Nós </a>
            </div>

            <div class="submenu-item">
                <a href="#" class="submenu-link"> Contato </a>
            </div>
            </div>
        </div>
        </div>     
            
            <form action="#" class="search-bar">
                <input class="input" placeholder="Pesquisar" >
                <button type="submit">
                <i class='bx bx-search-alt-2'></i>
                </button>
            </form>

            <div class="bloco">
            <a href="#" id="carrinho">
				<p>Carrinho</p>
			</a>
            <a v-if="!isAuthenticated" href="#" id="area-de-login" @click="goToLogin">
				<p>ENTRAR</p>
			</a>
			
			<a v-else href="#" id="area-de-logout" @click="logout">
				<p>Sair</p>
			</a>
            </div>
    </header>
   
   
		
			
			
			
		
		</div>
		
		<div id="promocoes">
			<div class="items">
				<div class="capa-promo">
					<div></div>
				</div>
			</div>
		</div>
		
		<div v-if="userId">
			<p>Seu ID de usuário é: {{ userId }}</p>
		</div>

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
  background-color: #A8D1E7;
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
  color: #C191B2;
  margin-top: 0;
  padding: 0 40px;
}

.logo img {
  color: #C191B2;
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

.icons img {
  color: #C191B2;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
}

nav ul li a .icon img {
  margin-left: 25px;
  margin-top: -50px;
  color: #C191B2;
  height: 30px;
}

span, p, a:any-link a:visited, a:link {
	margin: 0px;
	color: inherit;
	text-decoration: none;
	text-decoration-color: none;
}
  
#promocoes {
	display: grid;
	width: fit-content;
	margin: 0px;
	grid-template-columns: 220px 220px 220px 220px 220px 220px;
}
  
#promocoes .capa-promo {
	height: 120px;
}
  
.items {
	height: 120px;
	position: relative;
	width: 1100px;
	text-align: center;
	border-radius: 4px;
	animation: slide-item 40s infinite linear;
}
  
.items:hover {
	animation-play-state: paused;
}
  
@keyframes slide-item {
	0% {
		left: -0%;
		right: -1320px;
	}
	100% {
		left: -1320px;
		right: 0%;
	}
}
  
.capa-promo div {
	height: 120px;
	width: 220px;
	transition: all 0.4s ease-in-out;
	background-image: url("https://static.vecteezy.com/system/resources/previews/029/720/177/non_2x/mixed-fruit-transparent-background-png.png");
	background-size: cover;
	background-position: center;
	position: relative;
	cursor: pointer;
}
  
.capa-promo div:hover {
	height: 124%;
	width: 124%;
	margin: -12%;
	position: relative;
}

.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 75%;
    padding: 25px 12.5%;
    background-color: transparent;
    display: flex;
    justify-content: space-between ;
    align-items: center;
    z-index: 100;
    background-color: #C191B2;
}

.search-bar {
    width: 250px;
    background-color: transparent;
    display: flex;
    position: relative;
    align-items: center;
    flex: 1;
    left: 20%;
}


.search-bar .input {
  border: 2px solid transparent;
  width: 15em;
  height: 2.5em;
  padding-left: 0.8em;
  padding-right: 0.8em;
  outline: none;
  overflow: hidden;
  background-color: #F3F3F3;
  border-radius: 10px;
  transition: all 0.5s;
  
}

.input:hover,
.input:focus {
  border: 2px solid #743838;
  box-shadow: 0px 0px 0px 7px rgba(144, 32, 32, 0.2);
  background-color: white;
}

.search-bar .input::placeholder {
    font-size: 16px;
    
}

.search-bar button {
    width: 40px;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

}

.search-bar button i {
    font-size: 22px;
    color:  #ffffff;
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


.menu {
  font-size: 16px;
  line-height: 1.6;
  color: #ffffff;
  width: fit-content;
  display: flex;
  list-style: none;
}

.menu a {
  text-decoration: none;

  font-family: inherit;
  font-size: 18px;
  line-height: inherit;
}

.menu .link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 36px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.menu .link::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #743838;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.menu .link svg {
  width: 14px;
  height: 14px;
  fill: #ffffff;
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.menu .item {
  position: relative;
}

.menu .item .submenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100%;
  border-radius: 0 0 16px 16px;
  left: 0;
  width: 100%;
  overflow: hidden;
  border: 1px solid #cccccc;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-12px);
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
  pointer-events: none;
  list-style: none;
}

.menu .item:hover .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
  border-top: transparent;
  border-color: #743838;
}

.menu .item:hover .link {
  color: #ffffff;
  border-radius: 16px 16px 0 0;
}

.menu .item:hover .link::after {
  transform: scaleX(1);
  transform-origin: right;
}

.menu .item:hover .link svg {
  fill: #ffffff;
  transform: rotate(-180deg);
}

.submenu {
    background-color: #ffffff;
}

.submenu .submenu-item {
  width: 100%;
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.submenu .submenu-link {
  color: #743838;
  display: block;
  padding: 12px 5px;
  width: 100%;
  position: relative;
  text-align: center;
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.submenu .submenu-item:last-child .submenu-link {
  border-bottom: none;
}

.submenu .submenu-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  width: 100%;
  height: 100%;
  background-color: #743838;
  z-index: -1;
  transform-origin: left;
  transition: transform 0.48s cubic-bezier(0.23, 1, 0.32, 1);
}

.submenu .submenu-link:hover:before {
  transform: scaleX(1);
  transform-origin: right;
}

.submenu .submenu-link:hover {
  color: #ffffff;
}

.bloco {
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: white;
}

</style>
  