function suma(){
    var resultado = num1 + num2;
    return resultado;
}

function par (num){
    document.write(num % 2 == 0? "Par" : "Impar");
}

function multiplo (num1, num2){
    num1 = prompt("Dime un numero");
    num2 = prompt("Dime otro numero para dividirlo con el anterior");
    document.write(num1 % num2 == 0? "Es multiplo" : "No es multiplo");
}

function mayor (num1, num2){
    num1 = prompt("Dime un numero");
    num2 = prompt("Dime otro numero");
    document.write(num1 > num2? (num1 + "Es mayor") : (num2 + "Es mayor"));
}

function palabra (frase){
    let palabras = new Array;
    let palabraslargas = new Array;
    palabras = frase.split(" ");
    for(i = 0; i < palabras.length; i++){
        if(palabras[i].length >= 3)
            palabraslargas.push(palabras[i]);
    }
    document.write(palabraslargas);
}

function invertir (cadena){
    let reverso = "";
    for(i = cadena.length; i >= 0; i--){
        reverso += cadena.charAt(i);
    }
    document.write(reverso);
}

function impuesto (num1, num2){
    var resultado = (num1 * num2) / 100;
    var neto = num1 - resultado;
    document.write("El precio neto es " + neto);
}

function siglo (año){
    var siglo = Math.ceil(año / 100);
    if(año % 100 == 0){
        siglo += 1;
    }
    document.write("Es el siglo " + siglo);
}

function grande (lista){
    var num = new Array;
    num = lista.split(",");
    temp = num[0];
    for(i = 0;i < num.length;i++){
        if(temp < num[i]){
            temp = num[i];
        }
    }
    document.write("El numero mas grande es " + temp);
}

function dia (num){
    switch(num){
        case 1:
            document.write("El dia de la semana es Lunes");
            break;
        case 2:
            document.write("El dia de la semana es Martes");
            break;
        case 3:
            document.write("El dia de la semana es Miercoles");
            break;
        case 4:
            document.write("El dia de la semana es Jueves");
            break;
        case 5:
            document.write("El dia de la semana es Viernes");
            break;
        case 6:
            document.write("El dia de la semana es Sabado");
            break;
        case 7:
            document.write("El dia de la semana es Domingo");
            break;
        default:
            document.write("Numero fuera de rango");
            break;
    }
}

function array (num){
    let numeros = new Array(num);
    for(i = 0; i < numeros.length; i++){
        numeros[i] = i +1;
    }
    document.write(numeros);
}

function suma_pares_impares (num, par){
    var resultado = 0;
    switch(par){
        case "par":
            for(i = 0;i <= num; i++){
                if(i % 2 == 0){
                    resultado += i;
                }
            }
            document.write("La suma de los numeros pares es " + resultado);
            break;
        case "impar":
            for(i = 0;i <= num; i++){
                if(i % 2 != 0){
                    resultado += i;
                }
            }
            document.write("La suma de los numeros impares es " + resultado);
            break;
        default:
            alert("par o impar");
            break;
    }
}

function imprime_paresoimpares(num,par){
    var resultado = 0;
    switch(par){
        case "par":
            for(i = 0;i <= num; i++){
                if(i % 2 == 0){
                    resultado += i;
                    document.write(i);
                    if (i < num - 1 && i != num) {
                        document.write(" + ");
                    }
                }
            }
            document.write(" = " + resultado);
            break;
        case "impar":
            for(i = 0;i <= num; i++){
                if(i % 2 != 0){
                    resultado += i;
                    document.write(i);
                    if (i < num - 1 && i != num) {
                        document.write(" + ");
                    }
                }
            }
            document.write(" = " + resultado);
            break;
        default:
            alert("par o impar");
            break;
    }
}

function media_aritmetica (array){
    var num = new Array;
    num = array.split(",");
    var temp = 0;
    var resultado = 0;
    for(i = 0; i < num.length;i++){
        temp += num[i];
    }
    resultado = temp / num.length;
    document.write("La media de los numeros es " + (temp /2));
}

function ocultar_vocales (texto){
    var vocales = new Array;
    vocales = texto.split("");
    var frase = "";
    for(i = 0; i < vocales.length; i++){
        if(vocales[i] === "a" && vocales[i] === "e" && vocales[i] === "i" && vocales[i] === "o" && vocales[i] === "u"){
            frase += "@";
        }else{
            frase += vocales[i];
        }
    }
    document.write(frase);
}