<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">

  <body>
  <div class="page-container">

    <header class="header">
      <nav class="navbar">
          <router-link to="/AdicionarProdutos">Adicionar Produtos</router-link>
          <a href="/PromocoesPage">Promoções	</a>
          <a href="/EditarProdutos">Editar Produtos</a>
          <a href="/PedidosPage">Pedidos </a>
      </nav>
  </header>
    <nav class="filter-nav">

      
    </nav>
    <h1 class="title">Pedidos</h1>
    <div class="table-container">
      <table class="order-table">
        <thead>
          <tr class="informacoes">
            <th class="informacoes-info">Nome do Cliente</th>
            <th class="informacoes-info">Número do pedido</th>
            <th class="informacoes-info">Preço</th>
            <th class="informacoes-info">Data</th>
            <th class="informacoes-info">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="customer-info">
                <img src="https://via.placeholder.com/40" alt="Avatar" class="avatar">
                <div>
                  <p class="name">Nome do cliente</p>
                  <p class="email">nome@email.com</p>
                </div>
              </div>        
            </td>
            <td>1111</td>
            <td class="amount">R$25,00</td>
            <td>04 Dez 2024</td>
            <td><span class="status status-paid">Pago</span></td>
          </tr>

          <tr>
            <td>
              <div class="customer-info">
                <img src="https://via.placeholder.com/40" alt="Avatar" class="avatar">
                <div>
                  <p class="name">Nome do cliente</p>
                  <p class="email">email@email.com</p>
                </div>
              </div>
            </td>
            <td>1111</td>
            <td class="amount">R$19,00</td>
            <td>06 Dez 2024</td>
            <td><span class="status status-refund">Em Andamento</span></td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</body>
  
  </template>
  
  <script>
  
  
  </script>
  
  
<style scoped>
body {
  font-family: "Quicksand", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
  color: #333;
}

.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 12.5%;
  background-color: transparent;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  z-index: 100;
  background-color: #C191B2;
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

.title {
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  font-family: "Schibsted Grotesk", sans-serif;
  color: rgb(153, 92, 92);
  padding: 4%;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
}

.icon-button {
  background: none;
  border: none;
  margin-left: 10px;
  cursor: pointer;
}

.icon {
  width: 24px;
  height: 24px;
}




.table-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;

}

.order-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border-radius: 20%;
}

thead {
  background-color: #ccf3ff;
  color: #ffffff;

}

thead th {
  padding: 12px;
  font-size: 14px;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:nth-child(odd) {
  background-color: #ffffff;
}

td {
  padding: 12px;
  font-size: 14px;
  vertical-align: middle;
}

.customer-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}

.name {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.email {
  font-size: 14px;
  color: #7d7d7d;
  margin: 0;
}

.amount {
  font-weight: bold;
}

.status {
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.status-paid {
  background-color: #d4f9e7;
  color: #34a853;
  font-size: 16px;
}

.status-refund {
  background-color: #ffedd4;
  color: #fbbc05;
  font-size: 16px;
}

.status-cancel {
  background-color: #fdeaea;
  color: #ea4335;
  font-size: 16px;
}


.informacoes-info {
  font-size: 20px;
  text-shadow: 1px 1px 2px rgba(0, 86, 156, 0.658);
  font-family: "Quicksand", sans-serif;
  font-weight: 900;
}

  </style>