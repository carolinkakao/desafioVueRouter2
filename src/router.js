import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio'
import SobreMi from './views/SobreMi'
import Contacto from './views/Contacto'
import Post from './views/Post'
import Articulo from './views/Articulo'
import NotFound from './views/NotFound'
import Administrador from './views/Administrador'
import Portada from './components/Portada'
import Home from './components/Home'
Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: SobreMi,
            alias: '/acerca'  /*Punto numero 3: Crear un alias para sobremi*/
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto,
            alias: '/contactame'/*Punto numero 3: Crear un alias para contacto*/
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: Articulo,
                }
            ]
        },
        /*Punto numero 1: Crear ruta administrador*/
        {
            path: '/administrador/:id',
            name: 'Administrador',
            component: Administrador
        },
         /*Punto numero 2: Redireccionar a pagina raiz*/
        {
            path: '/portada',
            name: 'Portada',
            component: Portada,
            redirect: '/' /*al ingresar portada en la ruta nos lleva a una ruta ya existente */
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
            redirect: '/'
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})