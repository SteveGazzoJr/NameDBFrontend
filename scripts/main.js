function sendSetNameRequest() {
  let nameBox = document.getElementsByName("addNameIn");

  generateSetNameRequest(nameBox[0].value);
}

function sendGetNameByIdRequest() {
  let nameBox = document.getElementsByName("idIn");

  generateGetNameByIdRequest(nameBox[0].value);
}

function sendGetIdByNameRequest() {
  let nameBox = document.getElementsByName("nameIn");

  generateGetIdByNameRequest(nameBox[0].value);
}
