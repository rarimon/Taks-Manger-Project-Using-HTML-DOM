const input = document.getElementById("inputText");
const submitButton = document.getElementById("submitButton");
const showTask=document.getElementById("taskList");


let tasks=[];
let editIndex=null;

// Funtion to Rendar Task
function renderTask(){
     showTask.innerHTML=" ";

    tasks.forEach((task,index)=>{
        // create Task Item
        const taskItem=document.createElement("div");
        taskItem.className="d-flex justify-content-between align-items-center mt-3 border p-2 rounded";

        // Tast TEXT
        const text=document.createElement("span");
        text.textContent=task;

        // Actions
        const actions=document.createElement("div");


        // Edit Button
        const editBtn=document.createElement("button");
        editBtn.className="btn btn-warning btn-sm me-3";
        editBtn.textContent="Edit";
        editBtn.onclick=()=>handleEdit(index);



        // delete Button
        const deleteBtn=document.createElement("button");
        deleteBtn.className="btn btn-danger btn-sm";
        deleteBtn.textContent="Delete";
        deleteBtn.onclick=()=>handleDelete(index);

        // Append Button
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        // append text
        taskItem.appendChild(text);
        taskItem.appendChild(actions);

        showTask.appendChild(taskItem);


    })


}



// Function HangelAddTask
function handleAddTask(){
  const taskValue=input.value.trim();


  if(!taskValue){
      alert("Please enter a task");
  }

  if(editIndex !==null){

    tasks[editIndex]=taskValue;
    editIndex=null;
    submitButton.textContent="Add Task";
  }

  else{
      tasks.push(taskValue);
  }
input.value = "";
// TaskShow
  renderTask()
}

// Function Edit Handaler
function handleEdit(index){
    input.value=tasks[index];
    editIndex=index;
    submitButton.textContent="Update Task";
}

//Function Delete handaler
function handleDelete(index){
    const deteleConfirmation=confirm(`Are you sure you want to delete this task?`);
    if(deteleConfirmation){
        tasks.splice(index,1);
        renderTask()
    }
}



// task add/update Submit Button Event Lisener
submitButton.addEventListener("click", handleAddTask);