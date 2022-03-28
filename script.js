console.log('JS OK!');

const app = new Vue({

    // collego vue all'html tramite l'id todo
    el: '#todo',
    data:{
        /*
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.

*/
        //creo una lista di oggetti con due proprietà
        todoList:[
            {
            text: 'fare la spesa',
            done: false,  
            },
            {
            text: 'fare la benzina',
            done: true,  
            },
            {
            text: 'andare in palestra',
            done: false,  
            },
        ],
        newTodo:'',
    },
    methods:{
/*
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
*/
// funzione inserita all'interno della i. Rimuove l'item dalla lista al click uno per volta
        deleteItem(index){
                this.todoList.splice(index, 1);
        },
/*
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/
        addNewTodo(){

            if(this.newTodo.trim().length){
               this.todoList.push({
                  text: this.newTodo,
                  done: false,
               }),
               this.newTodo = '';
            }
         },

        // cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
         invertDoneValue(index) {
            this.todoList[index].done = !this.todoList[index].done
            //console.log(this.todoList[index].done);
        }
        }

})
