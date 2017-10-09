var str = prompt('Ingrese una frase a cifrar');
var valToDecipher = cipher(str);
function cipher (str){
  var acum = '';

  for (var i = 0; i<str.length; i++){//itinerar str
    var asciiCode = str.charAt(i).charCodeAt(0); //Consiguiendo posición ASCII de las letras alfabéticas según índice del str
    var cesarFormulaAndAscii = ((asciiCode-65)+33)%26+65;//Realizando fórmula de cifrado y consiguiendo posición de letras ASCII
    var newLetter = String.fromCharCode(cesarFormulaAndAscii);//Conseguiendo nuevas letras ASCII
    acum += newLetter;  //acumular cada letra ASCII y crear frase completa cifrada
  }
  return acum; //retornar frase cifrada
}

function decipher (valToDecipher) {
  var acum1 = '';
  for(var i = 0; i<valToDecipher.length; i++){//itinerar str
    var asciiCode1 = valToDecipher.charAt(i).charCodeAt(0);//Consiguiendo posición ASCII de las letras
    var cesarFormulaAndAscii1 = ((asciiCode1+65)-33)%26+65;//Realizando fórmula de cifrado y consiguiendo posición de letras ASCII
    var reverseLetter = String.fromCharCode(cesarFormulaAndAscii1);//Conseguir elemento nuevo según ASCII
    acum1 =+ reverseLetter;
  }
  return acum1;
}

alert("La frase cifrada es " + cipher(str));//mostrar el llamado de la función
alert("La frase descifrada es " + decipher(valToDecipher));//mostrar el llamado de la función
