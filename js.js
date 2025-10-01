const buttons = document.querySelectorAll(".button")
console.log(buttons)
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        button.style.marginLeft = "-20px"     
        button.style.transition = "all 0.4s ease-out" 
    })
    button.addEventListener('mouseleave', function() {
        button.style.marginLeft = "20px"     
        button.style.transition = "all 0.4s ease-out" 
    })
});