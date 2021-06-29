//TODO: if divs are populated and response is 404 call responsehandler to clear divs

const host = "http://127.0.0.1:8080";

function generateSetNameRequest(nameToSend) {
  const endPoint = "/setName";
  try {
    fetch(host + endPoint, {
      method: "POST",
      body: JSON.stringify(nameToSend),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((response) => response.json())
      .then((json) => setNameAndId(json));
  } catch (err) {
    console.log(err);
  }
}

function generateGetIdByNameRequest(nameToSend) {
  const endPoint = "/getIdByName";
  try {
    fetch(host + endPoint, {
      method: "POST",
      body: JSON.stringify(nameToSend),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((response) => response.json())
      .then((json) => setId(json));
  } catch (err) {
    console.log(err);
  }
}

function generateGetNameByIdRequest(idToSend) {
  const endPoint = "/getNameById";
  try {
    fetch(host + endPoint, {
      method: "POST",
      body: JSON.stringify(idToSend),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((response) => response.json())
      .then((json) => setName(json));
  } catch (err) {
    console.log(err);
  }
}
