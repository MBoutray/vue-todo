<template>
    <div>
        <transition-group class="" name="todo-list" tag="ul">
            <li v-for="item in this.$store.state.todoList" :key="item.id" class="todo-list-item">
                <input type="checkbox" v-model="item.completed" class="todo-list-item__completed">
                <p class="todo-list-item__name" :class="{completed: item.completed}">{{ item.name }}</p>
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
                <button @click.prevent="deleteTodo(item)" class="button todo-list-item__delete-btn"><i
                    class="fas fa-trash"></i></button>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
    methods: {
        ...mapMutations({
            deleteTodo: 'deleteTask'
        }),
        moveTaskUp(item) {
            this.$store.commit('moveTask', {item, moveAmount: -1})
        },
        moveTaskDown(item) {
            this.$store.commit('moveTask', {item, moveAmount: 1})
        }
    },
    computed: {
        hasMoreThanOneTask() {
            return this.$store.getters.getLength > 1
        },
        ...mapGetters([
            'isFirstTask',
            'isLastTask'
        ])
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

  /* Style lorsque la tâche est terminée */
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

  /* Transition */
  .todo-list-enter-active, .todo-list-leave-active {
      transition: all .5s;
  }
  .todo-list-enter, .todo-list-leave-to {
      opacity: 0;
      transform: translateX(20px);
  }
  .todo-list-item {
      transition: all .5s;
  }
</style>