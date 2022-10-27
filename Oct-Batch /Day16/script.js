const pannels = document.querySelectorAll(".pannel")



pannels.forEach(pannel => {
    pannel.addEventListener("click", function(){
        removeActiveClasses() // first go and remopve all the actie classes  from the html
        pannel.classList.add("active") // then add active class to the current div

    })

})


function removeActiveClasses(){
    pannels.forEach(pannel =>{
        pannel.classList.remove("active")
    })
}