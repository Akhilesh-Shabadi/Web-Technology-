// let form=document.createElement("form");
// let fieldset=document.createElement("fieldset");
// let lengend=document.createElement("lengend");
// let label=document.createElement("label");
// let input=document.createElement("input");
// let button=document.createElement("button");
// let br=document.createElement("br");
// lengend.innerText="Signup Form";
// label.innerText="Name :";
// label[1].innerText="EMAIL :"
// button[0].innerText="RESET";
// button[1].innerText="SUBMIT";
// lengend.append(br,br,label,input,br,button);
// fieldset.append(lengend,br);
// form.append(fieldset);
// document.body.append(form);

// -------------------------------//
// let button=document.querySelectorAll("button");
// let input=document.querySelectorAll("input");
// function ind() {
//     for(let i=0;i<input.length();i++){
//         let v=input[i];
//         if(input.value==""){
//         v.style.border="2px solid red";
//     } else {
//         v.style.border="2px solid green";
//     }
//     }
// }
// ind();
// button[0].addEventListener("click",(e)=>{
//     e.preventDefault()
    
//     if(input.value==""){
//         input[0].style.border="2px solid red";
//     } else {
//         input[0].style.border="2px solid green";
//     }
// })
// addEventListener("submit",(e)=>{
//     e.preventDefault();

// })
// function call() {
    
// }
// for(let i=input[0];i<=input.length()-1;i++){
//     if (i.===0) {
//         i.style.borderBlockColor="red";
//     } else {
//         i.style.border="2px solid green"
//     }
// }
//--------------------------------------------------------------//

// ----------------validation---------------------
let username=document.querySelector("#name");
let namerror=document.querySelector(".namerror");
let email=document.querySelector("#email");
let emailerror=document.querySelector(".emailerror");
let mobile=document.querySelector("#mobile");
let numbererror=document.querySelector(".numbererror");
let dob=document.querySelector("date");
let male=document.querySelector("#male");
let female=document.querySelector("#female");
let password=document.querySelector("#password");
let passworderror=document.querySelector(".passworderror");
let confrimpassword=document.querySelector("#confrimpass");
let confirmpassworderror=document.querySelector(".confrimpasserror");
let submit=document.querySelector("#submit");
// let input=document.querySelectorAll("input");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let unval=username.value;
    let eval=email.value;
    let mval=mobile.value;
    // let dobval=dob.value;
    // let genderval1=male.value;
    // let genderval2=female.value;
    let passval=password.value;
    let cfpassval=confrimpassword.value;
    checkname(unval);
    checkemail(eval);
    checknumber(mval);
    checkpassword(passval);
    let confpass;
    if(checkpassword){
        confpass=checkconfirmpass(passval,cfpassval);
        return true;
    }
})
function checkname(nn){
    let ascifc=nn.charCodeAt(nn[0]);
    if(nn===""){
        // console.log("field need to be filled");
        namerror.innerText="field need to be filled";
    }
    else if (!((ascifc>=65 && ascifc<=90)||(ascifc>=97 && ascifc<=122))) {
        // console.log("1st character invalid");
        namerror.innerText="1st charctar invalid";
    }
    else if((nn.length<3)){
        // console.log("check name");
        namerror.innerText="name length invalid";
    }
    for(let i=0;i<nn.length;i++){
        let fullname=nn.charCodeAt(nn[i])
        if (!((fullname>=65 && fullname<=90)||(fullname>=97 && fullname<=122))){
            // console.log("invalid name it should include A-Z a-z");
            namerror.innerText="invalid name it should include A-Z a-z"
            break;
        }
    }
}
function checkemail(mm){
    if(mm===""){
        // console.log("field need to be filled");
        emailerror.innerText="field need to be filled";
    }
    else if(!(mm.includes("@"))){
        // console.log("at-the-rate (@) is missing");
        emailerror.innerText="at-the-rate (@) is missing";
    }
    else if(!(mm.endsWith(".com"))||mm.endsWith(".in")){
        // console.log("include .com or .in");
        emailerror.innerText="include .com or .in";
    } else {
        // console.log("valid email");
        emailerror.innerText="valid email";
    }
}
function checknumber(ii){
    let i2=ii.charCodeAt(ii[0]);
    if(!(i2===ii)){
        // console.log("field need to be filled");
        numbererror.innerText="field need to be filled";
    }
    // else if(!((ii[0]===9)||(ii[0]===8))){
    //     console.log("invalid number");
    // }
    else if((i2.length<10)||(i2.length>10)){
        // console.log("check number once again");
        numbererror.innerHTML="check number once again";
    }
    else {
        // console.log("valid number");
        numbererror.innerText="valid number";
    }
}
function checkpassword(pp){
    let uc=0;
    let lc=0;
    let nu=0;
    let sc=0;
    if(pp===""){
        // console.log("field need to be filled");
        passworderror.innerText="field need to be filled";
    }
    else if(pp.length<8){
        // console.log("password must contains minimum 8 characters");
        passworderror.innerText="password must contains min 8 character";
    }
    for(let i of pp){        
        let asci=i.charCodeAt();
        if(asci>=65 && asci<=90){
            uc++;
        }
        else if(asci>=97 && asci<=122){
            lc++;
        }
        else if(asci>=48 && asci<=57){
            nu++;
        }
        else {
            sc++;
        }    
    }
    // console.log(`uc -${uc}
    // lc -${lc}
    // nu -${nu}
    // sc -${sc}`);
    if(uc<1){
        // console.log("include min 1 uppercase");
        passworderror.innerText="include min 1 uppercase";
    }
    else if(lc<1){
        // console.log("include min 1 lowercase");
        passworderror.innerText="include min 1 lowercase";
    }
    else if(nu<1){
        // console.log("include min 1 number");
        passworderror.innerText="include min 1 number";
    }
    else if(sc<1){
        // console.log("include min 1 special character");
        passworderror.innerText="include min 1 special character";
    }
    else {
        // console.log("valid password");
        passworderror.innerText="valid password";
    }
}
function checkconfirmpass(pass,confirmpass){
    if(!(pass===confirmpass)){
        confirmpassworderror.innerText="password and confirm pass is not matching";
        return false;
    }
    confirmpassworderror.innerText="password and confirm password are matching";
    return true;
}