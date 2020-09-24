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

let changeLinks = [];
const links = document.querySelectorAll("a");
links.forEach((item) => {
    changeLinks.push(item.text);
    });
console.log(changeLinks);
// console.log(links[0].text);

let picture1 = document.querySelector(".img-content");
let picture2 = document.querySelector(".img-fluid");
let picture3 = document.querySelector(".content-destination img");
let picture4 = document.querySelector(".intro img");
console.log(picture1);
console.log(picture2);
picture1.addEventListener('mouseenter', (event)=>{
// console.log(picture1)
picture1.style.transition = "all 1s";
picture1.style.transform = "rotate(25deg)";
});

picture1.addEventListener("mouseleave", (event) => {
    picture1.style.transition = "all 1s";
    picture1.style.transform = "rotate(-25deg)";
});

picture2.addEventListener("mouseenter", (event) => {
    picture2.style.transition = "all 2s";
    picture2.style.transform = "rotate(360deg)";
});

picture2.addEventListener('mouseleave', (event) => {
    picture2.style.transition = "all 3s";
    picture2.style.transform = "rotate(1080deg)";
});

// console.log(document.querySelector(".content-destination img"));
picture3.addEventListener('mouseenter', event => {
    picture3.style.transform = "scaleX(-1)";
});

picture3.addEventListener('mouseleave', event => {
    picture3.style.transform = "scaleX(1)";
});

// console.log(document.querySelector(".intro img"));
picture4.addEventListener('mouseenter', event => {
    picture4.style.filter = "grayscale(100%)";
});
picture4.addEventListener('mouseleave', event => {
    picture4.style.filter = "nofilter"
    picture4.style.filter = "blur(3px)";
});
