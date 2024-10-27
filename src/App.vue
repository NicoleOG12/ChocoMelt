<template>

  <!-- imagem do nome + menu-->
  <header>

      <!--imagem do nome-->
      <div id="imagemdonome"></div>

      <!--barra de menu-->
      <div id="barrademenu">

        <!--menu-->
        <a href="" id="menu">
            <p>MENU</p>
        </a>

        <!--barra de pesquisa-->
        <div id="barradepesquisa">
          pesquisar...
        </div>
        
        <!--área de login-->
        <a href="http://localhost:8081/LoginPage" id="areadelogin">
            <p>ENTRAR</p>
        </a>
        
      </div>

    </header>




</template>

<script>

</script>

<style>

/*cores: #D4A3C4 #A8D1E7 #FCFAF2 */

P, a, a:any-link, a:visited, a:link{
  margin:0px;
  color:inherit;
  text-decoration:none;
  text-decoration-color:none;
}

html{
  padding:0px;
}

header{
  margin: 0px;
  position: absolute;
  right: 0px;  left: 0px;  top: 0px;
}

  #imagemdonome{
    height: 300px;
    background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/18d1d2204449029.66a91bc06488f.png");
    background-size: cover;
  }

  #barrademenu{
    background-image: linear-gradient(#b8dcef, #A8D1E7);
    display: grid;
    grid-template-columns: 10% auto 12%;
    padding: 16px;
    color:#fcfaf2;
    text-align: center;
    align-items: center;
  }
    #barradepesquisa{
      background-image:linear-gradient(#fcfaf241,#fcfaf253);
      margin: 0px 6% 0 6%;
      padding: 6px 6px 6px 16px;
      border-radius: 16px;
      text-align: left;
    }





/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/

</style>
