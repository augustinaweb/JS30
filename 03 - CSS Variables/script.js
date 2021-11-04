document.addEventListener("DOMContentLoaded", function(event) {

    const image = document.querySelector("img");
    const coloredText = document.querySelector(".hl");
    const spacingSlider = document.querySelector("input[name='spacing']");
    const blurSlider = document.querySelector("input[name='blur']");
    const colorPicker = document.querySelector("input[name='base']");

    // Adjust spacing
    function handleSpacing() {
        image.style.padding = spacingSlider.value + spacingSlider.dataset.sizing;
    }
    /* function adjustSpacing() {  // Kodėl neveikia su .getAttribute?
        // Nes jam nerūpi input reikšmė. jis tik žiūri HTML reikšmę
        console.log(spacingSlider.getAttribute("value") + spacingSlider.getAttribute("data-sizing"));
        image.style.padding = spacingSlider.getAttribute("value") + spacingSlider.getAttribute("data-sizing");
    } */

    handleSpacing();

    spacingSlider.addEventListener('input', handleSpacing);  

    // Adjust blur
    function handleBlur() {
        image.style.filter = `blur(${blurSlider.value}${blurSlider.dataset.sizing})`;
    }

    handleBlur();

    blurSlider.addEventListener('input', handleBlur);  
    
    // Adjust color
    function handleColor() { //this is an Event handler. start name with "handle"
        image.style.backgroundColor = colorPicker.value;
        coloredText.style.color = colorPicker.value;
    }

    handleColor();

    colorPicker.addEventListener('input', handleColor);

});