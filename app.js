const todoInput = document.querySelector('.todo-input')
const plusBtn = document.querySelector('.plus-btn')
const todos = document.querySelector('.todos')
const listItems = document.querySelector('.list-items')

plusBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // first create a div and put buttons and icons inside of that div
    //put that div inside of listItems

    const todoDiv = document.createElement('div')
    todoDiv.className = 'todo-div'


    //create li and buttons
    const li = document.createElement('li')
    li.className = 'list-item'

    // text input will be displayed into li


    if (todoInput.value !== ' ') {
        li.textContent = todoInput.value;
        todoInput.value = ''
    }


    const checkBtn = document.createElement('button')
    checkBtn.className = 'check-btn'
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'


    // appending things
    listItems.appendChild(todoDiv);
    todoDiv.appendChild(li);
    todoDiv.appendChild(checkBtn);
    todoDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        todoDiv.classList.add('removed')
        todoDiv.addEventListener('transitionend', () => {
            todoDiv.style.display = 'none';
        })
    })

    checkBtn.addEventListener('click', () => {
        todoDiv.classList.toggle('completed')
    })


});