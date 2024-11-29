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


<div class="container">
  <div class="items">
    <div class="item" style="background-color: blue;">


      <div id="promocoes">
  <div style="background-color: blue;"></div>
  <div style="background-color: red;"></div>
  <div style="background-color: green;"></div>
  <div style="background-color: purple;"></div>
  <div style="background-color: greenyellow;"></div>
</div>

      <div id="promocoes" style="margin-left:1100px; margin-top:-120px">
  <div style="background-color: blue;"></div>
  <div style="background-color: red;"></div>
  <div style="background-color: green;"></div>
  <div style="background-color: purple;"></div>
  <div style="background-color: greenyellow;"></div>
</div>
    </div>
  </div>
</div>




		
		<!--barra de menu-->
		<div id="barra-de-menu">
		
			<!--menu-->
		
				<div id="menu-dropdown">
					<span> MENU </span>
						<div id="menu-dropdown-conteudo">
							<p> Página inicial </p>
							<p> Produtos </p>
							<p> Pacotes </p>
							<p> Promoções </p>
							<p> Pedidos </p>
							<p> Sobre nós </p>
							<p> Contato </p>
						</div>
				</div>

			
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

				<p><router-link to="/Login">Entrar</router-link></p>
			</a>
	
		</div>




  </body>
</template>
 
<script>

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

#promocoes{
  display: grid;
  width:fit-content;
  margin:0px;
  grid-template-columns:220px 220px 220px 220px 220px;
}

  #promocoes div{
    height: 120px;
  }


.items, .items2{
  height: 120px;
  position: relative;
  width: 1100px;
  background: #efefef;
  text-align: center;
  border-radius: 4px;
  animation: slide-item 22s infinite linear;
}

@keyframes slide-item {
    0% { left: -0%; right: -1100px; }
  100% { left: -1100px; right: 0% }
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
			
				#menu-dropdown{
					position: relative;
					display: inline-block;
				}
				#menu-dropdown:hover #menu-dropdown-conteudo{
					display: block;
				}
					#menu-dropdown-conteudo{
						display: none;
						position: absolute;
						background-color:#A8D1E7;
						padding: 10px 16px 8px 10%;
						margin: 16px 16px 0px -16px;
						width: 100%;
						text-align: left;
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
		
	



</style>