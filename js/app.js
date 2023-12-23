
let todoContnt;
let elmoverlay;
let elmAddBox;
let elmAddtodoBtn;
let newTodo;
let todoCloseIcone;
let elemTodo;
let elmTarget;
let addToDoBtn = document.getElementById("add_btn")
let elmAddTxtBox = document.getElementById("todo_input")
let closeAddtodoBox = document.getElementsByClassName("btn close-modal")
let elmStatusClum = document.getElementById("no_status")
let elmNotStartClum = document.getElementById("notStart")
let elmModal = document.getElementById("todo_form")
let elmOverlay = document.getElementById("overlay")

addToDoBtn.addEventListener('click' , function addnewtodo(){
    elmOverlay.setAttribute('class','active')
    elmModal.setAttribute('class','active')
    elmAddTxtBox.value = "";
})

elmAddTxtBox.addEventListener('click' , function addtext(){
    elmAddTxtBox.setAttribute('autofocus','')
    console.log("hi")
})

//close icone in add todo box
function closebox(){
    console.log("closeAddtodoBox");
    console.log("closeAddtodoBox");
    elmModal.removeAttribute('class')
    elmOverlay.removeAttribute('class')
    elmModal.setAttribute('class','modal')
}

//add todo button in add todo box
elmAddtodoBtn = document.getElementById("todo_submit")
elmAddtodoBtn.addEventListener('click' , function addtodo(event){
    todoContnt = elmAddTxtBox.value;
    newTodo = document.createElement('div')
    newTodo.setAttribute('class','todo')
    newTodo.setAttribute('draggable','true')
    newTodo.setAttribute('id', '1C')
    newTodo.addEventListener('dragstart',function dragdstart(event) {
        event.dataTransfer.setData('elem',event.target.id)
    })
    newTodo.innerHTML = todoContnt
    todoCloseIcone = document.createElement('span')
    todoCloseIcone.setAttribute('class','close')
    todoCloseIcone.innerHTML= '&times;'
    newTodo.append(todoCloseIcone)
    elmStatusClum.append(newTodo)
    elmModal.removeAttribute('class','active')
    elmOverlay.removeAttribute('class','active')
    elmModal.setAttribute('class','modal')
    console.log(todoContnt)
})


function dragdstart(event){
    console.log("drag") 
    event.dataTransfer.setData('elem',event.target.id)
}

function dropHander(event){
    // console.log("on drop : no status")
    let TargetId = event.dataTransfer.getData('elem')
    // console.log(TargetId)
    elmTarget = document.getElementById(TargetId)
    // console.log(elmTarget)
    event.target.append(elmTarget)
}

function dragoverHandler(event){
    console.log("on drop over")
    event.preventDefault()
}

//function close Div todo
let closeSpan = document.querySelector(".close")
let parentClose = closeSpan.closest(".todo")
closeSpan.addEventListener('click',function rmDiv(){
    parentClose.remove()
})