const state = {
    count: 0,
};


//mutation update data
/* Mutation only perfom sync data */
const mutations = {
    increment(state,payload){
        state.count+=payload;
    }, 
 };

 const getters ={ };


//action doesnt chnage the state but call mutation to change the state
//all async operation should be in action
     const actions = {
        increment(context, payload){
            console.log(context);
            setTimeout(() => {
                context.commit('increment',payload);
            }, 500);
           
        },
        /* resolve and reject in action */ 
        actionA(context) {
            return new Promise((resolve) => {
              setTimeout(() => {
                context.commit('increment', 1);
                resolve("Some data!!!");
              }, 500);
            });
          },
          actionB(context){
            context.dispatch('actionA').then(response =>{
                console.log(response);
                console.log("Calling actionA from actionB")
            });
          }
    };

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions

}