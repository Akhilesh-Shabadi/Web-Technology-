let btns=document.querySelectorAll("button")
let storage=document.querySelector("#storage")
let inp=document.querySelector("input")

btns[0].addEventListener("click",()=>{
    if(storage.value==="localStorage"){
        localStorage.setItem("userName",inp.value)
    
    }
    else{
        sessionStorage.setItem("userName",inp.value)
    }
})

btns[1].addEventListener("click",()=>{
    if (storage.value==="localStorage") {
        let ans=localStorage.getItem("userName")
        alert(`${ans} is the value`)
    } else {
        let ans=sessionStorage.getItem("userName")
        alert(`${ans} is the value`)
    }
})

btns[2].addEventListener("click",()=>{
    if (storage.value==="localStorage") {
        let ans=localStorage.removeItem("userName")
        
    } else {
        let ans=sessionStorageStorage.removeItem("username")
        // alert(``)
        
    }
})

btns[3].addEventListener("click",()=>{
    if (storage.value==="localStorage") {
        let ans=localStorage.clear("userName")
        
    } else {
        let ans=sessionStorage.clear("username")
        
    }
})