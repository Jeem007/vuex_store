<template>
<div>
    <div class=" text-center font-semibold text-red-600 py-6">Counter: {{ count }}</div>

    <div class="flex justify-center items-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click.prevent="Increment(1)">Count+</button>
    </div>
</div>
</template>
<!-- Test -->

<script>
//Import mapMutations when mapMutation used
import { mapState,mapActions } from 'vuex';
export default {
    name: 'VuexLearnCounter',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        // action and mutation we need to map in methods
        ...mapActions({
            // this.$store.dispatch('increment',1);
            // Map this using mapActions
            Increment : 'counter/increment',
        }),
        // ...mapMutations({
        //     Inc:'increment',
        // }),

        /* onIncrement(){
            Calling by mutation 
            commit is used for mutation calling
           
            this.$store.commit('increment',1);
            Calling by actions
            dispatch is used for action calling
           
            this.$store.dispatch('increment',1);
           

            resolve,reject
            Calling actionA
            this.$store.dispatch('actionA',1).then((response)=>{
                console.warn("Calling then Success");
                console.log(response);
            });

            Calling actionA from actionB 
            .then is not here because this action doesn't have any promise
            so this action doesn't return any response
            
            this.$store.dispatch('actionB')
        } */
    },
    computed:{
          /*   
    count(){
        return this.$store.state.count;
    }, 
    */
   /* Instead of using count we can use mapstate using spread operator */
   ...mapState({
            count: state =>state.counter.count
       }),
    }
};
</script>
