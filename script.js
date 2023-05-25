// var typed = require(typed.min.js);

// var typed = new Typed(".typing-text", {
//     strings: ["Android development", "Full-Stack development", "Machine Learning"],
//     loop: true,
//     typeSpeed: 50,
//     backSpeed: 25,
//     backDelay: 500,
// });
//
// Awsome ProgressBar
//
const skill = document.querySelector('.skill');
const totalWidth = parseInt(getComputedStyle(skill).width);
const volume = document.querySelectorAll('.volume');



// resize the volume of boxes with the values
volume.forEach(element => {
    const vol = parseInt(element.parentElement.parentElement.children[1].innerText);
    element.style.width = `${vol}%`;
});



// Change the Pointer of Volume
const skillQuantity = document.querySelectorAll('.skill-quantity');

skillQuantity.forEach(element => {
    let val = parseInt(element.innerText);
    // becuase the pointer overflow of box in 100%
    if (val == 100) {
        val -= .4;
    }
    // Width of valueText / 2 => put on the pointerLine
    const textWidth = parseInt(getComputedStyle(element).width) / 2;
    //calcute the place of the pointer
    element.style.right = `${totalWidth - textWidth - (val * totalWidth / 100)}px`
});