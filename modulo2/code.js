const task = document.getElementById("task")
const btn = document.getElementById("task_btn")
const form = document.getElementById("form_task")
const inputText = document.getElementById("task")
const taskList = document.getElementById("tasks_list")
let tasks = [
]

function agregarTarea(tarea){
    const index = tasks.length
    tasks.push({
        id: index,
        tarea,
        estado: false
    })
}

function mostrarTareas(tareas){
    taskList.innerHTML = ""
    tareas.forEach((tarea) => {
        taskList.innerHTML +=`
        <li class="task_item">
            <input type="checkbox"">${tarea.tarea}</input>
            <button class="dlt-btn" index=${tarea.id} value=${tarea.id}>X</button>
        </li>`
    })
}

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    if(inputText.value.length > 0){
        agregarTarea(inputText.value)
        mostrarTareas(tasks)
        inputText.value = ""
        return
    }
    alert("Please fill the form")
})

document.addEventListener("click",(event) => {
    console.log(event.target)
})





