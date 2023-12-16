let todoContnt;
let Elmoverlay;
let ElmAddBox;
let ElmAddtodoBtn;
let newTodo;
let todoCloseIcone;
let ElemTodo;
addToDoBtn = document.getElementById("add_btn")
ElmAddTxtBox = document.getElementById("todo_input")
closeAddtodoBox = document.getElementsByClassName("btn close-modal")
ElmStatusClm = document.getElementById("no_status")

addToDoBtn.addEventListener('click' , function addnewtodo(){
    Elmoverlay = addToDoBtn.appendChild(overlay)
    Elmoverlay.style.display = 'block'
    ElmAddBox = addToDoBtn.appendChild(todo_form)
    ElmAddBox.style.top = '22%'
    ElmAddTxtBox.value = "";
})

ElmAddTxtBox.addEventListener('click' , function addtext(){
    ElmAddTxtBox.setAttribute('autofocus','')
    console.log("hi")
})

//close icone in add todo box
function closebox(){
    console.log("closeAddtodoBox");
    console.log("closeAddtodoBox");
    addToDoBtn.removeChild(ElmAddBox)
    addToDoBtn.removeChild(Elmoverlay)
    //  ElmAddBox.remove()
    //  Elmoverlay.remove()
}

//add todo button in add todo box
ElmAddtodoBtn = document.getElementById("todo_submit")
ElmAddtodoBtn.addEventListener('click' , function addtodo(){
    console.log("click add")
    todoContnt = ElmAddTxtBox.value;
    newTodo = document.createElement('div')
    newTodo.setAttribute('class','todo')
    newTodo.setAttribute('draggable','true')
    newTodo.innerHTML = todoContnt
    todoCloseIcone = document.createElement('span')
    todoCloseIcone.setAttribute('class','close')
    todoCloseIcone.innerHTML= '&times;'
    newTodo.append(todoCloseIcone)
    ElmStatusClm.append(newTodo)
    addToDoBtn.removeChild(ElmAddBox)
    addToDoBtn.removeChild(Elmoverlay)
    console.log(todoContnt)
})
