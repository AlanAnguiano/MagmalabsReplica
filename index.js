var a,b,suma,aux=0,total,casillas=1;

function ab(aux,casillas) {
    a = prompt("Jugada "+casillas+"tiro 1:");
    b = prompt("tiro 2: ");
    aux 
    return (Number(a) + Number(b));
}

do{
    a = prompt("Jugada "+casillas+"tiro 1:");
    b = prompt("tiro 2: ");

    suma = Number(a) + Number(b);
    switch (suma) {
        case 10:
            aux = suma;

            break;
    
        default:
            break;
    }
    casillas++;
}while(casillas <=10)