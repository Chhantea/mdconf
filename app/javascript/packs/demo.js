import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var  vm3 = new Vue({
   el: '#vue_det',
   data: {
      firstname : "Ria",
      lastname  : "Singh",
      address    : "Mumbai",
      htmlcontent : "<h1>Vue Js Template</h1>",
      imgsrc : "/assets/flower.jpg"
   },
   methods: {
      mydetails : function() {
         return "I am "+this.firstname +" "+ this.lastname;
      }
    }
   });
  Vue.component('testcomponent',{
      template : '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
      data: function() {
         return{
            name: "VMA"
         }
      },
         methods: {
            changename: function(){
               this.name = "MAMA";

            },
            originalname: function(){
               this.name = "VMA"

            }
         }
   });
   var vm = new Vue({
      el: '#component_test'
   });
   var vm1 = new Vue({
      el: '#component_test1'
   });
   // this is for Dynamic Components not work 'view'
 var vm5 = new Vue({
   el: '#databinding',
   data: {
      view: 'component1' 
   },
   components: {
      'component1': {
         template: '<div><span style = "font-size:25;color:red;">Dynamic Component</span></div>'
      }
   }
});

  var vm = new Vue({
   el: '#computed_props',
   data: {
      firstname : "",
      lastname : "",
      birthyear: ""
   },
   computed :{
      getfullname : function(){
         return this.firstname + " "+ this.lastname
      }
   }
  });
   var vm = new Vue({
     el: '#computed_props1',
     data:{
      name: "helloworld"
     },
     methods: {
      getrandomno1 : function(){
         return Math.random();
      }
     },
     computed:{
      getrandomno : function(){
         return Math.random();
      }
     }
   });

   // Get/Set in Computed Properties
   var vms = new Vue({
            el: '#computed_props2',
            data: {
               firstName : "Terry",
               lastName : "Ben"
            },
            methods: {
            },
            computed :{
               fullname : {
                  get : function() {
                     return this.firstName+" "+this.lastName;
                  },
                  set : function(name){
                     var fname = name.split(" ");
                     this.firstName = fname[0];
                     this.lastName = fname[1]
                  }
               }
            }
         });
   // VueJS - Watch Property
   var vm = new Vue({
            el: '#computed_props3',
            data: {
               kilometers : 0,
               meters:0
            },
            methods: {
            },
            computed :{
            },
            watch : {
               kilometers:function(val) {
                  this.kilometers = val;
                  this.meters = val * 1000;
               },
               meters : function (val) {
                  this.kilometers = val/ 1000;
                  this.meters = val;
               }
            }
         });
   // binding
   var vm = new Vue({
      el:'#databinding1',
      data:{
         title: "databinding",
         hreflink: 'http://www.google.com'
      }
   });
   // Binding HTML Classes
   var vm = new Vue({
      el: '#classbinding',
      data:{
         title: "CLass Binding",
         isactive: true
      }
   });
   // exampl-2
   var vm = new Vue({
     el: '#classbinding1',
     data: {
      title: 'This is class binding example',
      infoclass : 'info',
      errorclass : 'displayError',
      isActive : true,
      haserror : false
     }
   });
   // input binding
   var vm = new Vue({
   el: '#databinding2',
   data: {
      name: '',
      textmessage: '',
      checked: false
   }

   });
   // Radio options
   var vm = new Vue({
      el: "#databinding3",
      data:{
         picked: 'white',
         languages: "Java"
      }
   });
   // modifier
   var vm = new Vue({
      el: '#databinding4',
      data: {
            age: 0,
            msg: '',
            message: ''
      }
   });
})
