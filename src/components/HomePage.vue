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
    </div>
  </div>

  <div class="items2">
    <div class="item" style="background-color: blue;">


      <div id="promocoes">
  <div style="background-color: blue;"></div>
  <div style="background-color: red;"></div>
  <div style="background-color: green;"></div>
  <div style="background-color: purple;"></div>
  <div style="background-color: greenyellow;"></div>
</div>
    </div>
  </div>
</div>




  </body>
</template>
 
<script>

</script>
 
<style>

body{
  background-color: #A8D1E7;
  height: 1200px;
  width:100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  margin:0px;
}

#promocoes{
  display: grid;
  width:100%;
  margin:0px;
  grid-template-columns:20% 20% 20% 20% 20%;
}

  #promocoes div{
    height: 120px;
  }


.items, .items2{
  height: 120px;
  position: relative;
  width: 100%;
  background: #efefef;
  text-align: center;
  border-radius: 4px;
  animation: slide-item 8s infinite linear;
}
.items2{margin-left:100%; margin-top:-120px}

/*.item:nth-child(0) { animation-delay: 0.1s; }
.item:nth-child(1) { animation-delay: 8s; }
item:nth-child(3) { animation-delay:0s; }
.item:nth-child(4) { animation-delay: 0s; }*/

@keyframes slide-item {
    0% { left: -0%; right: -100%; }
  100% { left: -100%; right: 0% }
}





</style>