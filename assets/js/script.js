let text, resp;

function codificar(){
    text = document.querySelector("#textArea").value

    if(text != "" && text.length > 0){
        resp = document.querySelector("#resp").innerHTML = btoa(text)
        
        document.querySelector("#textArea").value = "";
        text = ""
        resp = ""
    }else{
        alert("O campo não pode ser vazio!")
    }
}

function decodificar(){
    text = document.querySelector("#textArea").value

    if(text != "" && text.length > 0){
        resp = document.querySelector("#resp").innerHTML = atob(text)
        
        document.querySelector("#textArea").value = "";
        text = ""
        resp = ""
    }else{
        alert("O campo não pode ser vazio!")
    }
}