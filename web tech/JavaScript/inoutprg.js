let option=document.querySelector("#logic");
let input=document.querySelector("input");
let button=document.querySelector("button");
let h1=document.querySelector("h1");
// let val=input.value;
button.addEventListener("click",()=>{
    let selValue=option.value
    if(selValue==="happy number")
    {
        if(ishappy(input.value))
        {
h1.innerText=`${input.value} is a happy num`
        }
        else{
h1.innerText=`${input.value} is not a happy num`

        }
    }
});
h1.innerText="hi";


function armstrong(no) {
    // let no=153;
    let count=0;
    let no1=no;
    let copy=no;
    let sum=0;
    let boo=false;
    while (no!=0) {
        no=parseInt(no/10);
        count++;
    }
    while (no1!=0) {
        let rem=parseInt(no1%10);
        sum=sum+Math.pow(rem,count);
        no1=parseInt(no1/10);
    }
    if (copy==sum) {
        // console.log(`${copy} is Armstrong number`);
        // return true;
        boo=true;
    } else {
        // console.log(`${copy} is not a Armstrong number`);
        // return true;
        boo=false;
    }
    return boo;
}
console.log(armstrong(153)
);// armstrong(154);

function ishappy(no) {
    let sum=0;
    while (no>0) {
        let rem=parseInt(no%10);
        sum+=rem*rem;
        no=parseInt(no/10);
    }    
    if (sum===1||sum===7) {
        return true;
    }
    return ishappy(sum);
}

