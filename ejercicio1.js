function inicializar(){
    let nombres=[];
    let nombre;
    let cont=0;
    while(cont<5){
        nombre = prompt("Inserte su nombre: ");
        let encontrado = false;
        for(let i=0;i<nombres.length;i++){
            if(nombre === nombres[i]){
                alert("El nombre ya exites, indique otro nombre.");
                encontrado = true;
            }
        }
        if(encontrado== false){
           nombres.push(nombre);
           cont++;
        }
    }
    nombres.sort();
    let nombresFinal=[];
    for(let i=0;i<5;i++){
        nombresFinal.push(nombres[i].toUpperCase().substring(0,1));
        console.log(nombresFinal[i]);
    }
}


