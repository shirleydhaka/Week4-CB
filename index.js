document.addEventListener("DOMContentLoaded", function () {
    
    var inputTask = document.getElementById("input-task");
    var addTaskBtn = document.getElementById("add-task");
    var taskContainer = document.getElementById("task-container");
  
    
    addTaskBtn.addEventListener("click", function () {
      
      var taskText = inputTask.value.trim();
  
      
      if (taskText !== "") {
        
        var taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-task" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
        `;
  
    
        taskContainer.appendChild(taskElement);
  
        inputTask.value = "";
      }
    });
  
    // Function to delete a task
    window.deleteTask = function (deleteBtn) {
      var taskElement = deleteBtn.parentNode;
      taskContainer.removeChild(taskElement);
    };
  });
  
