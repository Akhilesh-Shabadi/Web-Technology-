let data={
    img:"bugatti-chiron-rear-4k-8p.jpg",
    price:200000000,
    discount:20,
    delivery:3
}

let image=document.querySelector("img");
image.setAttribute("src",data.img);
image.style.width="400px";
image.style.height="300px";

let plus=document.createElement("button");
let minus=document.createElement("button");
let num=document.createElement("p")
let value=1;
plus.innerText="+";
minus.innerText="-";
num.innerText=value;
plus.addEventListener("click",()=>{
    value++;
    num.innerText=value;
    let pri=data.price*value;
    list(pri);
})
minus.addEventListener("click",()=>{
    if(value>1){
        value--;
    }
    num.innerText=value;
    let pri=data.price*value;
    list(pri);
})

function list(pr) {
    let v=document.querySelectorAll("pre");
    v[0].innerText="Price : "+data.price;
    v[1].innerText="Quantity : ";
    v[1].append(minus);
    v[1].append(num);
    v[1].append(plus);
    v[2].innerText="Discount : "+data.discount+"%";
    let total=(pr-((data.discount/100)*pr));
    v[3].innerText="Total : "+total;
    let deli=(total/100)*data.delivery;
    // v[4].innerText="Delivery : "+data.delivery;
    v[5].innerText="Delivery Chargers : "+data.delivery+"%";
    let sum=total+deli;
    v[6].innerText="Total Amount : "+sum;
}
list(data.price);