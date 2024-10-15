const button = document.querySelector('.button');
const text = document.querySelector('.text');
let list = document.querySelector('.ul-task');
const newContainer = document.querySelector('.newContainer');
let body = document.querySelector('.body');

let listTask = [];

// adiciona uma nova tarefa na lista quando clica no botão e dps aciona a função para mostrar a tarefa
function addTask() {
    listTask.push(text.value);
    text.value = '';
    showTask();
}

function showTask() {
    let newLi = '';
    listTask.forEach((task, index) => { 
        newLi += 
        `
        <li class="task">
            <p>${task}</p>
            <img src="trash.png" class="trash" onclick="deleteTask(${index})">
        </li>
        `;
    });
    list.innerHTML = newLi;
}

function deleteTask(index) { 
    listTask.splice(index, 1); 
    showTask(); 
}

newContainer.addEventListener('click', function () {
    const newDiv = document.createElement('div'); 
    newDiv.classList.add('container'); 
    newDiv.innerHTML = 
    `
        <input class="text" placeholder="Digite aqui">
        <button class="button">Adicionar</button>
        <ul class="ul-task"></ul>
    `;
    body.appendChild(newDiv); 
    
    // Funções e variáveis específicas para cada nova div
    const newText = newDiv.querySelector('.text');
    const newButton = newDiv.querySelector('.button');
    const newList = newDiv.querySelector('.ul-task');

    let newTask = []; // Lista local para cada div

    newButton.addEventListener('click', function () {
        newTask.push(newText.value);
        newText.value = '';
        showNewTasks(); // Chama a função de exibir as tarefas da nova div
    });

    function showNewTasks() {
        let newLi = '';
        newTask.forEach((task, index) => {
            newLi += 
            `
            <li class="task">
                <p>${task}</p>
                <img src="trash.png" class="trash" data-index="${index}">
            </li>
            `;
        });
        newList.innerHTML = newLi; 

        // Adiciona o evento de clique para deletar corretamente
        const trashIcons = newList.querySelectorAll('.trash');
        trashIcons.forEach((icon) => {
            icon.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                deleteNewTask(index);
            });
        });
    }

    function deleteNewTask(index) { 
        newTask.splice(index, 1); // Remove o item da lista 'newTask'
        showNewTasks(); // Recarrega a lista da nova div
    }
});

button.addEventListener('click', addTask);
