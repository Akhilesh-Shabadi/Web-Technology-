let collection=[
    {
        name1:"Lion",
        weight:"300 Kg",
        img:"https://media.vanityfair.com/photos/5d2750b1abb5c9000873bced/master/pass/lion-king-review.jpg",
    },{
        name1:"TIGER",
        weight:"259 Kg",
        img:"https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg"
    },{
        name1:"CHEETHA",
        weight:"209 Kg",
        img:"https://cdn.britannica.com/98/152298-050-8E45510A/Cheetah.jpg"
    },{
        name1:"MONKEY",
        weight:"90 Kg",
        img:"https://www.pbs.org/wnet/nature/files/2014/10/Monkey-Main-1280x600.jpg"
    },{
        name1:"DEER",
        weight:"80 Kg",
        img:"https://upload.wikimedia.org/wikipedia/commons/a/a7/A_chital_stag_1.JPG"
    },
]
let div=document.createElement("div");
div.style.textAlign="center";
let h1=document.createElement("h1");
let h2=document.createElement("h2");
let img=document.createElement("img");
img.style.height="400px";
img.style.width="700px";
let nxt=document.createElement("button");
let prev=document.createElement("button");
h1.innerText=collection[0].name1;
h2.innerText=collection[0].weight;
nxt.innerText="next";
prev.innerText="previous";
div.append(img,h1,h2,prev,nxt);
document.body.append(div);
let num=0;
let btn=document.querySelectorAll("button");
btn[0].addEventListener("click",()=>{
    num--;
    if (num<0) {
        num=collection.length-1;
    }
    slide(num);
})
btn[1].addEventListener("click",()=>{
    num++;
    if(num>collection.length-1){
        num=0;
    }
    slide(num);
})
function slide(index) {
    // console.log(index);
    img.src=collection[index].img;
    h1.innerText=collection[index].name1;
    h2.innerText=collection[index].weight;
}
// document.body.style.backgroundColor="gray";
window.addEventListener("DOMContentLoaded",()=>{
    slide(0);
})