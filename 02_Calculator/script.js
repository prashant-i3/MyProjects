function display(val){
    document.getElementById('textarea').value += val //here we are not overright the value 

}

function calculate(){
    var text = document.getElementById('textarea').value
    var answer = eval(text)
    document.getElementById('textarea').value = answer
}

function clr(){
    document.getElementById('textarea').value = ''
}