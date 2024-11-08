<template>
  <div class="container" id="container">
    <div class="form-container sign-up">
      <form>
        <h1>Criar Conta</h1>
        <div class="social-icons">
          <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
          
        </div>
        <span>ou use seu email para se cadastrar</span>
        <input type="text" placeholder="Nome">
        <input type="text" placeholder="email">
        <input type="text" placeholder="senha">
        <button>Cadastrar</button>
      </form>
    </div>
    <div class="form-container sign-in">
      <form> 
        <h1>Login</h1>
        <div class="social-icons">
          <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a> 
        </div>
        <span>ou use seu email para se cadastrar</span>
        <input type="text" placeholder="email">
        <input type="text" placeholder="senha"> 
        <a href="#">Esqueci minha senha</a>
        <button>Logar</button>
      </form>

    </div>
    <div class="toggle-container">
      <div class="toggle">
        <div class="toggle-panel toggle-left">
          <h1>Bem-vindo de volta!</h1>
          <p>Coloque seus dados para utilizar todos os recursos</p>
          <button class="hidden" id="login">Entrar</button>
        </div>
        <div class="toggle-panel toggle-right">
          <h1>Olá!</h1>
          <p>Cadastre-se com os seus dados para usar todos os recursos</p>
          <button class="hidden">Cadastrar-se</button>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style>

</style>