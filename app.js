const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const TodoRepository = require('./TodoRepository')
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const repository = new TodoRepository()

app.post('/create',(req,res)=>{
    const {title,description} = req.body
    if(!title)
        return res.status(400).json({
            message:'title is required',
        })
    const todo = repository.createTodoItem(title,description)
    return res.status(201).json({
        message:'Successfully created todo item',
        todo
    })
})

app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Successfully fetched todos',
        data: repository.getAllTodos()
    })
})

app.all('*',(req,res)=>{
    res.status(404).json({
        message:'this route does not exist on this server'
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})