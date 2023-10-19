import { createStore } from 'vuex';
import counter from './modules/counter/counter'
import todos from './modules/todos/todos'


const store = createStore({
    //Modules Declare Here
    modules:{
        counter,
        todos,
    },

});

export default store;