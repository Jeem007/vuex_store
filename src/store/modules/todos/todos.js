const state = {
   
        todos:[
            { id:1, text: 'wakeup early', done:true},
            { id:2, text: 'do breakfast', done:true},
            { id:3, text: 'go to office', done:false},
            { id:4, text: 'sleep early',  done:false},
        ],
    

};
const mutations = {};


//get data
const getters ={
    doneTodoList(state){
        return state.todos.filter((todo) => todo.done);
    },
    doneTodoListCount(state,getters){
        return getters.doneTodoList.length;
    },
    getTodoById: (state)=>(id)=>{
       return state.todos.find ((todo) => todo.id === id );
    },

};
const actions ={};

export default{
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}