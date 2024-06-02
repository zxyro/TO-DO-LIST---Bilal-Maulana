document.getElementById('add-task-button').addEventListener('click', function () {
    const taskText = document.getElementById('new-task').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (taskText === '') {
        errorMessage.textContent = 'ISI DULU LAH!!';
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function () {
        taskItem.classList.add('fade-out');
        setTimeout(function () {
            taskList.removeChild(taskItem);
        }, 500);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    document.getElementById('new-task').value = '';
});

document.getElementById('new-task').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('add-task-button').click();
    }
});
