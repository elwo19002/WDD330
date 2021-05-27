var newItem=document.getElementById("new-task");
var add=document.getElementsByTagName("button")[0];
var incomtask=document.getElementById("incomplete");
var comtask=document.getElementById("complete");
var createItem=function(taskString){
	var listItem=document.createElement("li");
	var checkBox=document.createElement("input");
	var label=document.createElement("label");
	var editInput=document.createElement("input");
	var editButton=document.createElement("button");
	var deleteButton=document.createElement("button");
	label.innerText=taskString;
	checkBox.type="checkbox";
	editInput.type="text";
	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}

var addTask=function(){
	var listItem=createItem(newItem.value);
	incomtask.appendChild(listItem);
	final(listItem, complete);
	newItem.value="";
}

add.addEventListener("click",addTask);
add.addEventListener("click",ajaxRequest);

var editTask=function(){
var listItem=this.parentNode;
var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
		if(containsClass){
			label.innerText=editInput.value;
		}
    else{
			editInput.value=label.innerText;
		}
		listItem.classList.toggle("editMode");
}

var deleteTask=function(){
		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);
}

var complete=function(){
	var listItem=this.parentNode;
	comtask.appendChild(listItem);
	final(listItem, incomplete);
}

var incomplete=function(){
		var listItem=this.parentNode;
	  incomtask.appendChild(listItem);
		final(listItem,complete);
}

var ajaxRequest=function(){
}

var final=function(taskListItem,checkBoxEventHandler){
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");
  editButton.onclick=editTask;
  deleteButton.onclick=deleteTask;
  checkBox.onchange=checkBoxEventHandler;
}

for (var i=0; i<incomtask.children.length;i++){
  bindTaskEvents(incomtask.children[i],taskCompleted);
}

for (var i=0; i<comtask.children.length;i++){
  bindTaskEvents(comtask.children[i],taskIncomplete);
}