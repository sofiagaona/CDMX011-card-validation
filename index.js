import validator from "./validator.js";

const cardRegex = /^\d+$/;

const button = document.getElementById("button");
button.addEventListener("click", ValueCard);

const reload = document.getElementById("reload");
reload.addEventListener("click", reloadPage);

function reloadPage() {
  window.location.reload();
}

function ValueCard() {
  const inputVal = document.getElementById("numCard").value; // se guarda el valor del input
  //const messageVal = document.getElementById("message"); //id del parrafo donde se enviara el mensaje a pantalla
  //const messageProvCard = document.getElementById("provCard"); //Id del parrafo donde se motrara el mensaje del proveedor de la tarjeta

  const validCard = validator.isValid(inputVal); //guardamos el valor que retorna validator.isValid()
  const fourDigits = validator.maskify(inputVal); // guardamos el valor que retorna validator.maskify()
  const msgeUser = messageUser(validCard); // guardamos lo evaluado en messageUser seria el mensaje valido o invalido
  const cardProvider = validator.cardProV(inputVal);
  const messageDiv = document.getElementById("mssageUser");
  const parrafo = document.createElement("p"); // crea el elemento parrafo del html

  if (cardRegex.test(inputVal)) {
    //validamos la exp. regular si se cumple

    var textoParrafo = document.createTextNode(
      "La tarjeta  " + fourDigits + msgeUser
    ); // se crea el texto
    parrafo.appendChild(textoParrafo); //Agrega el texto creado al elemento parrafo
    parrafo.getElementsByTagName(messageDiv.appendChild(parrafo)); // busca el elemento div(padre) e inserta el parrafo creado con su texto

    var messagePrvCard = parrafo.appendChild(
      document.createTextNode("El proveedor de su tarjeta es: " + cardProvider)
    ); //Agrega texto al parrafo creado
    var mssageProvider = messageDiv.getElementsByTagName("p")[1]; // busca el primer parrafo del elemento div
    messageDiv.insertBefore(messagePrvCard, mssageProvider); //inserta el nuevo parrafo creado con el texto despues del primer parrafo del div padre
  } else {
    var messageVa = document.createTextNode(
      "La tarjeta  " +
        fourDigits +
        " es invalida, recuerda usar solo números sin espacios"
    );
    parrafo.appendChild(messageVa);
    parrafo.getElementsByTagName(messageDiv.appendChild(parrafo));
  }
}

function messageUser(validCard) {
  // esta función recibe un booleano como parametro y retorna un mensaje
  var message;
  validCard
    ? (message = " es una tarjeta VALIDA")
    : (message = " es una tarjeta INVALIDA");

  return message;
}
