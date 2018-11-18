import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      // on s'attend à ce que des props soient passées
      // on va attacher un route guard pour éviter qu'elle soit utilisée sans prop
      // beforeEnter: (to, from, next) => {}
      beforeEnter: (to, from, next) => {
        if(to.params.name) {
        next()
        } else {
          next( {name: 'Welcome'} )
        }
      } 
    }
  ]
})
