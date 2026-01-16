import express from "express";
 import {
    createTask,
    listTasks,
    updateTask,
    deleteTask
 } from "./tasks.js";

 const app = express();
 const PORT = process.env.PORT || 3000;

 app.use(express.json());

 app.post("/tasks", (req, res) => {
    res.json({
        message: "API de Gerenciamento de Tarefas funcionando!"
    });
 });

//Listar tarefas
 app.get("/tasks", (req, res) => {
    res.json(listTasks());
 });

 //Criar tarefa

 app.post("/tasks", (req, res) => {
    try {
        const { title, priority } = req.body;
        const newTask = createTask(title, priority);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
 }});

 //atualizar tarefa
 app.put("/tasks/:id", (req, res) => {
    try {
        const id = Number(req.params.id, 10);
        const {done, priority} = req.body;

        const task = updateTask(id, {done, priority});
        res.json(task);
    } catch (error) {
        res.status(404).json({ error: error.message });
 }});

 //deletar tarefa
 app.delete("/tasks/:id", (req, res) => {
    try {
        const id = Number(req.params.id, 10);
        const removedTask = deleteTask(id);
        res.json({
            message: "Task deleted successfully",
            task: removedTask
        });
    } catch (error) {
        res.status(404).json({ error: error.message });
 }});

 app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
 });