function adicionarTarefa() {
    var tarefa = document.getElementById('inputTarefa').value;
    if (tarefa) {
        var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefas.push(tarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        document.getElementById('inputTarefa').value = ''; // Limpa o campo de entrada
        mostrarTarefas();
    }
}

function mostrarTarefas() {
    var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    var listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = ''; // Limpa a lista antes de exibir

    tarefas.forEach(function(tarefa, index) {
        var li = document.createElement('li');
        li.textContent = tarefa;
        var btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('remover-tarefa'); // Adiciona a classe ao botão
        btnRemover.onclick = function() {
            removerTarefa(index);
        };
        li.appendChild(btnRemover);
        listaTarefas.appendChild(li);
    });
}

function removerTarefa(index) {
    var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.splice(index, 1); // Remove a tarefa pelo índice
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    mostrarTarefas(); // Atualiza a lista
}

function limparTarefas() {
    localStorage.removeItem('tarefas');
    mostrarTarefas(); // Atualiza a lista
}

// Carrega as tarefas ao iniciar
window.onload = mostrarTarefas;