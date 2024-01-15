
let buttons = document.getElementById("buttons");
let li = buttons.querySelectorAll("li");
let result = document.getElementById("result");

for(let i = 0; i < li.length; i++){
    li[i].addEventListener("click", function(){
        

        if(this.innerHTML == "="){
           result.innerHTML = eval(result.innerHTML);
        }
        else if(this.innerHTML == "÷"){
            result.innerHTML += "/";
        }
        else if(this.innerHTML == "×"){
            result.innerHTML += "*";
        }
        else if(this.innerHTML == "C"){
            result.innerHTML = "";
        }
        else{
            result.innerHTML += this.innerHTML
        }

    })
}