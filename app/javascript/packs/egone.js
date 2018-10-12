import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  // Transition
	var vm = new Vue({
		el: "#databinding",
		data:{
			show: true,
			style0: {
				fontSize:'30px',
                  color:'red'
			}
		},
		methods:{

		}
	});
	// example-1
	var vm = new Vue({
		el: "#databinding1",
		data:{
			show: true,

		},
		methods:{}
	});
	// animation
	var vm = new Vue({
		el: "#databinding2",
		data:{
			show: true
		},
		methods:{

		}
	});

	// Custom Transition Classes
	var vm = new Vue({
		el: "#animate",
		data:{
			show: true
		}
	});
	// Explicit Transition Duration
	(function(window, document, Velocity, undefined){  
	// for velocity undefine fixed
	// more details here https://github.com/julianshapiro/velocity/issues/722
	var vm = new Vue({
            el: '#animate-1',
            data: {
               show: false
            },
            methods: {
               beforeEnter: function (el) {
                  el.style.opacity = 0
               },
               enter: function (el, done) {
                  Velocity(el, { opacity: 1, fontSize: '25px' }, { duration: 1000 })
                  Velocity(el, { fontSize: '10px' }, { complete: done })
               },
               leave: function (el, done) {
                  Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 1500 })
                  Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
                  Velocity(el, {
                     rotateZ: '45deg',
                     translateY: '30px',
                     translateX: '30px',
                     opacity: 0
                  }, { complete: done })
               }
            }
         });
	}) (window, document, (window.jQuery || window.Zepto || window).Velocity);// for velocity undefine fixed

   // Transition at the Initial Render
   var vm = new Vue({
   	el: "#animate-2",
   	data:{
   		show: true
   	}
   });
   // Animation on Components
   var vm = new Vue({
   	el: "#databinding3",
   	data:{
   		view: 'component'
   	},
   	components: {
   		'component':{
   			template: '<div><span style = "font-size:25;color:red;">Animation on Components</span></div>'

   		}
   	}
   });
   // VueJS - Directives
   Vue.directive("changestyle",{
   	bind(e1,binding, vnode){
   		// console.log(e1);
   		// e1.style.color = 'red';
   		// e1.style.fontSize="30px";
   		//  or
   		console.log(e1);
        console.log(binding.value.color);
        console.log(vnode);
        e1.style.color=binding.value.color;
        e1.style.fontSize = "30px";
   	}
   });
   var vm = new Vue({
   	el: "#databinding4",
   	data:{

   	}
   });
   // Fillters
   var vm = new Vue({
   	el: '#databinding5',
   	data: {
   		name: ''
   	},
   	filters: {
   		countletters:function(value){
   			return value.length;
   		}
   	}
   });

   // VueJS - Mixins
   var vm =new Vue({
      el: '#databinding6',
      data:{

      }
   });
   var myMixin={
      created:function(){
         this.startmixin()
      },
      methods:{
         startmixin:function(){
            alert("welcome to mixin example");
         }
      }
   };
   var component = Vue.extend({
      mixins: [myMixin]
   })
   var component = new component();

   // example mixin
   var mixin = {
            created: function () {
               console.log('mixin called')
            }
         }
         new Vue({
            mixins: [mixin],
            created: function () {
               console.log('component called')
            }
         });
   // VueJS - Render Function
   Vue.component('testcomponent',{
      template: '<h1>Hello World</h1>',
      data: function(){

      },
      methods:{

      }
   });
   var vm = new Vue({
      el: '#component_test'
   });
})