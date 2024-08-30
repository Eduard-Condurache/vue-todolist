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
}).mount('#app')