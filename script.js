document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput.value} <button class="delete-btn">Delete</button>`;

        li.querySelector('.delete-btn').addEventListener('click', function() {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }
}
