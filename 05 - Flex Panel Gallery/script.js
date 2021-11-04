document.addEventListener("DOMContentLoaded", function(event) {

    // let panel = document.querySelectorAll(".panel");

function handleClick(e) {
    let panel = e.path[0];
    if (!panel.getAttribute("class")) {
        panel = e.path[1];
    } 
        // console.log(x); 
    if (panel.classList.contains("open")) {
        panel.classList.remove("open");
    } else {
        panel.classList.add("open");  
    }
}

document.addEventListener("click", handleClick);
// panel.forEach(element => element.addEventListener("click", handleClick));

});