import { Todo } from './todo.class';
export class Todolist {

    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {
        //devolvemos el arreglo con todos menos con el id seleccionado
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {

        for ( const todo of this.todos ) {
            if ( todo.id == id ){
                todo.marcarCompletado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
        //me interesan todos los elementos que no están completados
    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        // if ( localStorage.getItem('todo') ) {
        //     this.todos = JSON.parse(localStorage.getItem('todo'));

        //     console.log('cargar storage: ', this.todos);
        // } else {
        //     this.todos = [];
        // }
        this.todos = ( localStorage.getItem('todo') ) 
                ? JSON.parse(localStorage.getItem('todo'))
                 : this.todos = [];

        //map permite barrer cada uno de los elementos que estan dentro de un arreglo
        // i retornar un nuevo arreglo con cada uno de sus objetos mutados
        //Todo es una instancia de la classe, y llama al metodo static fromJson
        //this.todos = this.todos.map( obj => Todo.fromJson( obj ));
        //la linia anterior se puede convertir en la siguiente
        this.todos = this.todos.map( Todo.fromJson );
    }
}