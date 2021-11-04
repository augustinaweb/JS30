document.addEventListener("DOMContentLoaded", function(e) {   
    const allCheckBoxes = document.querySelectorAll("input[type=checkbox]");
    let startIndex = allCheckBoxes.length - 1;

    function findIndex(targetValue) {
        for (let i in allCheckBoxes) {
            if (allCheckBoxes[i] === targetValue) {
                return i;
            }
        }        
    };
    
    document.addEventListener("click", function(e) {
        let endIndex;
        if (e.shiftKey === true && e.target.type === "checkbox") {
            console.log("Start to check them in between!")
            endIndex = findIndex(e.target);            
            for (let i in allCheckBoxes) {
                let firstBox = allCheckBoxes[startIndex].checked;
                if (i >= startIndex && i <= endIndex || i >= endIndex && i <= startIndex) {                    
                    allCheckBoxes[i].checked = firstBox || (startIndex === allCheckBoxes.length - 1);                                       
                    console.log(allCheckBoxes[i]);
                } 
            };            
            startIndex = endIndex;  
            return;         
        }     
        startIndex = findIndex(e.target); 
    });
  
});