function setNameAndId(nameAndIdPair) {
  let nameOutDiv = document.getElementsByName("setNameReturnedInfo");
  nameOutDiv[0].innerText = `Name: ${nameAndIdPair.name} ID: ${nameAndIdPair.id}`;
}

function setName(returnedName) {
  let nameOutDiv = document.getElementsByName("getNameReturnedInfo");
  nameOutDiv[0].innerText = `Name: ${returnedName.name}`;
}

function setId(returnedId) {
  let nameOutDiv = document.getElementsByName("getIdReturnedInfo");
  nameOutDiv[0].innerText = `ID: ${returnedId.id}`;
}

function clearNameAndId() {
  let nameOutDiv = document.getElementsByName("setNameReturnedInfo");
  nameOutDiv[0].innerText = "";
}

function clearName() {
  let nameOutDiv = document.getElementsByName("getNameReturnedInfo");
  nameOutDiv[0].innerText = "";
}

function clearId() {
  let nameOutDiv = document.getElementsByName("getIdReturnedInfo");
  nameOutDiv[0].innerText = "";
}
