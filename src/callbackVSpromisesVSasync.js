// ================        Callbacks
// ventajas;
// nos permite garantizar una funcion que recibe otra funcion y va a ejecutarse sin ningun problema
// Son universales, es decir que corren en cualquier navegador, antiguo o nuevo.

// Desvetajas
// anidamiento de callbacks tras callbacks lo que termin convertido en el Callback Hell

// =======================   PROMESAS

// Facilmente enlazalbles, puedo enlazar diferentes .then haciendo uso de return, para enterder esto ver el archivo challenge dentro de la campeta de promesas
// Es poderoso, nos permite tener una gran capacidad de trabajr con asincronismo.

// Desventajas
// No maneja excepciones
// Es propenso a tener errores si no hacemos los debidos retornos de la data en cada .then
// es transpilable es decir que para que pueda funcionar en navegadores antiguos es necesario pasar el codigo por compiladores como babel

// ASYNC y AWAIT
// Ventajas
// podemos implementar try y catch para el manejo de excepciones
// Mas facil de leer y mayor comprension de como suceden las cosas dentro del asincronismo.

// Desventajas
// Tenemos que esperar por cada uno de los llamados suceda.
// Tambien requiere de pasar el codigo por un traspilador como babel.
