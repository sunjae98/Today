const form = document.querySelector(".js-form");
const input = form.querySelector(".js-input");
const greeting = document.querySelector(".js-greeting");
const toDo = document.querySelector(".js-toDoForm");

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value
  paintgreeting(currentValue)
  localStorage.setItem("User", currentValue)
}

function askName(){
 form.classList.add('showing')

 form.addEventListener("submit", handleSubmit)
}

function paintgreeting(text){
  greeting.classList.add("showing")
  form.classList.remove("showing")
  toDo.classList.remove("hide")
  greeting.innerText = `Hello ${text}`;
}


function loadName(){
  const currentUser = localStorage.getItem("User")
  if(currentUser === null){
    askName();
  }
  else{
    paintgreeting(currentUser);
  }
}


function init(){
  loadName();
}
init();
