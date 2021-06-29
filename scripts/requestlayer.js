const host = "http://127.0.0.1:8080";

function generateSetNameRequest(nameToSend){
    const endPoint = "/setName";
try{
    fetch(host+endPoint, {
    method: "POST",
    body: JSON.stringify(nameToSend),
    headers: {"Content-type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Headers": "*"}
    })
    .then(response => response.json()) 
    .then(json => setNameAndId(json)); 
}
catch(err){ 
    console.log(err)
}
}