<template>
<body id="homepage">
	<header>
		<nav>
			<!--<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">Produtos</a></li>
			<li><a href="#">Carrinho</a></li>
			<li><a href="#">Contato</a></li>
			<li><a href="#">Sobre Nós</a></li>
			</ul>-->
		</nav>
	</header>

	<!--barra de menu-->
	<div id="barra-de-menu">
		<!--menu-->	
		
				
		
		<!-- barra de pesquisa-->
		<a href="" id="barra-de-pesquisa"> 
			<p>Pesquisar...</p>
		</a>
		
		<!--�rea de login-->
		<a href="" id="">
			<p> Carrinho </p>
		</a>
		
		<!--carrinho-->
		<a href="" id="area-de-login"> 
			<p>ENTRAR</p>
		</a>
	</div>

	<div class="container">
		<div class="items">
			<div class="item">
				<div id="promocoes">
					<!--<CapaPromo></CapaPromo>-->
					<div class="capa-promo" style="background-color: blue;">
						<div class="overlay"> </div>
					</div>
					<div class="capa-promo" style="background-color: red;">
						<div class="overlay"> </div>
					</div>
					<div class="capa-promo" style="background-color: blue;">
						<div class="overlay"> </div>
					</div>
					<div class="capa-promo" style="background-color: red;">
						<div class="overlay"> </div>
					</div>
					<div class="capa-promo" style="background-color: blue;">
						<div class="overlay"> </div>
					</div>
					<div class="capa-promo" style="background-color: red;">
						<div class="overlay"> </div>
					</div>
				</div>

				<div id="promocoes" style="margin-left:1320px; margin-top:-120px">

					<div class="capa-promo" style="background-color: green;"></div>
					<div class="capa-promo" style="background-color: purple;"></div>
					<div class="capa-promo" style="background-color: green;"></div>
					<div class="capa-promo" style="background-color: purple;"></div>
					<div class="capa-promo" style="background-color: green;"></div>
					<div class="capa-promo" style="background-color: purple;"></div>
				</div>
			</div>
		</div>
	</div>
</body>

</template>
 
<script>
import CapaPromo from './CapaPromo.vue';

export default {
	name: 'HomePage',
	components: [
		CapaPromo
	],
};
</script>
 
<style>

span, p, a:any-link a:visited, a:link{
	margin: 0px;
	color: inherit;
	text-decoration: none;
	text-decoration-color: none;
}

body{
  background-color: #A8D1E7;
  height: 1200px;
  width:100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  margin:0px;
  overflow-x: hidden;
}

#barra-de-menu{
	background-image: linear-gradient(#b8dcef, #A8D1E7);
	display: grid;
	grid-template-columns: 16% auto 8% 12%;
	padding: 16px;
	color: #fcfaf2;
	text-align: center;
	align-items: center;
}
			

#menu-dropdown-conteudo p{
	margin: 16px 0px 8px 0px;						
}
			
#barra-de-pesquisa{
	background-image: linear-gradient(#fcfaf241, #fcfaf253);
	margin: 0px 5% 0px 6%;
	padding: 6px 6px 6px 16px;
	border-radius: 16px;
	text-align: left;
}

#promocoes{
  display: grid;
  width:fit-content;
  margin:0px;
  grid-template-columns:220px 220px 220px 220px 220px 220px;
}

#promocoes .capa-promo{
	height: 120px;
}

.items{
  height: 120px;
  position: relative;
  width: 1100px;
  text-align: center;
  border-radius: 4px;
  animation: slide-item 40s infinite linear;
}
.items:hover{
  animation-play-state: paused;
}

@keyframes slide-item {
    0% { left: -0%; right: -1320px; }
  100% { left: -1320px; right: 0% }
}

.capa-promo div {
		height:120px;
		width:220px;
		transition: all 0.4s ease-in-out;
		background-image: url('https://static.vecteezy.com/system/resources/previews/029/720/177/non_2x/mixed-fruit-transparent-background-png.png');
		background-size: cover;
		background-position: center;
		position:relative;
		cursor: pointer;
	}
	
.capa-promo div:hover {
		height:124%;
		width:124%;
		margin:-12%;
		position:relative;
	}


</style>
