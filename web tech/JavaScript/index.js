// // 1
// console.log("hi")
// console.log(10)
// console.log(10+10)
// console.log(10-10+"hi")
// // 2
// document.write("hi")
// document.writeln("hello")
// document.write("hey")
// // 3
// alert("wellcome to browser")
// console.log(1+"1")
// console.log(1-"1")
// console.log(1/2)
// console.log(1/"hi")
// console.log(1+10+10+12*2+"1"-2)
// console.log(1/10)
// console.log(1/0)
// console.log(1+20*2-2/4+(4+3)+3/6*5+1*0+1+3)
// // 4
// confirm("are you 18+")
// var resp=confirm("are you 18+")
// if (resp==true)
// {
//     alert("welcome to the webpage")
// } else {
//     alert("go and watch pogo")
// }
// // 5
// prompt("enter your age")
// var age=prompt("enter your age")
// if(age>18){
//     alert("welcome to the webpage")
// } else {
//     alert("not valid age")
// }
// // 6
// var num=10;
// var num1=20;
// console.log(num+num1);
// // 7.
// console.log(num);
// var num=12;
// // 8.
// var a=Number(prompt("enter number1"));
// var b=Number(prompt("enter number2"));
// var c=a+b;
// alert(c);
// // 9.
// var a=10;
// var b=6;
// var c=a+b;
// console.log(c);
// primitive data type
// let a=12;   // 1.
// let b=10.5;
// console.log(a);
// console.log(b);
// console.log(typeof a);
// console.log(typeof b);
// let num1=10;    // 2.
// let num2=3;
// console.log(num1/num2);
// console.log(parseInt(num1/num2));
// console.log(parseFloat(num1/num2));
// let res=145.89; // 3.
// console.log(res);
// console.log(res.toFixed(2));
// console.log(res.toFixed(5));
// let res=145.89;     // 4.
// console.log(res);
// console.log(res.toPrecision(4));
// let res=145.89;     // 5.
// console.log(res);
// let strres=res.toString();
// console.log(strres);
// console.log(typeof strres);
// note
// var num3=15;    // 1.
// let num4=0;
// let res=num3/num4;
// console.log(res);
// var num5=-15;   // 2.
// let num6=0;
// let res1=num5/num6;
// console.log(res1);
// NaN
// console.log(12-"hi");
// var num=Number("hello");
// console.log(num);
// console.log(typeof NaN);

//String
// 1. Double quotes ("")
// let str="Rajesh"
// console.log(str);
// console.log(typeof str);
// 2. Single quotes ('')
// let str='Raj';
// console.log(str);
// console.log(typeof str);
// 3. Back tick (``)
// let n=3000;
// let b=18;
// let deduc=(n*b)/100;
// let final=n-b;
// console.log("ur sal is" +n+100+"and the deduction is" +deduc+"final sal is"+final);
// console.log(`ur sal is ${n+100} and the deduction is ${deduc} final sal is ${final}`);

// String method 
// 1.length (property)
// let str="Rajesh is a good boy";
// console.log(str.length);
// console.log(str[0]);
// console.log(str[20]);
// console.log(str[str.length-1]);
// console.log(str.charAt(0));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charCodeAt(1));
// // console.log(string.fromcharcode(65));
// console.log(str.indexOf("a"));
// console.log(str.indexOf("a",2));
// console.log(str.indexOf("z"));
// let email="mr abc@gmail.com";
// console.log(email.endsWith(".com"));
// console.log(email.endsWith("gmail"));
// console.log(email.startsWith("mr "));
// console.log(email.startsWith("mrs "));
// console.log(email.includes("@"));
// console.log(email.includes("#"));
// console.log(email.includes("gmail"));
// let ss="   raj kumar  ";
// console.log(ss);
// console.log(ss.length);
// console.log(ss.trimStart().length);
// console.log(ss.trimEnd().length);
// Slice 
// let r=" rajesh";
// console.log(r[-1]);
// console.log(r.slice(1));
// console.log(r.slice(1,5));
// console.log(r.slice(-5,-1));
// console.log(r.slice(-1,3));
// console.log(r.slice(3,-1));
// console.log(r.slice(1,-6));
// console.log(r.slice(3,-3));
// substring
// let e="rajesh";
// console.log(e.substring(1,5));
// console.log(e.substring(-2,-5));
// console.log(e.substring(-2,3));
// console.log(e.substring(5,3));
// substr
// let q="rajesh";
// console.log(q.substr(2,3));
// Replace and ReplaceAll
// let w="Good morning rajesh and good morning rakesh";
// console.log(w.replace("morning","evening"));
// console.log(w.replaceAll("morning","evening"));
// Split 
// let str="rajesh is a good boy";
// console.log(str.split(""));
// console.log(str.split(" "));
// console.log(str.split("").reverse());
// console.log(str.split(" ").reverse());
// console.log(str.split("").reverse().join(""));
// console.log(str.split(" ").reverse().join(""));
// console.log(str.split("").reverse().join(" "));
// console.log(str.split(" ").reverse().join(" "));
// repeat
// let y=5;
// let str=y.toString()
// console.log(Number (str.repeat(4)));

// Boolean
// let bool=true;
// console.log(bool);
// console.log(typeof bool);
// let boo=false;
// console.log(boo);
// console.log(typeof boo);
// console.log(1<2);
// console.log(1==1);
// if(false){
//     console.log("i am a if block excute only if the value is true");
// } else {
//     console.log("i am a else bolck");
// }

// undefined
// let somevalue;
// console.log(somevalue);
// let value=undefined;
// console.log(typeof value);
// console.log(value);

// null
// let somevalue=null;
// console.log(somevalue);
// console.log(typeof somevalue);

// type casting implicitly
// console.log(10+"hi");
// console.log(10+"20");
// console.log(10-"false");
// console.log(10-true);
// console.log(10+null);
// console.log(10+undefined);
// console.log(10*"20");
// console.log(10+"20");
// console.log(10/"20");
// type casting explicitly
// console.log(Number(10));
// console.log(Number("-20"));
// console.log(Number("10"));
// console.log(Number("zero"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number("hi"));
// Boolean explicitly
// console.log(Boolean(10));
// console.log(Boolean(Infinity));
// console.log(Boolean(-Infinity));
// console.log(Boolean(2/0));
// console.log(Boolean(101));
// console.log(Boolean(0.01));
// console.log(Boolean(0.0));
// console.log(Boolean(-0.0));
// console.log(Boolean(NaN));
// console.log(Boolean("hi"));
// console.log(Boolean("true"));
// console.log(Boolean("false"));
// console.log(Boolean("0"));
// console.log(Boolean(" "));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// BIgInt
// let bNum=BigInt(12);
// let bNum1=13n;
// console.log(bNum);
// console.log(bNum1);
// console.log(typeof bNum);
// console.log(typeof bNum1);
// let num=BigInt(12.6);
// console.log(num);
// let num=10;
// let bNum=20n;
// console.log(num+bNum);

// Symbol
// let sval=Symbol(10);
// console.log(sval);
// console.log(typeof sval);
// let ss=Symbol(20);
// let se=Symbol(20);
// console.log(ss===se);

// Function

// 1.Named function
// function add() {
//     let num1=10;
//     let num2=20;
//     let sum=num1+num2;
//     console.log(sum);
// }
// add();
// let qnum=10;
// function multiply(x,y) {
//   let num1=x;
//   let num2=y;
//   let ans=num1*num2;
//   return ans;  
// }
// console.log(multiply(qnum,20));

// 2.Anonymous function
// function (x,y){
//     console.log(x,y);
//     console.log("i am a anonymous function");
// }

// 4.Function Expression
// var test=function (x,y) {
//     console.log(x,y);
//     console.log("i am a anonymous function");
//     console.log("i am a first class function");
//     console.log("i am assigned as value inside a variable");
// }
// test(3,4);

// 5.Immediate invoke function expression
// var test=(function (){
//     console.log("i am a IIFE function");
// })();
// test();

// ex
// var num=100;
// let num2=200;
// if (true) {
//     var inum=300;
//     let inum2=400;
//     console.log(inum,inum2);
//     console.log(num2,num);
// }
// function add() {
//     var anum=500;
//     console.log(anum);
//     console.log(num2);
// }
// console.log(num2);
// add();
// console.log(inum);
// console.log(inum2); // error block scope

// 6. Nested function
// function test() {       // 1.
//     add();  // hoisting
//     console.log("i am a test");
//     function add() {
//         console.log("i am a add function");
//     }
// }
// test();
// let bus ="red bus";
// function parent() {
//     let car="audi";
//     let watch="HMT";
//     console.log(watch);
//     console.log(car);
//     function child() {
//         let bike="duke";
//         console.log(bike);
//         function gc() {
//             let cycle="hero";
//             console.log(cycle);
//             console.log(car);
//             console.log(bus);   // lexical scope
//         }
//         // gc();
//         return gc;
//     }
//     // child();
//     return child;
// }
// // parent();
// parent()()();

// 7 and 8. Higher order function and Nested function
// function HOF(cb) {
//     cb();
//     console.log("i am a receving another function");
// }
// function add() {
//     console.log("i am a passed as a argument");
// }
// HOF(add);

// 9. Arrow function
// let ar=()=>{
//     console.log("arrow funtion");
// }
// ar();
// let arr=x=>{console.log(x+10);}
// arr(4,5,6);
// let arrow=x=>x+10;console.log(arrow(4,5,6));

//  10. genertor function
// let num1=1;
// function *generatenum() {
//     while(true){
//         yield num1;
//         num1++;
//     }
// }
// let generatorobj=generatenum();
// console.log(generatorobj.next().value);  
// console.log(generatorobj.next().value);  
// console.log(generatorobj.next().value);  
// console.log(generatorobj.next().value);  
// console.log(generatorobj.next().value);  


// 1st mock {

// console.log("Starts");
// var a="20";
// var b=30;
// var c=null;
// function add(x,y) {
//     return x+y-c;
// }
// add(25,10);
// console.log(d);
// console.log(a+b-b);
// console.log(add(10,20));
// console.log(b);

// console.log("10"-10+"25"+2/10+"200"-10);
// console.log(typeof ("10"-10+"25"+2/10+"200"-10));
// console.log(null==undefined);
// console.log("10"==false);
// console.log(10===10);
// function add(m,n) {
//     console.log(m-n);
//     sub(m,n);
// }
// function sub(x,y) {
//     console.log("sub"+(x-y));
// }
// add(5,6);
// console.log("end");

// }

// {
// var a=12;

// function test() {
//     // console.log(a);
//     var a=10;
//     console.log(a);
// }
// // test();
// console.log(a);
// console.log(typeof test());
// console.log(typeof test);

// if (80) {
//     console.log(a);
//     let a=9;
//     console.log(a);
// }
// console.log(a);
// }

// Array
// // one way to decleare array.
// let arr=[13,"hello",null,true,10n,Symbol,undefined,()=>console.log("i am fun"),["i am a array data"]]
// console.log(arr);
// // second way to decleare array.
// let a=new Array(13,"hello",null,true,10n,Symbol,undefined,()=>console.log("i am fun"),["i am a array data"]);
// console.log(a);

// let arr=[];
// arr[0]=10;
// arr[2]=30;
// console.log(arr);
// console.log(arr[1]);
// console.log(typeof arr);

// let arr=new Array(12);
// console.log(arr);

// Array methods

// 1.length (property)
// let arr=[1,2,3,4];
// console.log(arr.length);

// 2.push()
// let a=[1,2,3]
// a.push(4,5,6);
// console.log(a);

// 3.pop()
// let a=[1,2,3];
// a.pop();
// console.log(a);

// 4.unshift()
// let b=[1,2,3];
// b.unshift(4,5,6);
// console.log(b);

// 5.shift()
// let c=[1,2,3];
// c.shift();
// console.log(c);

// 6.inculdes()
// let d=[1,2,3];
// console.log(d.includes(2));
// console.log(d.includes(20));

// 7.indexof()
// let arr=[1,2,3,4,5,3,6,3];
// console.log(arr.indexOf(3));
// console.log(arr.indexOf(3,3));
// console.log(arr.indexOf(4,4));
// console.log(arr.indexOf(100));

// 8.toString()
// let s=[1,2,3,4,3];
// let d=[100,200,300];
// console.log(s.toString());

// 9.concat()
// let f=[1,2,3,4,3];
// let g=[100,200,300];
// console.log(f+g);
// console.log(f.concat(g));

// 10.join()
// let h=[1,2,3,4,3];
// let j=[100,200,300];
// console.log(j.join(""));
// console.log(h.join(" "));

// 11.reverse()
// let r=[1,2,3,4,3];
// console.log(r.reverse());

// 12.slice()
// let y=[1,2,3,4,3];
// console.log(y.slice(1,4));

// 13.splice()
// let k=[1,2,3,4,3];  // adding
// k.splice(2,0,"hi","hello");
// k.splice(3,0,"hi","hello");
// console.log(k);
// let l=[1,2,3,4,3];   // deleting
// console.log(l);
// l.splice(2,2);
// console.log(l);
// // l.splice(0,2);
// // console.log(l);
// let abc=[1,2,3,4,3];
// abc.splice(2,2,300,400);
// console.log(abc);

// ForEach method
// let ar=[12,19,100];
// let ansforeach=ar.forEach((ele,index,currentarr)=>{
//     console.log(ele+10);
// })
// console.log(ansforeach);

// Map method
// let ar=[12,19,100];
// let ansmap=ar.map((ele,index,currentarr)=>{
//     console.log(ele+10);
//     return ele+10;
// })
// console.log(ansmap);

// Filter method
// let ar=[12,19,100];
// let ansfilter=ar.filter((ele,index,currentarr)=>{
//     console.log(ele+10);
//     return ele%2==0;
// })
// console.log(ansfilter);

// Reduce methods
// let ar=[12,19,100];
// let ansreduce=ar.reduce((iv,ele,index,currentarr)=>{
//     return ele+iv;
// },1000);
// console.log(ansreduce);

// Objects
// decleartion (literal way)
// let stud={};
// console.log(stud);
// console.log(typeof stud);
// // intializing 
// stud.name1="raj";
// stud.age=19;
// stud.skills=["html","css","js"];
// console.log(stud);
// // accessing
// console.log(stud.name1);
// // differiate b/w array and object
// let ar=[12,18];
// console.log(typeof ar);
// console.log(Array.isArray(stud));
// console.log(Array.isArray(ar));

// 1. Object.keys()
// let stud={
//     name1:"raj",
//     skills:["html","css","js"],
//     behaviour:()=>{console.log("as a studrent");},
//     id:10,
//     fname:"rajappa",
//     mname:"rajamma"
// }
// console.log(Object.keys(stud));

// 2. Object.values()
// let stud={
//     name1:"raj",
//     skills:["html","css","js"],
//     behaviour:()=>{console.log("as a student");},
//     id:10,
//     fname:"rajappa",
//     mname:"rajamma"
// }
// console.log(Object.values(stud));

// 3. Object.entries()
// let stud={
//     name1:"raj",
//     skills:["html","css","js"],
//     behaviour:()=>{console.log("as a student");},
//     id:10,
//     fname:"rajappa",
//     mname:"rajamma"
// }
// console.log(Object.entries(stud));

// 4. Object.froze()
// let stud={
//     name1:"raj",
//     skills:["html","css","js"],
//     behaviour:()=>{console.log("as a student");},
//     id:10,
//     fname:"rajappa",
//     mname:"rajamma"
// }
// stud.sname="rajakka";
// stud.pn=102;
// console.log(stud);
// console.log(Object.freeze(stud));
// stud.h=5;
// console.log(Object.isFrozen(stud));

// 5. Object.seal()
// let stud={
//     name1:"raj",
//     skills:["html","css","js"],
//     behaviour:()=>{console.log("as a student");},
//     id:10,
//     fname:"rajappa",
//     mname:"rajamma"
// }
// stud.sname="rajakka";
// console.log(stud);
// console.log(Object.seal(stud));
// stud.h=5;
// stud.pn=102;
// console.log(Object.isSealed(stud));

// Math
// console.log(Math.PI);
// console.log(Math.sin(0));
// console.log(Math.sin(30));
// console.log(Math.cos(0));
// console.log(Math.tan(0));
// console.log(Math.cbrt(27));
// console.log(Math.sqrt(64));
// console.log(Math.pow(2,4));
// console.log(Math.ceil(1.001));
// console.log(Math.floor(1.999));
// console.log(Math.round(1.999));
// console.log(Math.round(1.001));
// console.log(Math.random());
// console.log(Math.max(23,6,7,103,5,6));
// console.log(Math.min(23,6,7,-5,6));

// let otp=Math.floor(Math.random()*9000+1000);
// console.log(otp);
// alert("your otp num is "+ otp);
// let ansotp=Number(prompt("enter your otp"));
// if(otp===ansotp){
//     alert("succesfully logged in");
// } else {
//     alert("otp miss match");
// }

// Date Object
// let currDate=new Date();
// console.log(currDate);
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDay());
// console.log(currDate.getHours());
// console.log(currDate.getMinutes());
// console.log(currDate.getSeconds());
// console.log(currDate.getMilliseconds());
// currDate.setFullYear(2000);
// console.log(currDate);
// console.log(currDate.getFullYear());

// Timer function
// let stoid=setTimeout(()=>{
//     console.log("i will be executed once after some time Delay");
// },1000);
// let stiid=setInterval(()=>{
//     console.log("i will be executed repeatdly at the given time interval");
// },1000);
// setTimeout(()=>{
//     clearInterval(stiid);
//     clearTimeout(stoid);
// },5000);

// BOM(Browser Object Model)
// console.log(window.history);
// console.log(window.screen);
// console.log(window.navigator);
// console.log(window.location);





// function test(){
// let h1=document.querySelector("h1");
// let table=document.createElement("table");
// let tr1=document.createElement("tr");
// let tr2=document.createElement("tr");
// let td1=document.createElement("td");
// let td2=document.createElement("td");
// let td3=document.createElement("td");
// let td4=document.createElement("td");
// td1.innerText=1;
// td2.innerText=2;
// td3.innerText=3;
// td4.innerText=4;
// tr1.append(td1,td2);
// tr2.append(td3,td4);
// table.append(tr1,tr2);
// h1.append(table);
// table.style.border="2px solid red";
// }

// let but=document.querySelector("button");
// but.innerText="click";
// but.addEventListener("click",test);

// let nav=document.createElement("nav");
// document.body.append(nav);
// nav.style.border="2px solid red";
// nav.style.height="100px";
// let data=["HOME","ABOUT","PRODUCT","LOGIN","SIGNUP"];
// for(let i=0;i<data.length;i++){
//     let a=document.createElement("a");
//     a.setAttribute("href","#");
//     a.innerText=data[i];
//     nav.append(a);
// }
// nav.id="nav-parent";
// console.log(nav);
// nav.style.display="flex";
// nav.style.justifyContent="space-evenly";
// nav.style.alignItems="center";

// function test(a,b,c) {
//     console.log(a*b*c);
// }
// test(5,5,5);
// // caruly function
// function test1(a) {
//     function test2(b) {
//         function test3(c) {
//             return a*b*c;
//         }
//         return test3;
//     }
//     return test2;
// }
// console.log(test1(5)(5)(5));

// let h2s=document.getElementsByTagName("h2");
// let h1=document.querySelector("h1");
// let n=0;
// let ans=document.getElementsByTagName("hi")
// h2s[0].addEventListener("click",()=>{
//     n++;
//     h1.innerText=n
//     color(n)
// })
// h2s[1].addEventListener("click",()=>{
//     n--;
//     h1.innerText=n
//     color(n)
// })
// function color(ans){
// if (ans>0) {
//     document.body.style.backgroundColor="red";
// } else if (ans===0) {
//     document.body.style.backgroundColor="blue"
// } else {
//     document.body.style.backgroundColor="green"
// }}


// Promise
console.log(1);
console.log(12);
console.log(3);

let myPromise=new Promise((resolve,reject)=>{       // new Promise((resolve,reject)=>{})
    resolve("i am a resolve function");
    
    add(2,4)
}).then((one)=>{
    console.log(one);
    return "let go for movies";
}).then((two)=>{
    console.log(two);
    return "let go for lunch";
}).then((three)=>{
    console.log(three);
    return "lets go to our home";
}).then((four)=>{
    console.log(four);
}).catch((e)=>{
    console.log(e);
})
console.log(4);
console.log(0);
console.log(9);
function add(a,b) {
    let d=a+b;
    console.log(d);
}