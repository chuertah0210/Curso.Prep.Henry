// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en
  //Ej: Recibe ---> "ads formato par clave-valor.jfdsfsfjsdjfhacabcsbajda" || 
  //Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

var obj={}
  //var string="ads formato par clave-valor.jfdsfsfjsdjfhacabcsbajda";
  var uniqueStr = [...new Set(string)].join('');
  var withoutSpaces = uniqueStr.replaceAll(' ', '');

  for(i=0;i<withoutSpaces.length;i++){
    //console.log(withoutSpaces[i]);
    var indices = 0;
    for(var j = 0; j < string.length; j++) {
        if (string[j] === withoutSpaces[i]){indices++;} 
    }
    obj[withoutSpaces[i]]=indices;
    }
    return obj;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var caps="";
var low ="";
for(i=0;i<s.length;i++){
  if (s[i].toUpperCase()===s[i]){
    caps= caps.concat(s[i]);    
  }else{
    low = low.concat(s[i]);
  }
}
return (caps+low);

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  var tmpString="";
   var newArray= str.split(" ");
   newArray.forEach(element => {
     let x=element.length;
     while(x>0){
       tmpString=tmpString.concat(element[x-1]);
       x--;
     }
     if(x===1){}else{
     tmpString=tmpString.concat(" ");
    }
   });
 
   return(tmpString.trimEnd());
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  if((numero.toString().split('').reverse().join('')) === numero.toString()){
    
    return  "Es capicua";
}else{
  return "No es capicua";
}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var aux=0;
  for(i=0;i<cadena.length;i++){
    if( cadena[i].toLowerCase().indexOf('a')>-1){
      aux=aux+1;
    } else if (cadena[i].toLowerCase().indexOf('b')>-1){
      aux=aux+1;
    }else if (cadena[i].toLowerCase().indexOf('c')>-1){
      aux=aux+1;
    }else {}
  }
 // console.log(aux);
  
  if( aux===0){return cadena}else{
    var newCadena="";
newCadena=cadena.replace(/a|b|c/g,"");
  return newCadena;
  }

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  arr.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a.length == b.length) {
      return 0;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 1;
  });
  return(arr);

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var newCruce=[];

  for( var i=0;i<arreglo1.length;i++){
 console.log(arreglo1[i]);
for( var x=0;x<arreglo2.length;x++){
 if(arreglo1[i]===arreglo2[x]){
        newCruce.push(arreglo1[i]);
      }
}

  }
  return(newCruce);
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

