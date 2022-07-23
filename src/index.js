import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
//import { Todo } from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();



todoList.todos.forEach( crearTodoHtml );

/**
 * ESTE DE ABAJO ES LO MISMO QUE DE ARRIBA
 * EL DE ARRIBA O EN CUALQUIER METODO QUIER DECIR
 * QUE EL PRIMER ARGUMENTO DEL CALLBACK QUE ESTAMOS TENIENDO
 * EN EL FOREACH O EN CUALQUIER METODO ESTA LLAMANDO EL crearTodoHtml
 * O LA FUNCION QUE ESPECIFIQUEMOS AHI ADENTRO
 * Y EL ARGUMENTO QUE LE ESTA MANDANDO ADENTRO DEL crearTodoHtml( todo )
 * ES EL PRIMER ARGUMENTO QUE REGRESA EL FOREACH
 * SOLO FUNCIONAA SI ES SOLO 1 ARGUMENTO, SI TUVIERAMOS QUE REGRESAR 
 * A Y B ejemplo:
 * crearTodoHtml( a,b ) ENTONCES YA NO FUNCIONARA
 *  */  
//todoList.todos.forEach(todo => crearTodoHtml( todo ));


//const newTodo = new Todo('Aprender JavaScript');
//todoList.todos[0].imprimirClase();

//console.log('todos', todoList.todos );
