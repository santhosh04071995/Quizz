import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			count: 0,             					//global data 
			QuestionOne: {
				qa: 'what is Vue js?',
				opa: 'JavaScript Framewok',
				opb: 'Library',
				opc: 'Type of chat'
			},
			QuestionTwo: {
				qa: 'What is VueX  used for ?',
				opa: 'Eating a Delicious snacks',
				opb: 'Viewing Things',
				opc: 'State Management',
			},

			QuestionThree: {
				qa: 'what is Vue Router?',
				opa: 'Icecream Maker',
				opb: 'Routing library of Vue',
				opc: 'Burger',
			}

		};
	},
	getters: {
		mygetter(state) {
			return state.count;
		},
		questionOne(state) {

			return state.QuestionOne;
		},
		questionTwo(state) {

			return state.QuestionTwo;
		},
		questionThree(state) {

			return state.QuestionThree;
		}
	},

	mutations: {             				//important
		mymutation(state) {
			state.count= state.count+1;
		}
	},
	actions: {								//important
		mymutation(context) {
			context.commit('mymutation')
		}
	}

})

const app = createApp(App);
app.use(store);                    //which make 'store' will available in all the component
app.mount('#app')
