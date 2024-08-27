/* for (let index = 0; index < 5; index++) {
    let numeroUno = Number(prompt("Ingrese un número: "));
    let numeroDos = Number(prompt("Ingrese otro número: "));
    let operacion = prompt("Seleccione la opción: \n1 - Sumar \n2 - Restar \n3 - Multiplicar \n4 - Dividir ");


    switch (operacion) {
        case "1":
            console.log("La suma es: " + (numeroUno + numeroDos));
            break;


        case "2":
            console.log("La resta es: " + (numeroUno - numeroDos));

            break;

        case "3":
            console.log("La multiplicación es: " + (numeroUno * numeroDos));
            break;

        case "4":
            console.log("La división es: " + (numeroUno / numeroDos));
            break;

    }

} */



/* let index = 10;

while (index < 20) {
    console.log("Ciclo mientras");
    index++;
} */





/* centinela o badera */
/* let repetir = false;

while (repetir); {
    let estado = prompt("¿Desea repetir el código?: \n1 - Si \n2 - No");
    if (estado == "2"){
        repetir = false;
    }
    console.log("Estado del ciclo: " + repetir);

} */


    let repetir = false;
    let index = 0;
    do{
        let estado = prompt("¿Desea repetir el código?: \n1 - Si \n2 - No");
        if (estado == "2"){
            repetir = true;
        }
        console.log("Estado del ciclo: " + repetir);
        index++;
   
        
    }while (repetir);