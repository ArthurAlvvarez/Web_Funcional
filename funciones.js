  function suma(){
            var num1 = document.getElementById('n1').value;
            var num2 = document.getElementById('n2').value;
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            alert("La suma de los dos números introducidos es: " + (num1 +num2))
}
    function par(){
        var num = document.getElementById('n3').value;
        num = parseInt(num);
        if(num == 0){
            alert("0 no es par ni impar")
        }else
            alert(num % 2 == 0? num + " es Par" : num + " es Impar")
}
    function multiplo(){
        var num1 = document.getElementById('n4').value;
        var num2 = document.getElementById('n5').value;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        alert(num1 % num2 == 0? num2 + " es multiplo de " + num1 : num2 + " no es multiplo " + num1)
}
    function mayor(){
        var num1 = document.getElementById('n6').value;
        var num2 = document.getElementById('n7').value;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        if(num1 == num2){
            alert("Los dos números son iguales")
        }else
            alert(num1 > num2? (num1 + " es mayor que " + num2) : (num2 + " es mayor que " + num1));
}
    function impuesto (){
        var num1 = document.getElementById('n8').value;
        var num2 = document.getElementById('n9').value;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var resultado = parseFloat(num1 * num2 / 100);
        var neto = parseFloat(num1 - resultado);
        alert("El precio neto es " + neto);
    }
    function siglo (){
        var num1 = document.getElementById('n10').value;
        num1 = parseFloat(num1);
        var siglo = Math.ceil(num1 / 100);
        if(num1 % 100 == 0){
            siglo += 1;
        }
        alert("Es el siglo " + siglo);
    }
    function grande(){
        var num1 = document.getElementById('n11').value;
        var num = new Array;
        num = num1.split(" ");
        temp = num[0];
        for(i = 0;i < num.length;i++){
            if(temp < num[i]){
                temp = num[i];
            }
        }
        alert("El numero mas grande es " + temp);
    }
    function dia(){
        var num1 = document.getElementById('n12').value;
        num1 = parseInt(num1);
        switch(num1){
            case 1:
                alert("El dia de la semana es Lunes");
                break;
            case 2:
            alert("El dia de la semana es Martes");
                break;
            case 3:
                alert("El dia de la semana es Miercoles");
                break;
            case 4:
                alert("El dia de la semana es Jueves");
                break;
            case 5:
                alert("El dia de la semana es Viernes");
            break;
            case 6:
                alert("El dia de la semana es Sabado");
                break;
            case 7:
                alert("El dia de la semana es Domingo");
                break;
            default:
                alert("Numero fuera de rango");
                break;
    }
}
    function array(){
        var num1 = document.getElementById('n13').value;
        num1 = parseInt(num1);
        let numeros = new Array(num1);
        for(i = 0; i < numeros.length; i++){
         numeros[i] = i +1;
        }
        alert(numeros);
}  
function suma_pares_impares(){
    var num1 = document.getElementById('n14').value;
    var num2 = document.getElementById('n15').value;
        num1 = parseInt(num1);
    var resultado = 0;
    switch(num2){
        case "par":
            for(i = 0;i <= num1; i++){
                if(i % 2 == 0){
                    resultado += i;
                }
            }
            alert("La suma de los numeros pares es " + resultado);
            break;
        case "impar":
            for(i = 0;i <= num1; i++){
                if(i % 2 != 0){
                    resultado += i;
                }
            }
            alert("La suma de los numeros impares es " + resultado);
            break;
        default:
            alert("par o impar");
            break;
    }
}
function imprime_paresoimpares(){
    var num1 = document.getElementById('n16').value;
    var num2 = document.getElementById('n17').value;
        num1 = parseInt(num1);
    var sum = 0;
    var resultado = "";
    switch(num2){
        case "par":
            for(i = 0;i <= num1; i++){
                if(i % 2 == 0){
                    sum += i
                    resultado += i;
                    if (i < num1 - 1 && i != num1) {
                        resultado += " + ";
                    }
                }
            }
            alert(resultado +" = " + sum);
            break;
        case "impar":
            for(i = 0;i <= num1; i++){
                if(i % 2 != 0){
                    resultado += i;
                    alert(i);
                    if (i < num1 - 1 && i != num1) {
                        alert(" + ");
                    }
                }
            }
            alert(" = " + resultado);
            break;
        default:
            alert("par o impar");
            break;
    }
}
function media_aritmetica(){
    var num1 = document.getElementById('n18').value;
    var num = new Array;
    num = num1.split(" ");
    var temp = 0;
    var resultado = 0;
    for(i = 0; i < num.length;i++){
        temp += parseInt(num[i]);
    }
    resultado = temp / num.length;
    alert("La media de los numeros es " + (temp /2));
}

function cuadrado_array(){
    var num1 = document.getElementById('n19').value;
    var array = new Array;
    array = num1.split(" ");
    var cuadrados = array.map(array => array * array);
    alert(cuadrados);
}
function operaciones(){
    var num1 = document.getElementById('n20').value;
    var num2 = document.getElementById('n21').value;
    var num3 = document.getElementById('n22').value;
    var array1 = new Array;
    array1 = num1.split(" ");
    var array2 = new Array;
    array2 = num2.split(" ");
    var array3 = new Array;
    switch(num3){
        case '+':
            for(i = 0; i < array1.length; i++){
                array3[i] = parseInt(parseInt(array1[i])  + parseInt(array2[i]) );
            }
            alert(array3);
            break;
        case '-':
            for(i = 0; i < array1.length; i++){
                array3[i] = parseFloat(array1[i] - array2[i]);
            }
            alert(array3);
            break;
        case '*':
            for(i = 0; i < array1.length; i++){
                array3[i] = parseFloat(array1[i] * array2[i]);
            }
            alert(array3);
            break;
        case '/':
            for(i = 0; i < array1.length; i++){
                array3[i] = parseFloat(array1[i] / array2[i]);
            }
            alert(array3);
            break;
        default:
            alert('Aquí no hacemos eso');
            break;
    }
}
function mcm(){
            var num1 = document.getElementById('n23').value;
            var num2 = document.getElementById('n24').value;
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            var max = Math.max(num1, num2);
            var igual = false;
            while (!igual) {
                if (max % num1 === 0 && max % num2 === 0) {
                    alert("El mínimo común múltiplo de " + num1 + " y " + num2 + " es " + max);
                    igual = true;
            }
            max++;
        }
}
        function palabra(){
        var oracion = document.getElementById('n1').value;
        let palabras = new Array;
        let palabraslargas = new Array;
        palabras = oracion.split(" ");
        for(i = 0; i < palabras.length; i++){
            if(palabras[i].length >= 3)
                palabraslargas.push(palabras[i]);
        }
        alert(palabraslargas);
        }

        function invertir(){
            var oracion = document.getElementById('n2').value;
            let reverso = "";
            for(i = oracion.length; i >= 0; i--){
            reverso += oracion.charAt(i);
        }
        alert(reverso);
        }
        
    function ocultar_vocales(){
        var oracion = document.getElementById('n3').value;
        var vocales = new Array;
        vocales = oracion.split("");
        var frase = "";
        for(i = 0; i < vocales.length; i++){
            if(vocales[i] === "a" || vocales[i] === "e" || vocales[i] === "i" || vocales[i] === "o" || vocales[i] === "u"){
                frase += "";
            }else{
                frase += vocales[i];
            }   
        }
        alert(frase);
}
