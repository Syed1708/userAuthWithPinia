import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import Sidebar from '../components/Sidebar.vue'
import Protected from '../components/Protected.vue'
import Login from '../components/Login.vue'

import Register from "../components/Register.vue"
import Dashboard from "../components/Dashboard.vue"

// import {authstore} from "../store/authstore"
import { useAuthStore } from '../store/authstore2';


const routes = [
    {
        path: '/', 
        name: 'home',
        components: {
            default: Home,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/about', 
        name: 'about',
        components: {
            default: About,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/login', 
        name: 'login',
        components: {
            default: Login,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/contact',
        name: 'contact',
        components: {
            default: Contact,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/posts', 
        name: 'posts',
        components: {
            default: Posts,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/post/:id',
        name: 'post',
        components: {
            default: Post,
            LeftSideBar: Sidebar
        },
        
    },
    {
        path: '/protected',
        name: 'protected',
        components: {
            default: Protected,
            LeftSideBar: Sidebar
        },
        meta: {
            requireAuth : true
        }
        
    },
    {
        path: '/register',
        name: 'register',
        components: {
            default: Register,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        components: {
            default: Dashboard,
            LeftSideBar: Sidebar
        },
        meta: {
            requireAuth : true
        }
        
    }
]


// const isAuth = false
//  use local stoage token veriable
// const isAuth = () =>{
//  return localStorage.getItem("token") === "1234"
// }

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) =>{
    // if(to.meta.requireAuth && !isAuth ){
    // if(to.meta.requireAuth && !isAuth() ){
        // now use store 
    const authStore = useAuthStore()

    if(to.meta.requireAuth && !authStore.isAuthenticated ){
        next("/login")
    }else{
        next()
    }
})

export default router