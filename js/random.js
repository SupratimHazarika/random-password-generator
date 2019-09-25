var keyList ='abcdefghijklmnopqrstuvwxyz!@#$%&*';
var tmp =''

function generatePass(plength){
    tmp =''
    for(i=0 ; i<plength ; i++){
        tmp += keyList.charAt(Math.floor(Math.random()*keyList.length))
    }
    return tmp;   
}

function populateform(enterLength){
    
    document.passGen.output.value = generatePass(enterLength)
    
}