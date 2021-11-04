document.addEventListener("DOMContentLoaded", function(e) {
    // get canvas element
    const canvas = document.getElementById("draw");
    const ctx = canvas.getContext('2d');   

    let setCanvasSize = false;
    let isDrawing = false;

    let startX = 0;
    let startY = 0;
    let x;
    let y;   
    let hsl = 0;
    let width = 50;
    let sum = 0;
    
    function changeColor() {   
        hsl += 1;
        color = `hsl(${hsl}, 100%, 50%)`;                              
        return color;  
    }    
    
    function changeWidth() {       
        sum += 0.4;
        if (sum < 50) {
            width -= 0.4; 
        } else if (sum >= 50 && sum <= 100) {
            width += 0.4;
        } else {
            sum = 0; 
            width = 50;           
        }         
        return width;
    }      
    
    function createGradient(x, y, color, width) {
        const gradient = ctx.createRadialGradient(x, y, width, x , y , width + 1);
        gradient.addColorStop(0, color);        
        gradient.addColorStop(0.1, "transparent"); 
        return gradient;
    }
        
    function startDrawing(e) { 
        if (setCanvasSize !== true) {           
            canvas.setAttribute("height", `${e.view.innerHeight}`);
            canvas.setAttribute("width", `${e.view.innerWidth}`);
            setCanvasSize = true;
        }              
        isDrawing = true; 
        startX = e.offsetX;
        startY = e.offsetY;   
    }
       
    function draw(e) {
        if (isDrawing !== true) {
            return;
        }
        x = e.offsetX;
        y = e.offsetY; 
        color = changeColor();
        width = changeWidth();            
        gradient = createGradient(x, y, color, width);
        
        // ctx.fillStyle = gradient;
        // ctx.fillRect(x - width, y - width, width * 2, width * 2);  
        
        // ctx.fillStyle = gradient;
        // ctx.arc(x, y, width, 0, Math.PI * 2, true);              
        // ctx.fill();

        ctx.strokeStyle = color;
        ctx.lineWidth = 2 * width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(x, y);
        ctx.stroke();
        startX = x;
        startY = y;         
    }
    
    function finishDrawing(e) {        
        isDrawing = false;
    }


    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", finishDrawing);
    
});