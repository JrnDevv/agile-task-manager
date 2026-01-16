// agile-task-manager/src/tasks.js

let tasks = [];
let currentId = 1;

// Cria uma nova tarefa
export function createTask(title, priority = 'Média') {
  if (!title) {
    throw new Error('Título é obrigatório');
  }

  const task = {
    id: currentId++,
    title,
    done: false,
    priority // Baixa, Média, Alta
  };

  tasks.push(task);
  return task;
}

// Lista todas as tarefas
export function listTasks() {
  return tasks;
}

// Atualiza uma tarefa (concluir ou mudar prioridade)
export function updateTask(id, data) {
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    throw new Error('Tarefa não encontrada');
  }

  if (typeof data.done === 'boolean') {
    task.done = data.done;
  }

  if (data.priority) {
    task.priority = data.priority;
  }

  return task;
}

// Remove tarefa
export function deleteTask(id) {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    throw new Error('Tarefa não encontrada');
  }

  const [removed] = tasks.splice(index, 1);
  return removed;
}

// Função usada nos testes para limpar tudo
export function clearTasks() {
  tasks = [];
  currentId = 1;
}
