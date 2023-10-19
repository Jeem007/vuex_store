<template>
<div>
    <h1 class=" bg-slate-600 py-4 text-white text-center">{{ title }}</h1>
</div>
<p class="text-center text-green-500 font-bold text-xl">{{ count }}</p>
<div>
    <VuexLearnCounter />
</div>
<div>
    <TodoList />
</div>
</template>

<script>
import { mapState } from 'vuex';
import VuexLearnCounter from './Counter.vue';
import TodoList from './todoList.vue';
export default {
    name: 'HomePage',
    components: {
        VuexLearnCounter,
        TodoList,

    },
    data() {
        return {
            title: 'Learing VUEX '
        }
    },
    computed: {
    /*   
    count(){
        return this.$store.state.count;
    }, 
    */
   /* Instead of using count we can use mapstate using spread operator */
      ...mapState({
            count: state =>state.count
       }),
    }

}
</script>

<style scoped>

</style>
