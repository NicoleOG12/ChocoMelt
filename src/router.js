import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/Usuário/HomePage.vue";
import SobreNos from "./components/Usuário/SobreNos.vue";
import ProdutoPage from "./components/Usuário/ProdutoPage.vue";
import CarrinhoPage from "./components/Usuário/CarrinhoPage.vue";
import ContatoPage from "./components/Usuário/ContatoPage.vue";
import LoginPage from './components/LoginPage.vue';
import AberturaPage from "./components/AberturaPage.vue";
import RegisterPage from "./components/RegisterPage.vue";
import ProdutoDetalhes from "./components/Usuário/ProdutoDetalhes.vue";
import AdicionarProdutos from "./components/Empresa/AdicionarProdutos.vue";


const routes = [
    {
        path: '/',
        name: 'Abertura',
        component: AberturaPage
    },
    {
        path: '/HomePage',
        name: 'Home Page',
        component: HomePage,
        props: route => ({ id: route.params.id })
    },
    {
        path: '/Produtos',
        name: 'Produtos',
        component: ProdutoPage
    },
    {
        path: '/Carrinho',
        name: 'Carrinho',
        component: CarrinhoPage
    },
    {
        path: '/Contato',
        name: 'Contato',
        component: ContatoPage
    },

    {
        path: '/Sobre Nós',
        name: 'Sobre Nós',
        component: SobreNos
    },

    {
        path: '/Login',
        name: 'Login',
        component: LoginPage
    },

    {
        path: "/Register",
        name: "Register",
        component: RegisterPage
    },

    {
        path: "/ProdutoDetalhes/:id",
        name: "ProdutoDetalhes",
        component: ProdutoDetalhes,
        props: true,
    },
    {
        path: "/AdicionarProdutos",
        name: "AdicionarProdutos",
        component: AdicionarProdutos,
        props: route => ({ id: route.params.id })
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;