<template>
    <div class="card">
        <div class="card-header columns mx-0">
            <p class="column is-2">{{ date }}</p>
            <h2 class="card-header-title has-text-primary is-centered column">{{ title }}</h2>
            <p class="column is-2 has-text-right">{{ taskAmount }}</p>
        </div>
        <div class="card-content">
            <new-todo v-model="todoList" :value="todoList" ref="newTodo"></new-todo>
            <todo-list v-model="todoList" :value="todoList" ref="todolist"></todo-list>
        </div>
        <div class="card-footer px-2 py-2" v-show="hasTasks">
            <button class="footer__delete-all button is-primary mr-1" @click.prevent="deleteAll">Tout supprimer</button>
            <button class="footer__delete-done button is-primary" @click.prevent="deleteCompleted">Supprimer tâches terminées</button>
        </div>
    </div>
</template>

<script>
import NewTodo from './NewTodo';
import TodoList from './TodoList';

export default {
    props: {
        title: { type: String, default: '' }
    },
    data() {
        return {
            todoList: [
            ]
        }
    },
    methods: {
        deleteTodo(todo) {
            this.todoList.splice(this.todoList.findIndex(customElements => customElements === todo), 1)
            this.$emit('input', this.todoList)
        },
        deleteAll() {
            this.todoList = []
            this.$emit('input', this.todoList)
        },
        deleteCompleted() {
            this.todoList.forEach(todo => todo.completed ? this.deleteTodo(todo) : null)
            this.$emit('input', this.todoList)
        }
    },
    computed: {
        date () {
            let newDate = new Date()
            return newDate.toLocaleDateString("fr-FR", { weekday: 'long', month: 'long', day: 'numeric' }).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
        },
        taskTotal() {
            return this.todoList.length
        },
        taskAmount() {
            return this.taskTotal.toString().concat(' ', this.taskTotal > 1 ? 'tâches' : 'tâche')
        },
        hasTasks() {
            return this.taskTotal > 0
        }
    },
    components: {
        NewTodo,
        TodoList
    }
}
</script>

<style>
    .card {
      border-radius: .5rem;
    }

    .footer__delete-all {
        margin-left: auto;
    }
</style>