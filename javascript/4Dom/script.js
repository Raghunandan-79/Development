let todos = []

function addTodo() {
    const input = document.querySelector("input")

    if (input.value.trim() === "") return

    todos.push({
        title: input.value
    })

    input.value = ""
    render()
}

function deleteLastTodo() {
    todos.splice(todos.length - 1, 1) // removes last element from the array
    render()
}

function deleteFirstTodo() {
    todos.splice(0, 1)  // removes first element from the array
    render()
}

function deleteTodoAt(index) {
    todos.splice(index, 1)
    render()
}

function editTodoAt(index) {
    const updatedTitle = prompt(
        "Edit Todo:",
        todos[index].title
    )

    if (updatedTitle !== null && updatedTitle.trim() !== "") {
        todos[index].title = updatedTitle
        render()
    }
}

function createTodoComponent(todo, index) {
    const div = document.createElement("div")

    const h1 = document.createElement("h1")
    h1.innerText = todo.title

    // Edit button
    const editButton = document.createElement("button")
    editButton.innerText = "Edit"

    editButton.addEventListener("click", function () {
        editTodoAt(index)
    })

    // Delete button
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"

    deleteButton.addEventListener("click", function () {
        deleteTodoAt(index)
    })

    div.append(h1)
    div.append(editButton)
    div.append(deleteButton)

    return div
}

function render() {
    const todosContainer = document.querySelector("#todos")
    todosContainer.innerHTML = ""

    for (let i = 0; i < todos.length; i++) {
        const element = createTodoComponent(todos[i], i)
        todosContainer.appendChild(element)
    }
}