class Todo{
    static value = 1;
    constructor(title,description){
        this.id = Todo.value++;
        this.title = title
        this.description = description
        this.completed = false
    }
}

module.exports = Todo