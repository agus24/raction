import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import( './views/Faq.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import( './views/Contact.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import( './views/Product.vue')
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: () => import( './views/ProductDetail.vue')
    },
    {
      path: '/findus',
      name: 'FindUs',
      component: () => import( './views/FindUs.vue')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import( './views/Gallery.vue')
    }
    ],
    mode: 'history',
    scrollBehavior(to) {
        if (to.hash) {
            const element = document.getElementById(to.hash.slice(1));
            if (element) {
                return window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    }
})
