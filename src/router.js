import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import SobreNos from "./components/SobreNos.vue";
import ProdutoPage from "./components/ProdutoPage.vue";
import CarrinhoPage from "./components/CarrinhoPage.vue";
import ContatoPage from "./components/ContatoPage.vue";
import LoginPage from './components/LoginPage.vue';
import AberturaPage from "./components/AberturaPage.vue";

const routes = [
    {
        path: '/Abertura',
        name: 'Abertura',
        component: AberturaPage
    },
    {
        path: '/HomePage',
        name: 'Home Page',
        component: HomePage
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
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;