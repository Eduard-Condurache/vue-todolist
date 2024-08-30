const { createApp } = Vue

createApp({
  data() {
    return {
       todos: [
          {
            text: 'Fare la spesa',
            done: true
          },
          {
            text: 'Ripassare i esercizi di vue',
            done: false
          },
          {
            text: 'Sistemare il computer di Salvatore',
            done: false
          },
          {
            text: 'Stilizzare pagina todoo fatta con vue anche nel weekend',
            done: false
          }
       ]
    };
  },
  methods: {
    removeTodo(i) {
      this.todos.splice(i, 1); // Il metodo splice in questo caso rimuove un elemento dal array.
    }
  }
}).mount('#app')