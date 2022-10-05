export class TodoList {
    constructor(){
        this.todos = [];
    }

    nuevoTodo(todo){
        this.todos.push(todo);
    }

    eliminarTodo(id){ //Enlace: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        this.todos = this.todos.filter(todo => todo.id != id);
    }

    marcarCompletado(id){
        for(const todo of this.todos){
            console.log(id, todo.id)

            if(todo.id == id){
                todo.completado = !todo.completado;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
    }
}