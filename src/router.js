import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import SobreNos from "./components/SobreNos.vue";
import ProdutoPage from "./components/ProdutoPage.vue";
import CarrinhoPage from "./components/CarrinhoPage.vue";
import ContatoPage from "./components/ContatoPage.vue";
import LoginPage from './components/LoginPage.vue';

const routes = [
    {
        path: '/HomePage',
        name: 'Home Page',
        component: HomePage
    },
    {
        path: '/LoginPage',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/ContatoPage',
        name: 'Contato',
        component: ContatoPage
    },
    {
        path: '/CarrinhoPage',
        name: 'Carrinho',
        component: CarrinhoPage
    },

    {
        path: '/ProdutoPage',
        name: 'NewPage',
        component: ProdutoPage
    },

    {
        path: '/SobreNos',
        name: 'NewPage',
        component: SobreNos
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;