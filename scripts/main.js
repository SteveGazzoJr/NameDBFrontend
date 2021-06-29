function sendSetNameRequest(){
    let nameBox = document.getElementsByName('nameIn');
    
    generateSetNameRequest(nameBox[0].value);
}