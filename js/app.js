let todoContext;
let Elmoverlay;
let ElmAddBox;
addToDoBtn = document.getElementById("add_btn")
ElmAddTxtBox = document.getElementById("todo_input")
closeAddtodoBox = document.getElementsByClassName("btn close-modal")

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

function closebox(){
    console.log("closeAddtodoBox");
    console.log("closeAddtodoBox");
    addToDoBtn.removeChild(ElmAddBox)
    addToDoBtn.removeChild(Elmoverlay)
    //  ElmAddBox.remove()
    //  Elmoverlay.remove()
    //addToDoBtn.removeEventListener('click' , addnewtodo)
}
