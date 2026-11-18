let tasks = [];

function Task(title, id) {
    this.title = title;
    this.id = id;
    this.creation_date = new Date();
}


function addtask() {
    let title = document.getElementById("taskinput").value;

    if (title === "") {
        alert (" Please enter a task")
        
        
    } else {
        let newtask = new Task(title, tasks.length + 1)
        tasks.push (newtask);
      let tasklist = document.getElementById("tasklist");
      tasklist.innerHTML = "";
    
    for (let i = 0; i < tasks.length; i++) {
       let taskItem = document.createElement("p");
     taskItem.innerHTML = "Task: " + tasks[i].title +
                     " | ID: " + tasks[i].id +
                     " | Created: " + tasks[i].creation_date;
       tasklist.appendChild(taskItem);
}
 document.getElementById("taskinput").value="";
}
}