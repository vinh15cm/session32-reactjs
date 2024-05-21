"use strict";
class TodoList {
    constructor() {
        this.todoList = this.loadTodoListFromLocalStorage();
        this.renderJob();
    }
    renderJob() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        this.todoList.forEach(todo => {
            const taskItem = document.createElement("li");
            taskItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            // Checkbox
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.checked = todo.completed;
            checkbox.addEventListener("change", () => {
                todo.completed = checkbox.checked;
                if (checkbox.checked) {
                    taskName.classList.add("text-decoration-line-through");
                }
                else {
                    taskName.classList.remove("text-decoration-line-through");
                }
                this.saveTodoListToLocalStorage();
                this.updateProgress();
            });
            taskItem.appendChild(checkbox);
            // Tên công việc
            const taskName = document.createElement("span");
            taskName.innerText = todo.name;
            if (todo.completed) {
                taskName.classList.add("text-decoration-line-through");
            }
            taskItem.appendChild(taskName);
            // Phần tử chứa nút "Sửa" và "Xóa"
            const buttonsContainer = document.createElement("div");
            buttonsContainer.classList.add("ms-auto");
            // Button "Sửa"
            const editButton = document.createElement("button");
            editButton.innerText = "Sửa";
            editButton.classList.add("btn", "btn-primary", "me-1");
            editButton.addEventListener("click", () => {
                const newName = prompt("Nhập tên mới cho công việc:");
                if (newName) {
                    todo.name = newName.trim();
                    this.saveTodoListToLocalStorage();
                    this.renderJob();
                }
            });
            buttonsContainer.appendChild(editButton);
            // Button "Xóa"
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Xóa";
            deleteButton.classList.add("btn", "btn-danger");
            deleteButton.addEventListener("click", () => {
                if (confirm("Bạn có chắc chắn muốn xóa công việc này không?")) {
                    this.deleteJob(todo.id);
                }
            });
            buttonsContainer.appendChild(deleteButton);
            taskItem.appendChild(buttonsContainer);
            taskList.appendChild(taskItem);
        });
        this.updateProgress();
    }
    createJob(taskName) {
        const newTodo = {
            id: this.todoList.length + 1,
            name: taskName,
            completed: false
        };
        this.todoList.push(newTodo);
        this.saveTodoListToLocalStorage();
        this.renderJob();
    }
    updateJob(todoId) {
        const todo = this.todoList.find(todo => todo.id === todoId);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodoListToLocalStorage();
            this.renderJob();
        }
    }
    deleteJob(todoId) {
        this.todoList = this.todoList.filter(todo => todo.id !== todoId);
        this.saveTodoListToLocalStorage();
        this.renderJob();
    }
    loadTodoListFromLocalStorage() {
        const todoListJSON = localStorage.getItem("todoList");
        return todoListJSON ? JSON.parse(todoListJSON) : [];
    }
    saveTodoListToLocalStorage() {
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
    }
    updateProgress() {
        const completedCountSpan = document.getElementById("completedCount");
        const totalCountSpan = document.getElementById("totalCount");
        let completedCount = 0;
        this.todoList.forEach(todo => {
            if (todo.completed) {
                completedCount++;
            }
        });
        completedCountSpan.textContent = completedCount.toString();
        totalCountSpan.textContent = this.todoList.length.toString();
        if (completedCount === this.todoList.length && this.todoList.length > 0) {
            alert("Hoàn thành công việc");
        }
    }
    editJob(todoId) {
        // Đây là nơi bạn có thể thêm mã để xử lý sự kiện chỉnh sửa công việc
        console.log("Edit job with ID:", todoId);
    }
    addTask(taskName) {
        if (taskName.trim() === "") {
            alert("Tên công việc không được để trống");
            return;
        }
        if (this.isTaskDuplicate(taskName)) {
            alert("Tên công việc không được phép trùng");
            return;
        }
        const newTodo = {
            id: this.todoList.length + 1,
            name: taskName,
            completed: false
        };
        this.todoList.push(newTodo);
        this.saveTodoListToLocalStorage();
        this.renderJob();
    }
    isTaskDuplicate(taskName) {
        return this.todoList.some(todo => todo.name === taskName);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const todoList = new TodoList();
    addTaskBtn.addEventListener("click", () => {
        const taskName = taskInput.value.trim();
        if (taskName === "") {
            alert("Tên công việc không được để trống");
            return;
        }
        if (todoList.todoList.some(todo => todo.name === taskName)) {
            alert("Tên công việc không được phép trùng");
            return;
        }
        todoList.createJob(taskName);
        taskInput.value = "";
    });
});
