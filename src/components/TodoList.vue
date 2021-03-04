<template>
    <div>
        <ul class="todo-list">
           <li v-for="item in todos" :key="item.id" class="todo-list-item">
               <input type="checkbox" v-model="item.completed" class="todo-list-item__completed">
               <p class="todo-list-item__name" :class="{completed: item.completed}">{{item.name}}</p>
               <div class="move-items mr-3">
                   <button class="move-items__btn move-items__btn--up"
                           v-show="hasMoreThanOneTask && !isFirstTask(item)"
                           @click.prevent="moveTaskUp(item)">
                       <i class="fas fa-arrow-up"></i>
                   </button>
                   <button class="move-items__btn move-items__btn--down"
                           v-show="hasMoreThanOneTask && !isLastTask(item)"
                           @click.prevent="moveTaskDown(item)">
                       <i class="fas fa-arrow-down"></i>
                   </button>
               </div>
               <button @click.prevent="deleteTodo(item)" class="button todo-list-item__delete-btn"><i class="fas fa-trash"></i></button>
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        value: { type: Array, default() { return [] }}
    },
    data() {
        return {
            todos: this.value
        }
    },
    watch: {
        value(value) {
            this.todos = value
        }
    },
    methods: {
        deleteTodo(item) {
            this.todos.splice(this.todos.findIndex(elem => elem === item), 1)
            this.$emit('input', this.todos)    
        },
        isFirstTask(item) {
            return this.todos.findIndex(elem => elem === item) === 0
        },
        isLastTask(item) {
            return this.todos.findIndex(elem => elem === item) === this.todos.length - 1
        },
        moveTaskUp(item) {
            let oldIndex = this.todos.findIndex(elem => elem === item);
            let newIndex = oldIndex - 1

            this.todos.splice(newIndex, 0, this.todos.splice(oldIndex, 1)[0])
        },
        moveTaskDown(item) {
            let oldIndex = this.todos.findIndex(elem => elem === item);
            let newIndex = oldIndex + 1

            this.todos.splice(newIndex, 0, this.todos.splice(oldIndex, 1)[0])
        }
    },
    computed: {
        hasMoreThanOneTask() {
            return this.todos.length > 1
        }
    }
}
</script>

<style>
  .todo-list-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .todo-list-item__completed {
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .5rem;
  }

  .todo-list-item__name {
    display: inline-block;
  }

  .todo-list-item__delete-btn {
    display: inline-block;
    height: 2.25em;
    width: 2.25em;
    padding: 0;
    border-radius: 9999px;
    margin-top: .15rem;
    background-color: #f14667;
  }

  .completed {
    text-decoration: line-through;
    color: grey;
  }

  .move-items {
      margin-left: auto;
  }
  .move-items__btn {
      margin-left: 0.25rem;
  }
</style>