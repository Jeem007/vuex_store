<template>
<div>
    <h2 class=" text-center pt-4 text-2xl font-bold text-green-600">Todo List</h2>
</div>

<div class="flex justify-center items-center">
    <div class="bg-slate-400 rounded-md w-9/12 my-4 px-8 text-black font-semibold">
        <ul>
            <li v-for="todo in todoList" :key="todo.id">
                <a href="#" @click.prevent="onTodoSelected(todo.id)">
                    {{ todo.text }} - ({{ todo.done? 'Done' : 'Not Done' }})
                </a>
            </li>

        </ul>
    </div>
</div>
<div>
    <h4 class=" text-center text-xl font-semibold">Todo List Done: {{ doneListCount }}</h4>
</div>
<div class="flex justify-center items-center" >
    <h3 class=" font-semibold text-lg text-green-600 px-2">Complted todos: </h3>
    <ul class=" inline-flex">
        <li v-for="todo in donetodoList" :key="todo.id" class="px-2">
            {{ todo.text }} - ({{ todo.done? 'Done' : 'Not Done' }})</li>
    </ul>
</div>
<div class="flex justify-center items-center">
    <div class="bg-slate-200 rounded-md w-9/12 my-4 px-8 text-black font-semibold" v-if="todosingle">
        <h3>Selected Todos</h3>
        <h2> Id: {{ todosingle.id }} -- {{ todosingle.text }} -- ({{ todosingle.done? 'Done' : 'Not Done' }}) </h2>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapGetters
} from 'vuex';
export default {
    name: 'TodoList',

    data() {
        return {
            selectedId: "",
            //use todo single to get single todo
            todosingle: "",
        };
    },
    //get todo data
    computed: {
        /*      todoList(){
                    return this.$store.state.todos;
                },

                donetodoList(){
                    return this.$store.getters.doneTodoList;
                },
                doneListCount(){
                    return this.$store.getters.doneTodoListCount;
                }, */
        // todosingle(){
        //     return this.$store.getters.getTodoById(this.selectedId);
        // },

        //Calling these with mapState
        //here first state.todos.todos here first todos is the module name when we declare it

        ...mapState('todos',{
            todoList: state => state.todos,
        }),

        // Instead of todos write multiple times ""donetodoList : 'todos/doneTodoList', ""
        // like this we can use this way
        ...mapGetters('todos', {
            donetodoList: 'doneTodoList',
            doneListCount: 'doneTodoListCount',
            //changing name todosingle to todobyID
            todobyID: 'getTodoById',

        })

    },

    mounted() {

    },

    methods: {
        onTodoSelected(id) {
            this.selectedId = id;
            //give the id in todobyID
            this.todosingle = this.todobyID(id);

        },
    },
};
</script>

<style lang="" scoped>

</style>
