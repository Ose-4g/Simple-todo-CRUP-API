const Todo = require('./Todo')
class TodoRepository{
    todos = [];

    createTodoItem(title,description)
    {
        const todo = new Todo(title,description)
        this.todos.push(todo)
        return todo
    }
    getTodoById(id)
    {
        for(const todo of this.todos)
        {
            if(todo.id===id) return todo
        }
        return null
    }
    getAllTodos()
    {
        return this.todos
    }
    updateTodoById(id, title, description, completed)
    {
        const n = this.todos.length
        for(let i = 0; i<n;i++)
        {
            if(this.todos[i].id===id)
            {
                let todo = this.todos[i]
                todo.title = title ? title : todo.title
                todo.description = description ? description : todo.description
                todo.completed = (completed === true || completed === false) ? completed : todo.completed
                return;
            }
        }
        throw Error('todo item not found')
            
    }
    deleteTodo(id, title, description, completed)
    {
        const n = this.todos.length
        for(let i = 0; i<n;i++)
        {
            if(this.todos[i].id===id)
            {
                this.todos.splice(i,1);
                return;
            }
        }
        throw Error('todo item not found')
    }
}

module.exports = TodoRepository