import './styles.css';
import { Todo, Todolist } from './classes'; //va a buscar el index por defecto
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { Todolist } from './classes/todo-list.class';


 export const todoList = new Todolist();

 //todoList.todos.forEach( todo => crearTodoHtml (todo) );
//esta sentencia es la misma que la anterior
 todoList.todos.forEach( crearTodoHtml );
//   const newTodo = new Todo('aprender Javascript');
//  todoList.nuevoTodo( newTodo );
// todoList.todos[0].imprimirClase();

   console.log( 'todos', todoList.todos);

// const tarea = new Todo('Aprender Javascript');

// todoList.nuevoTodo(tarea);
// console.log(todoList);

// crearTodoHtml( tarea );

//Para trabajar con localStorage (consola (Application))
//LocalStorage hace referencia al servidor donde esté corriendo. En local localhost
//i en produccion en gestio.
//localStorage.setItem( 'mi-key','ABC124');

//Session  Storage desaparece al reiniciar el navegador
//sessionStorage.setItem( 'mi-key','ABC124');
// setTimeout( ()=> {
//     localStorage.removeItem( 'mi-key' );
// },1500);
