import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
 var employees = new Vue({
  el: '#empl',
  data: {
    employees: [],
  },
  ready: function() {
  	console.log("ww")
    var that;
    that = this;
    console.log("test");
    $.ajax({
      url: '/employees.json',
      success: function(res) {
        that.employees = res;
        console.log("res");
      }

    });
  }
});
})
