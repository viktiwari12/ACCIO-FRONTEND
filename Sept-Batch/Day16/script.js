let displayxyz = document.getElementById("display")

function isopxyz(opxyz){
    if(opxyz === "+" || opxyz === "-" || opxyz === "*" || opxyz === "/")
        return true
    return false
}
function clickingxyz(clickedxyz){
    if(displayxyz.innerText === ""){
        if(clickedxyz != '0'){
            displayxyz.innerText = clickedxyz
        }
    }else{
        if(isopxyz(clickedxyz) && isopxyz(displayxyz.innerText[displayxyz.innerText.length -1])){
            displayxyz.innerText = displayxyz.innerText.slice(0, -1)
        }
        displayxyz.innerText = displayxyz.innerText+clickedxyz
    }
}
function clearXYX(){
    displayxyz.innerText = ""
}

function backxyz(){
    displayxyz.innerText = displayxyz.innerText.slice(0, -1)
}

function evalxyz(){
    try{
        displayxyz.innerText = eval(displayxyz.innerText)
    }catch(err){
        displayxyz.innerText = "ERROR"
    }
}
