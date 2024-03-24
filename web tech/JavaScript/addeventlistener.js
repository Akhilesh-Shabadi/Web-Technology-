let maindiv=document.createElement("div");
document.body.append(maindiv);
let div1=document.createElement("div");
let div2=document.createElement("div");
let div3=document.createElement("div");
let div4=document.createElement("div");
let div5=document.createElement("div");
let div6=document.createElement("div");
let div7=document.createElement("div");
let div8=document.createElement("div");
div1.innerText="click";
div2.innerText="mouseover";
div3.innerText="mouseout";
div4.innerText="doubleclick";
div5.innerText="keyup";
div6.innerText="keydown";
div7.innerText="keypress";
div8.innerText="resize";
maindiv.append(div1,div2,div3,div4,div5,div6,div7,div8);
let divclle=[div1,div2,div3,div4,div5,div6,div7,div8];
// function load() {
    for (let index = 0; index < divclle.length; index++) {
    divclle[index].style.height="100px";
    divclle[index].style.width="100px";
    divclle[index].style.border="2px solid black";
    divclle[index].style.padding="10px";
    // divclle[index].style.gridTemplate="repeat(3,1fr)";
    }
// }
// load();
maindiv.style.border="2px solid red";
// let div=document.querySelector("div");
maindiv.style.display="grid";
maindiv.style.justifyContent="space-evenly";
maindiv.style.alignItems="center";
maindiv.style.gridTemplateColumns="auto auto auto auto";
// maindiv.style.gridTemplateRows="auto auto auto auto";
// maindiv.style.gap="5px";
maindiv.style.height="70vh";
// maindiv.style.width="100vw";
div1.addEventListener("click",()=>{
    div1.style.backgroundColor="red";
});
div2.addEventListener("mouseover",()=>{
    div2.style.backgroundColor="black";
});
div3.addEventListener("mouseout",()=>{
    div3.style.backgroundColor="green";
});
div4.addEventListener("dblclick",()=>{
    div4.style.backgroundColor="orange";
});
window.addEventListener("keyup",()=>{
    div5.style.backgroundColor="aqua";
});
window.addEventListener("keydown",()=>{
    div6.style.backgroundColor="brown";
});
window.addEventListener("keypress",()=>{
    div7.style.backgroundColor="blue";
});
window.addEventListener("resize",()=>{
    div8.style.backgroundColor="pink";
});
// div1.addEventListener("click",randomcolor);
// div2.addEventListener("mouseover",randomcolor);
// function randomcolor() {
//     let color=`#${parseInt(Math.random()*1000000)}`;
//     console.log(color);
//     let j=0;
//     while (j<divclle.length) {
//         divclle[j].style.backgroundColor=color;
//         j++;
//     }
//     return color;
// }
// randomcolor();