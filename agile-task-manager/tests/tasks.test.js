// agile-task-manager/tests/tasks.test.js

import assert from 'assert';
import {
  createTask,
  listTasks,
  clearTasks,
  updateTask,
  deleteTask
} from '../src/tasks.js';

function runTests() {
  console.log('Iniciando testes...');

  clearTasks();

  // Teste 1: criar tarefa
  const task = createTask('Estudar GitHub Actions', 'Alta');
  assert.strictEqual(task.id, 1);
  assert.strictEqual(task.title, 'Estudar GitHub Actions');
  assert.strictEqual(task.priority, 'Alta');
  assert.strictEqual(task.done, false);

  // Teste 2: listar tarefas
  const all = listTasks();
  assert.strictEqual(all.length, 1);

  // Teste 3: atualizar tarefa
  const updated = updateTask(1, { done: true, priority: 'Média' });
  assert.strictEqual(updated.done, true);
  assert.strictEqual(updated.priority, 'Média');

  // Teste 4: deletar tarefa
  const removed = deleteTask(1);
  assert.strictEqual(removed.id, 1);

  const finalList = listTasks();
  assert.strictEqual(finalList.length, 0);

  console.log('✅ Todos os testes passaram com sucesso!');
}

try {
  runTests();
  process.exit(0); // sucesso
} catch (error) {
  console.error('❌ Teste falhou:', error.message);
  process.exit(1); // erro
}
