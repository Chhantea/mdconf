import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import VuePaginate from 'vue-paginate'
Vue.use( VueRouter );
Vue.use(VuePaginate)
Vue.use(TurbolinksAdapter)
document.addEventListener('turbolinks:load', () => {
  // const app = new Vue({
  //   el: '#hello',
  //   data: {
  //     message: "Can you say hello?"
  //   },
  //   components: { App }
  // })
  new Vue({
  el: '#app',
  data: {
    items: ['Item One', 'Item Two', 'Item Three', 'Item Four', 'Item Five', 'Item Six', 'Item Seven', 'Item Eight', 'Item Nine', 'Item Ten', 'Item Eleven', 'Item Twelve', 'Item Thirteen'],
    paginate: ['items']
  }
});

  const Route1 = { template: '<div style = "border-radius:20px;background-color:cyan;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is router 1</div>' }
         const Route2 = { template: '<div style = "border-radius:20px;background-color:green;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is router 2</div>' }
         const routes = [
            { path: '/route1', component: Route1 },
            { path: '/route2', component: Route2 }
         ];
         const router = new VueRouter({
            routes // short for `routes: routes`
         });
         var vm = new Vue({
            el: '#apps',
            router
         });
})