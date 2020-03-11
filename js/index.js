// let homeButton = document.querySelector('a');
// function clickEventHandler(event){
//     event.preventDefault();
//     // event.stopPropagation();
//     console.log(event.type + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//     console.log(event.target);
//     console.log(event.currentTarget);
// };


// homeLink.addEventListener('click',clickEventHandler);
// document.querySelector("nav").addEventListener('click', clickEventHandler);
// let headerClick = document.querySelector("header");
// headerClick.addEventListener('click',clickEventHandler);
// document.body.addEventListener('click',clickEventHandler);
// document.addEventListener('click',clickEventHandler);
// window.addEventListener('click',clickEventHandler);




// console.log(document.querySelector("h1").textContent);
// document.querySelector("h1").setAttribute('onclick', "changeText(this)");
let h1TextContent = document.querySelector("h1");
h1TextContent.addEventListener('mouseenter', (event) => {
    document.querySelector("h1").textContent = "Bun Fus";
});
h1TextContent.addEventListener('mouseleave', (event) =>
document.querySelector("h1").textContent ="Fun Bus");

h1TextContent.addEventListener('mouseup', (event) => 
document.querySelector("h1").textContent = "Bus Fun");

let letsGo = document.querySelector("h2")[1];
console.log(letsGo);