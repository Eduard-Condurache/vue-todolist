const { createApp } = Vue

createApp({
  data() {
    return {
       todos: [
          {
            text: 'Fare la spesa',
            done: false
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
       ],
       newTodo: ''
    };
  },
  methods: {
    addTodo() {
      //Se la variabile newTodo non è vuota aggiungi alla lista
      //todos un nuovo oggetto e poi svuota l'input.
      if (this.newTodo.trim() !== '') {
        // Il metodo trim serve per rimuovere i spazi bianchi
          this.todos.push({text: this.newTodo.trim(), done: false});
      }
          this.newTodo = '';
    },
    removeTodo(i) {
      // Il metodo splice in questo caso rimuove un elemento dal array.
      // quindi in questo caso la i sta per l'indice del array e il 1 specifica il numero di elementi da rimuovere.
      this.todos.splice(i, 1);
    },
    invertedValue(todo) {
      // Scambia il valore booleano di todo.done al click
      // quindi se todo.done è false diventa true e viceversa.
      todo.done = !todo.done;
    }
  }
}).mount('#app')