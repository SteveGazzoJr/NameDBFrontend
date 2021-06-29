function setNameAndId(nameAndIdPair){
    let nameOutDiv = document.getElementsByName('returnedInfo');
    nameOutDiv[0].innerText = `Name: ${nameAndIdPair.name} ID: ${nameAndIdPair.id}`
}