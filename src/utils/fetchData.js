let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true); // el true indica que queremos que se maneje de forma asincrona.
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200 // aqui llamamos a un if ternario, el anterior if ternario es como si estuvieramos escribiendo if(xhttp.status === 4){
          ? // }
            resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error ", url_api));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData; // usamos module.exports por que node no utiliza include y export

// fetchData(API, function (error1, data1) {
//   if (error1) {
//     return console.error(error1);
//   }
//   fetchData(API + data1.results[0].id, function (error2, data2) {
//     if (error2) {
//       return console.log(error2);
//     }
//     fetchData(data2.origin.url, function (error3, data3) {
//       if (error3) {
//         return console.error(error3);
//       }
//       console.log(data1.info.count);
//       console.log(data2.name);
//       console.log(data3.dimension);
//     });
//   });
// });
