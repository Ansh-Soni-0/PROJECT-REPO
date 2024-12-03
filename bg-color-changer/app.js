const generateHaxCode = function(){
    let hex = "0123456789ABCDEF";
    let color = "#"

    for(let i=0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}


let intervalId;

const startChangingBg = function(){
    // check if intervalId variable is empty then change color 
    if(!intervalId){ //intervalId != null
        intervalId = setInterval(changeColor , 1000)
    }

    function changeColor(){
        document.body.style.backgroundColor = generateHaxCode();
    }
}

const stopChangingBg = function(){
    clearInterval(intervalId)
    // derefrence the variable after stop changing the color
    intervalId = null;
}

document.getElementById('start').addEventListener('click',startChangingBg);
document.getElementById('stop').addEventListener('click',stopChangingBg);