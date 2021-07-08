const validator = {
  isValid(creditCardNumber) { //Esta funciòn recibe un string y retorna un booleano

    let arrayCardNumber = creditCardNumber.split("").reverse(); // convertimos el string en array con el metodo split e invertimos el string con reverse


    var valCard = valueCard(arrayCardNumber);
    return (valCard)

  },
  maskify: function (creditCardNumber) { // Esta función recibe un string y retorna un array modificado
    let arrayCardNumber = creditCardNumber.split(""); // convertimos el string recibido en el parametro por array con el método split

    var remplace = remplaceDig(arrayCardNumber); // retorna un balor booleano

    return remplace
  },
  cardProV(inputVal){
   //Esta función valida el string con expresiones regulares conocer a que  proveedor pertenece
    const regVisa = /^4\d+$/;   /*Una forma mas completa de validar seria de la siguiente forma /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/*/
    const regMasterCard = /^5[1-5]\d+$/;
    const regAmericanExp = /^(34|37)\d+$/;
    const regDiscover = /^6011\d+$/;
    const regDinnerClubRout = /^2(014|149)\d+$/;
    const regJcb = /(3|1800|213)\d+$/;
    const regDinnerCarteBlanch = /(30[0-5]|38)\d+$/;
    const regDinnerClubInter = /^36\d+$/;
    const expr = true;


    switch (expr) {

        case regVisa.test(inputVal):
            return ('Visa')

        case regMasterCard.test(inputVal):
            return ('Master Card')

        case regAmericanExp.test(inputVal):
            return ('American Expres')

        case regDiscover.test(inputVal):
            return ('Discover')

        case regDinnerClubRout.test(inputVal):
            return ('Dinner Club / en Route')

        case regDinnerCarteBlanch.test(inputVal):
            return ('Dinner Club / Carte Blanche')

        case regDinnerClubInter.test(inputVal):
            return ('Dinner Club Internacional')

        case regJcb.test(inputVal):
            return ('Dinner Club / Carte Blanche')

        default:
            return ('Lo lamentamos, por el momento no tenemos registrado el proveedor de su tarjeta ')
    }



  }

};

function valueCard(arrayCardNumber) { //la funciòn multiplica por 2 los elementos en las posiciones pares
  var sumDigArray;
  let i = 1;

  while (i < arrayCardNumber.length) {
    arrayCardNumber[i] = arrayCardNumber[i] * 2;

    i = i + 2;
  }

  sumDigArray = sumDig(arrayCardNumber);
  return sumDigArray;
}





function sumDig(arrayVal) {// Esta funcion evalua los elementos que sean mayores a 9 y los separa en 2 digitos para despues dumarlos y guardarlos en el array

  let arraySumDig = [];
  var addDig;

  for (let i = 0; i < arrayVal.length; i++) {
    let div = 0;
    let mod = 0;
    let sum = 0;

    if (arrayVal[i] >= 10) { // evalua si es mayor a 9
      div = Math.floor((arrayVal[i] / 10), 1); // con Math.floor redondea al numero mas bajo
      mod = arrayVal[i] % 10; // toma el valor del residuo
      sum = div + mod; 

      arraySumDig.push(sum); // push método para ir guardando elementos en un arreglo
    }

    else {
      arraySumDig.push(arrayVal[i]);
    }
  }

  addDig = arraySum(arraySumDig)
  return addDig;

}



function arraySum(arraySumDig) { // Esta función recibie un arreglo como parametro y retorna un numero, hace la suma de todos los elementos del arreglo


  var validationLuhn;
  /*arraySumDig.forEach( element => { total+=parseInt(element)});*/

  var total = arraySumDig.reduce((a, b) => parseInt(a) + parseInt(b), 0); // método reduce, suma los elementos dentro de un array


  validationLuhn = messageAndValidation(total)
  return (validationLuhn)

}



function messageAndValidation(total) { // la función recibe un número como parametrto, evalua que sea multiplo de 10 (o que termine en 0)
  let mod = 0
  var messageValidationCard;

  mod = total % 10; // obtenemos el valor del residuo al dividirlo entre 10 

  (mod === 0) ? messageValidationCard = true : messageValidationCard = false; // si cumple la condicion que el residuo es igual a cero envia true si no false



  return messageValidationCard // retorna un booleano

}

function remplaceDig(arrayCardNumber) { // recibe como parametro un array, se replaza los digitos por # hasta llegar a la posicion length-4

  for (let i = 0; i < arrayCardNumber.length - 4; i++) {  // con length -4 ,llega al final con length y se devueleve 4 posiciones de atras hacia delante
    arrayCardNumber[i] = "#"
  }

  return arrayCardNumber.join("")// con el método join separamos el arreglo con el separador que indiquemos en este caso ninguno ""
}

export default validator;
