function increment(){

    var number = Number(document.getElementById('number').innerHTML)      //to take the value from the 'h1' tag we have to write ".innerHTML" 
    // (and also the vale we got is in string format so we have to  change it in number )
    document.getElementById('number').innerHTML = number+1  

}

function decrement(){

    var number = Number(document.getElementById('number').innerHTML) 
    document.getElementById('number').innerHTML = number-1

}

// function decrement(onclick,()  => {
//     var number = Number(document.getElementById('number').innerHTML) 
//     document.getElementById('number').innerHTML = number-1
// })

function nutral(){

    document.getElementById('number').innerHTML = 0

}