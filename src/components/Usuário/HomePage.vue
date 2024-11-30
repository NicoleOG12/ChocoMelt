<template>
	<div id="homepage">
		<header>
			<nav></nav>
		</header>
		
		<div id="barra-de-menu">
			<div id="menu-dropdown">
				<span>MENU</span>
				<div id="menu-dropdown-conteudo">
					<p>Página inicial</p>
					<p>Produtos</p>
					<p>Paquetes</p>
					<p>Promoções</p>
					<p>Pedidos</p>
					<p>Sobre nós</p>
					<p>Contato</p>
				</div>
			</div>
			
			<a href="#" id="barra-de-pesquisa">
				<p>Pesquisar...</p>
			</a>
			
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
span, p, a:any-link a:visited, a:link {
	margin: 0px;
	color: inherit;
	text-decoration: none;
	text-decoration-color: none;
}
  
body {
	background-color: #A8D1E7;
	height: 1200px;
	width: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	margin: 0px;
	overflow-x: hidden;
}

#barra-de-menu {
	background-image: linear-gradient(#b8dcef, #A8D1E7);
	display: grid;
	grid-template-columns: 16% auto 8% 12%;
	padding: 16px;
	color: #fcfaf2;
	text-align: center;
	align-items: center;
}
  
#menu-dropdown-conteudo p {
	margin: 16px 0px 8px 0px;
}
  
#barra-de-pesquisa {
	background-image: linear-gradient(#fcfaf241, #fcfaf253);
	margin: 0px 5% 0px 6%;
	padding: 6px 6px 6px 16px;
	border-radius: 16px;
	text-align: left;
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
</style>
  