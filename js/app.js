let url = "https://api.emailvalidation.io/v1/info?apikey=ema_live_UZ5hY1ypo6hMFRQF6JVpTDtx762pXDKpUTIFzsfJ&email="
let inp = document.querySelector(".input")
let btn = document.querySelector(".button-submit")
let div = document.querySelector(".resCont")
let img =  document.createElement("img")
img.setAttribute("src","img/loading.svg")
// let p = document.querySelector("result")

btn.addEventListener("click",async ()=>{
    div.innerHTML = ""
    // inp.value = ""
    div.appendChild(img)    
    event.preventDefault()
    let returnData = await emailTest()
    dataAdd(returnData)
    // 
})

async function emailTest() {
    try{
        let email = inp.value
        let response = await axios.get(url+email)
        return response.data 
    }catch(e){
        return "Random Error Occured"
    }
}

function dataAdd(data){
    for(key of Object.keys(data)){
        if (data[key] !== ""){
            let para = document.createElement("p")
            para.innerText = `${key} :  ${data[key]}`
            para.setAttribute("class","result")
            div.appendChild(para)
            if (key == "state"){
                para.style.color = "red"
            }
            if (key == "email"){
                para.style.color = "red"
            }
        }
        
        
    }
    img.remove()
}



