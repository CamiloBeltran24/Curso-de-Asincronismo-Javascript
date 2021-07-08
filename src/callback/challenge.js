// xmlhttprequest
// es un objeto dentro de javascript que nos permite hacer peticiones a algun serivicio en la Nube. para instalar este es necesario instalar el siguiente comando desde la consola.
// npm install xmlhttprequest --save

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true); // indicamos el tipo de metodo para hacer la peticion en este caso GET, el link de la url a la que queremos acceder y como tercer valor true o false con este indicamos si queremos que se maneje de forma asincrona o no.
  xhttp.onreadystatechange = function (event) {
    // es buena practica definir el evento aunque no lo usemos
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText)); // el primer parametro que se envia a un callback es un error, en este caso null, por que no queremos enviar ningun error. y parseamos en la respuesta pues estamos recibiendo un texto plano para ello usamo JSON.parse() y le pasamos como paramtero la respuesta, como buena practica es mejor enviar el error en el else
      } else {
        const error = new Error("Error " + url_api);
        return callback(error, null); // en este momento SI estamos pasando el error creado y null por que no estamos enviado ningun resultado de algo que se desencadeno
      }
    }
  };
  xhttp.send(); // ejecucion se la peticion
}

fetchData(API, function (error1, data1) {
  if (error1) {
    return console.error(error1);
  }
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) {
      return console.log(error2);
    }
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) {
        return console.error(error3);
      }
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
