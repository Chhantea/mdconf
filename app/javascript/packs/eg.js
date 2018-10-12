import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var vm = new Vue({
  	el: '#databinding',
  	data: {
  		num1: 100,
  		num2: 200,
  		total: ''
  	},
  	methods: {
  		displaynumbers : function(event){
  			console.log(event);
  			return this.total = this.num1 + this.num2;
  		}
  	}
  });
  var vm = new Vue({
  	el: '#eg-1',
  	data: {
  		num1: 100,
  		num2: 200,
  		total: '',
  		styleobj : {
  			width:'100px',
  			height:'100px',
  			backgroundColor: 'red'
  		}
  	},
  	methods: {
  		changebgcolour: function(){
  			this.styleobj.backgroundColor = 'green';
  		},
  		originalcolour:function(){
  			this.styleobj.backgroundColor = 'red';
  		}
  	}
  });

  var vm = new Vue({
  	 el: '#databinding1',
  	 data: {
  	 	clicknum: 0,
  	 	clicknum1: 0,
  	 	stylethis: {
  	 		backgroundColor: '#2196F3!important',
  	 		cursor: 'pointer',
  	 		padding: '8px 16px',
  	 		verticalAlign: 'middle'
  	 	}
  	 },
  	 methods: {
  	 	buttonclickedonce:function(){
  	 		this.clicknum++;
  	 	},
  	 	buttonclicked:function(){
  	 		this.clicknum1++;
  	 	}
  	 }	
  }); 

  var vm = new Vue({
	   el: '#databinding2',
	   data:{
	   		stylelink: {
                  color: '#4CAF50',
                  marginLeft: '20px',
                  fontSize: '30px'
               }
	   },
	   methods:{
	   	clickme:function(){
	   		alert("anchor tag is clicked")
	   	}
	   }
  });
     
     var vm = new Vue({
     	el: '#databinding3',
     	data: {
     		name: '',
     		styleon3: {
     			width: '30%',
     			padding: '12px 20px',
     			margin: '8px 0',
     			boxSizing: 'barder-box'
     		}
     	},
     	methods: {
     		showinputvalue:function(){
     			this.name = event.target.value;
     		}
     	}
     });
     // Custom Events
     Vue.component('button-counter', {
            template: '<button v-on:click = "displayLanguage(item)"><span style = "font-size:25px;">{{ item }}</span></button>',
            data: function () {
               return {
                  counter: 0
               }
            },
            props:['item'],
            methods: {
               displayLanguage: function (lng) {
                  console.log(lng);
                  this.$emit('showlanguage', lng);
               }
            },
         });
         var vm = new Vue({
            el: '#databinding4',
            data: {
               languageclicked: "",
               languages : ["Java", "PHP", "C++", "C", "Javascript", "C#", "Python", "HTML"]
            },
            methods: {
               languagedisp: function (a) {
                  this.languageclicked = a;
               }
            }
         });

   //       Conditional Rendering
   //       v-if
		 // Example
		 var vm = new Vue({
		 	el: '#databinding5',
		 	data:{
		 		show: true,
		 		style5: {
		 		  backgroundColor: '#2196F3!important',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  verticalAlign: 'middle'
		 		}
		 	},
		 	methods: {
		 		showdata:function(){
		 			this.show=!this.show;
		 		}
		 	}
		 });

		 // List Rendering
	var vm = new Vue({
		el: "#databinding6",
		data:{
			items:[],
			style6: {
				width: "30%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  boxSizing: "border-box"
			}
		},
		methods: {
			showinputvalue:function(event){
				this.items.push(event.target.value);
			}
		}
	});
})