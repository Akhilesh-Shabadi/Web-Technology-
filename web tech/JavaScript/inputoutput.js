// -----------condition-------------//
// let input=document.querySelector("input");
// let button=document.querySelector("button");
// let h2=document.querySelectorAll("h2");

// button.addEventListener("click",()=>{
//     let val=input.value;
//     if (val%2===0) {
//         let data=`${val} is Even number.`
//         h2[0].innerText=data;
//     } else {
//         data=`${val} is Odd number.`;
//         h2[0].innerText=data;
//     }        
// })

// -----------------table---------------//
function createtable(range) {
    let table=document.createElement("table");
    table.style.border="2px solid black";
    table.cellPadding="10px";
    table.cellSpacing="20px";
    let num=0;
    for(let i=0;i<range;i++){
        let tr=document.createElement("tr");
        for(let j=0;j<range;j++){
            let td=document.createElement("td");
            num++;
            td.innerText=num;
            td.style.padding="20px";
            tr.append(td);
            // console.log(td);
            td.style.backgroundColor=color();
        }
        table.append(tr);
    }
    document.body.append(table);
}
let input=document.querySelector("input");
let button=document.querySelector("button");
button.addEventListener("click",()=>{
    createtable(input.value);
})
function color() {
    let col=`#${parseInt(Math.random()*1000000)}`
    return col;
}