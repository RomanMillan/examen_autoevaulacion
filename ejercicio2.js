let dniEmpleado = ["77332344K","23445677J","12345678H"];
let cont = 3;

let titulo = document.querySelector(".titulo");
titulo.textContent = `Número total de empleado ${cont}`;

function insertar(){
    let tabla = document.querySelector(".tablaEmp");
    let dni = prompt("Inserta el dni: ");
    let nombre = prompt("Insertar el nombre: ");
    let apellidos = prompt("Insertar los apellidos: ");
    
    let encontrado = false;
    for(let i=0;i<dniEmpleado.length;i++){
        if(dni=== dniEmpleado[i]){
            encontrado = true;
        }
    }
    if(encontrado== false){
        cont++;
        dniEmpleado.push(dni);
    
        let fila = document.createElement("TR");
        let celda1 = document.createElement("TD");
        let celda2 = document.createElement("TD");
        let celda3 = document.createElement("TD");
        let celda4 = document.createElement("TD");
    
        celda1.appendChild(document.createTextNode(cont));
        celda2.appendChild(document.createTextNode(dni));
        celda3.appendChild(document.createTextNode(nombre));
        celda4.appendChild(document.createTextNode(apellidos));
    
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
    
        tabla.appendChild(fila);
        titulo.textContent = `Número total de empleado ${cont}`;
    }

}

function borrar(){
    let tabla = document.querySelector(".tablaEmp");
    let dni = prompt("Inserta el dni: ");
    let encontrado = false;
    for(let i=0;i<dniEmpleado.length;i++){
        if(dni=== dniEmpleado[i]){
            let tablaElem = tabla.children;
            let borrar = tablaElem[i];
            borrar.remove();    
        }
    }

}

function modificar(){
    let tabla = document.querySelector(".tablaEmp");


}