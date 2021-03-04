<template>
    <div class="addTodo columns is-centered">
        <label for="newTodo" hidden>Entrer nom de la nouvelle tâche</label>
        <input type="text" class="addTodo__input input column is-5" id="newTodo" v-model="newTodo" @keyup.enter="addTodo" placeholder="Nom de la tâche">
        <button class="addTodo__button button is-primary ml-3" @click.prevent="addTodo"><i class="fas fa-plus"></i></button>
    </div>
</template>

<script>
export default {
    props: {
        value: { type: Array, default() { return [] }}
    },
    data() {
        return {
            todos: this.value,
            newTodo: ''
        }
    },
    watch: {
        value(value) {
            this.todos = value
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                id: this.currentId,
                name: this.newTodo,
                completed: false
            })
            this.resetInput()
        },
        resetInput() {
            this.newTodo = ''
        }
    },
    computed: {
        currentId() {
            let todoLength = this.todos.length
            return todoLength > 0 ? this.todos[todoLength - 1].id + 1 : 1
        }
    }
}
</script>

<style>
    .addTodo__button {
      box-sizing: border-box;
      height: 2.25em;
      width: 2.25em;
      padding: 0;
      margin-top: .15em;
      display: inline-block;
      border-radius: 99999px;
    }
</style>