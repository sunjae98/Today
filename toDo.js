const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector(".js-toDoInput");
const toDoList = document.querySelector(".js-toDoList");

let toDoArray = [];


function delToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li)
  const cleanToDo = toDoArray.filter(function(doing){
    return doing.id !== parseInt(li.id) ;
  });
  toDoArray = cleanToDo ;
  saveToDo() ;
}


function saveToDo() {
    localStorage.setItem("toDos", JSON.stringify(toDoArray))
}

function paintToDo(text){
  const li = document.createElement("li")
  const delButton = document.createElement("button")
  delButton.innerText = "X"
  delButton.addEventListener("click", delToDo)
  const span = document.createElement("span")
  span.innerText = text
  const newId =  toDoArray.length + 1
  toDoList.appendChild(li);
  li.appendChild(delButton);
  li.appendChild(span);
  li.id = newId;
  const toDoObject = {
    text : text,
    id : newId
  };
  toDoArray.push(toDoObject)
  saveToDo();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value
  paintToDo(currentValue);
  toDoInput.value = ""
}


function loadToDo(){
  const toDo = localStorage.getItem("toDos")
  if(toDo !== null){
    const parsedToDo = JSON.parse(toDo);
    parsedToDo.forEach(function(doing){
    paintToDo(doing.text);
    });
  }
}


function init(){
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
