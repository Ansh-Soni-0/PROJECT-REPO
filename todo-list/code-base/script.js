const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function AddTask(){

    if(inputBox.value === ''){
        alert("you must write something!")
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = "\u00d7" // -> \u00d7 is the code of cross 
        li.appendChild(span)
    } 
    inputBox.value = ""
    savedata()
}

// checked button when we click any list items button
listContainer.addEventListener('click' , function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked")
        savedata()
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove() 
        savedata()
    }
},false)

// function to save the data in our browser
function savedata(){
    localStorage.setItem("val" , listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("val")
}

showTask();