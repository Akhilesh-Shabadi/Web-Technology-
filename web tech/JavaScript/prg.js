// function pallindrome(num) {
//     // let num;
//     let rev=0;
//     let copy=num;
//     while (num!=0) {
//         let rem=parseInt(num%10);
//         rev=parseInt(rev*10+rem);
//         num=parseInt(num/10);
//     }
//     if (rev==copy) {
//         console.log(`${copy} is pallindrome`);
//     } else {
//         console.log(`${copy} is not pallindrome`);
//     }
// }
// pallindrome(12231);

// function factorial(numb1) {
//     // let num=5;
//     let fact=1;
//     let n=numb1
//     while (numb1!=0) {
//         fact=fact*numb1;
//         numb1--;
//     }
//     console.log(`${fact} factorial of ${n}`);
// }
// factorial(5);

// function prime(num) {       
//     // let num=9;
//     let a=2;
//     let flag=true;
//     while (a<num) {
//         if (num%a==0) {
//             flag=false;
//         }
//         a++;
//     }
//     if (flag) {
//         console.log(`${num} is prime`);
//     } else {
//         console.log(`${num} is not prime`);
//     }
// }
// prime(7);

// function powerofnumber(base,pow) {
//     // let base=3;
//     // let pow=2;
//     let ans=1;
//     while (pow!=0) {
//         ans=ans*base;
//         pow--;
//     }
//     console.log(ans);
// }
// powerofnumber(3,3);

// function sumofdigit(num) {
//     // let num=132;
//     let sum=0;
//     let nu=num;
//     while (num!=0) {
//         let rem=parseInt(num%10);
//         sum=sum+rem;
//         num=parseInt(num/10);
//     }
//     console.log(`${sum} is sum of ${nu} each digit`);
// }
// sumofdigit(1345);

// function countofdigit(no) {
//     // let no=342;
//     let count=0;
//     while (no!=0) {
//         let rem=parseInt(no%10);
//         count++;
//         no=parseInt(no/10);
//     }
//     console.log(count);
// }
// countofdigit(4252);

// function try1(i) {
//     // let i=73;
//     let sum=0;
//     let ii=i
//     while (i!=0) {
//         let rem=parseInt(i%10);
//         sum=sum+rem;
//         i=parseInt(i/10);
//     }
//     if (sum===10) {
//         console.log(`10 is the sum of ${ii}`);
//     } else {
//         console.log(`10 is not the sum of ${ii}`);
//     }
// }
// try1(59);

// function power1(x,y){
//     var sum=0;
//     var i=0;
//     while(i<y){
//         sum=sum*x;
        
//     }
//     return sum
// }

// function armstrong(no) {
//     // let no=153;
//     let count=0;
//     let no1=no;
//     let copy=no;
//     let sum=0;
//     while (no!=0) {
//         no=parseInt(no/10);
//         count++;
//     }
//     while (no1!=0) {
//         let rem=parseInt(no1%10);
//         sum=sum+Math.pow(rem,count);
//         no1=parseInt(no1/10);
//     }
//     if (copy==sum) {
//         console.log(`${copy} is Armstrong number`);
//     } else {
//         console.log(`${copy} is not a Armstrong number`);
//     }
// }
// armstrong(154);

// function happynumber() {
//     let no=13;
//     let sum=0;
//     while (no!=0) {
//         let rem=parseInt(no%10);
//         sum=sum+rem*rem;
//         no=parseInt(no/10);
//     }
//     if (sum>9) {
//         while (no!=0) {
//             let rem=parseInt(no%10);
//             sum=sum+rem*rem;
//             no=parseInt(no/10);
//         }
//     } else if(sum==1||sum==7) {
//         console.log(`${no} is Happy number`);
//     } else {
//         console.log(`${no} not Happy number`);
//     }
// }
// happynumber();

// let n1 = 13;
// var sum = 0;
// while (n1>9) {
//     n1=happynumber(n1)
// }
// function happynumber(n1) {
//     while (n1!=0) {
//         let rem=parseInt(n1%10);
//         sum=sum+rem*rem;
//         n1=parseInt(n1/10);
//         if(n1>9)
//         return n1;
//         else
//         return sum;
//     }
// }
// if (n1==1||n1==7){
//     console.log("happy number");
// } else {
//     console.log("not happy number");
// }

// function ishappy(no) {
//     let sum=0;
//     while (no>0) {
//         let rem=parseInt(no%10);
//         sum+=rem*rem;
//         no=parseInt(no/10);
//     }    
//     if (sum===1||sum===7) {
//         return true;
//     }
//     return ishappy(sum);
// }
// console.log(ishappy(14));

// function strong(no) {
//     // let no=145;
//     let sum=0;
//     let copy=no;
//     while (no!=0) {
//         let rem=no%10;
//         let fact=1;
//        for (let index =rem; index>=1; index++) {
//             fact=fact*index;
//         }
//         sum+=fact;
//         no=no/10;
//     }
//     console.log(sum);
//     // return sum;
//     if (copy===sum) {
//         console.log("Strong number");
//     } else {
//         console.log("Not a Strong number");
//     }
//     // return sum;
// }
// console.log(strong(145));