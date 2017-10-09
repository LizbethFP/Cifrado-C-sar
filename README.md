CIFRADO CÉSAR
=============
Índice
------
* [Descripción general](#cabecera1)
* [Pseudocódigo](#cabecera2)
* [Diagrama de flujo](#cabecera3)
* [Autora](#cabecera4)
* [Fecha](#cabecera5)

### Se puede acceder a este proyecto en
[Github](https://github.com/LizbethFP/Cifrado-C-sar.git "Github")

Descripción general
-------------------
Para el producto "Cifrado César", se pide que una página web obtenga una frase a cifrar y descifrar por medio de un *prompt*. Esto se resolverá con el *algoritmo de Cifrado César*, al mantener un parámetro de desplazamiento de 33 espacios hacia la derecha, y se utilizará dos funciones llamadas ***cipher*** y ***decipher***.

Pseudocódigo
------------
ingreso = frase a cifrar con prompt;  
srt <- ingreso;  

* Función cipher (str){  
para (i = 0; i<srt.length; i++){  
      conseguir posición ASCII de letras alfabéticas;  
      realizar cifrado César y conseguir posición de letras ASCII;  
      conseguir nuevas letras ASCII;  
      acumular cada letra para crear frase cifrada  
}  
retornar frase cifrada  
}  
mostrar función con alert  

* Función decipher (str){  
para (i = 0; i<srt.length; i++){  
  conseguir posición ASCII de letras alfabéticas;  
  realizar fórmula de descifrado y conseguir posición de letras ASCII;  
  conseguir nuevas letras ASCII;  
  acumular cada letra para crear frase descifrada  
} 
retornar frase descifrada  
}  
mostrar función con alert  


Diagrama de flujo
-----------------


Autora
------
Lizbeth Félix Peña

Fecha
-----
09/10/2017
