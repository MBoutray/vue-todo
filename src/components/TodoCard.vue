<template>
    <div class="card">
        <div class="card-header columns mx-0">
            <p class="column is-2">{{ date }}</p>
            <h2 class="card-header-title has-text-primary is-centered column">{{ title }}</h2>
            <p class="column is-2 has-text-right">{{ taskAmount }}</p>
        </div>
        <div class="card-content">
            <new-todo></new-todo>
            <todo-list></todo-list>
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
import { mapMutations } from 'vuex';


export default {
    props: {
        title: { type: String, default: '' }
    },
    methods: {
        ...mapMutations({
            deleteAll: 'deleteAllTasks',
            deleteCompleted: 'deleteAllCompletedTasks'
        })
    },
    computed: {
        date () {
            let newDate = new Date()
            return newDate.toLocaleDateString("fr-FR", { weekday: 'long', month: 'long', day: 'numeric' }).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
        },
        taskAmount() {
            let length = this.$store.getters.getLength
            return length.toString().concat(' ', length > 1 ? 'tâches' : 'tâche')
        },
        hasTasks() {
            return !this.$store.getters.isEmpty
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