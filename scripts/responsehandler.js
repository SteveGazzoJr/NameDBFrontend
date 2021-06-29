function setNameAndId(nameAndIdPair) {
  let nameOutDiv = document.getElementsByName("setNameReturnedInfo");
  nameOutDiv[0].innerText = `Name: ${nameAndIdPair.name} ID: ${nameAndIdPair.id}`;
}

function setName(setName) {
  let nameOutDiv = document.getElementsByName("getNameReturnedInfo");
  nameOutDiv[0].innerText = `Name: ${setName.name}`;
}

function setId(setId) {
  let nameOutDiv = document.getElementsByName("getIdReturnedInfo");
  nameOutDiv[0].innerText = `ID: ${setId.id}`;
}

//add code here to clear the divs
