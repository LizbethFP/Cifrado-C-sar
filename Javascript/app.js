var str = prompt('Ingrese una frase a cifrar');
function cipher (str){
  var acum = '';
  //itinerar str
  for (var i = 0; i<str.length; i++){
  var asciiCode = str.charAt(i).charCodeAt(0); //Cambiando letras alfabéticas a letras ASCII según índice del str
  var positionAtAscii = ((asciiCode-65)+33)%26+65;//Realizando fórmula de cifrado y consiguiendo posición de letras en ASCII
  var newLetter = String.fromCharCode(positionAtAscii);//Conseguiendo nuevas letras ASCII
  acum += newLetter;  //acumular cada letra ASCII y crear frase completa cifrada
  }
  return acum; //retornar frase cifrada
}
document.write("La frase cifrada es " + cipher(str));//imprimir el llamado de la función


function decipher (acum) {
  var acum1 = '';
  //iterar acum
  for(var i = 0; i<acum.length; i++){

  acum1 =+ reverseLetter;
  }
  return acum1;
}
document.write("La frase descifrada es " + decipher(cipher));//imprimir el llamado de la función
