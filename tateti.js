var jugadoruno = 0;
var jugadordos = 0;
var gandoruno = 0;
var gandordos = 0;
var posiciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var crono;
var seg = 0;
var min = 0;
var hor = 0;
var letras = document.querySelectorAll(".p");

function cronometro(){
    seg++;
    if(seg > 59){
        min++;
    }
    if(min > 59){
        hor++;
    }
    document.querySelector(".crono").textContent = hor.toString() + ":" + min.toString() + ":" + seg.toString();
}

function limpiar() {
    posiciones.fill(0);
    for(let i = 0; i < letras.length; i++){
        letras[i].textContent = "";
    }
    flag = 1;
    limpiarCronometro();
}

function limpiarCronometro(){
    seg = 0;
    min = 0;
    hor = 0;
}

function esGanador(posiciones) {
    let ganador = new Array(8).fill(false)
    let flag = false;
    if (posiciones[1] == posiciones[2] && posiciones[3] == posiciones[2] && posiciones[1] != 0){
        if(!esTurno()){
            document.querySelector(".n1").style.backgroundColor = "red";
            document.querySelector(".n2").style.backgroundColor = "red";
            document.querySelector(".n3").style.backgroundColor = "red";
        } else {
            document.querySelector(".n1").style.backgroundColor = "blue";
            document.querySelector(".n2").style.backgroundColor = "blue";
            document.querySelector(".n3").style.backgroundColor = "blue";
        }
        document.querySelector("#reinciar").addEventListener("click", function(){
            document.querySelector(".n1").style.backgroundColor = "white";
            document.querySelector(".n2").style.backgroundColor = "white";
            document.querySelector(".n3").style.backgroundColor = "white";
            limpiar();
        });

        ganador[0] = true;
    }
    if (posiciones[4] == posiciones[5] && posiciones[6] == posiciones[5] && posiciones[4] != 0){
        if(!esTurno()){
            document.querySelector(".n4").style.backgroundColor = "red";
            document.querySelector(".n5").style.backgroundColor = "red";
            document.querySelector(".n6").style.backgroundColor = "red";
        } else {
            document.querySelector(".n4").style.backgroundColor = "blue";
            document.querySelector(".n5").style.backgroundColor = "blue";
            document.querySelector(".n6").style.backgroundColor = "blue";
        }
        document.querySelector("#reinciar").addEventListener("click", function(){
            document.querySelector(".n4").style.backgroundColor = "white";
            document.querySelector(".n5").style.backgroundColor = "white";
            document.querySelector(".n6").style.backgroundColor = "white";
            limpiar();
        });

        ganador[1] = true;
    }
    if (posiciones[7] == posiciones[8] && posiciones[9] == posiciones[8] && posiciones[7] != 0){
        if(!esTurno()){
            document.querySelector(".n7").style.backgroundColor = "red";
            document.querySelector(".n8").style.backgroundColor = "red";
            document.querySelector(".n9").style.backgroundColor = "red";
        } else {
            document.querySelector(".n7").style.backgroundColor = "blue";
            document.querySelector(".n8").style.backgroundColor = "blue";
            document.querySelector(".n9").style.backgroundColor = "blue";
        }
        document.querySelector("#reinciar").addEventListener("click", function(){
            document.querySelector(".n7").style.backgroundColor = "white";
            document.querySelector(".n8").style.backgroundColor = "white";
            document.querySelector(".n9").style.backgroundColor = "white";
            limpiar();
        });

        ganador[2] = true;
    }
    if (posiciones[1] == posiciones[4] && posiciones[7] == posiciones[4] && posiciones[1] != 0){
        if(!esTurno()){
            document.querySelector(".n1").style.backgroundColor = "red";
            document.querySelector(".n4").style.backgroundColor = "red";
            document.querySelector(".n7").style.backgroundColor = "red";
        } else {
            document.querySelector(".n1").style.backgroundColor = "blue";
            document.querySelector(".n4").style.backgroundColor = "blue";
            document.querySelector(".n7").style.backgroundColor = "blue";
        }
        document.querySelector("#reinciar").addEventListener("click", function(){
            document.querySelector(".n1").style.backgroundColor = "white";
            document.querySelector(".n4").style.backgroundColor = "white";
            document.querySelector(".n7").style.backgroundColor = "white";
            limpiar();
        });

        ganador[3] = true;
    }
    if (posiciones[2] == posiciones[5] && posiciones[8] == posiciones[5] && posiciones[2] != 0){
        if(!esTurno()){
            document.querySelector(".n2").style.backgroundColor = "red";
            document.querySelector(".n5").style.backgroundColor = "red";
            document.querySelector(".n8").style.backgroundColor = "red";
        } else {
            document.querySelector(".n2").style.backgroundColor = "blue";
            document.querySelector(".n5").style.backgroundColor = "blue";
            document.querySelector(".n8").style.backgroundColor = "blue";
        }
        document.querySelector("#reinciar").addEventListener("click", function(){
            document.querySelector(".n2").style.backgroundColor = "white";
            document.querySelector(".n5").style.backgroundColor = "white";
            document.querySelector(".n8").style.backgroundColor = "white";
            limpiar();
        });

        ganador[4] = true;
    }
    if (posiciones[3] == posiciones[6] && posiciones[9] == posiciones[6] && posiciones[3] != 0){
        if(!esTurno()){
            document.querySelector(".n3").style.backgroundColor = "red";
            document.querySelector(".n6").style.backgroundColor = "red";
            document.querySelector(".n9").style.backgroundColor = "red";
        } else {
            document.querySelector(".n3").style.backgroundColor = "blue";
            document.querySelector(".n6").style.backgroundColor = "blue";
            document.querySelector(".n9").style.backgroundColor = "blue";
        }
        document.querySelector("#reinciar").addEventListener("click", function(){
            document.querySelector(".n3").style.backgroundColor = "white";
            document.querySelector(".n6").style.backgroundColor = "white";
            document.querySelector(".n9").style.backgroundColor = "white";
            limpiar();
        });

        ganador[5] = true;
    }
    if (posiciones[1] == posiciones[5] && posiciones[9] == posiciones[5] && posiciones[1] != 0){
        if(!esTurno()){
            document.querySelector(".n1").style.backgroundColor = "red";
            document.querySelector(".n5").style.backgroundColor = "red";
            document.querySelector(".n9").style.backgroundColor = "red";
        } else {
            document.querySelector(".n1").style.backgroundColor = "blue";
            document.querySelector(".n5").style.backgroundColor = "blue";
            document.querySelector(".n9").style.backgroundColor = "blue";
        }
        document.querySelector("#reinciar").addEventListener("click", function(){
            document.querySelector(".n1").style.backgroundColor = "white";
            document.querySelector(".n5").style.backgroundColor = "white";
            document.querySelector(".n9").style.backgroundColor = "white";
            limpiar();
        });

        ganador[6] = true;
    }
    if (posiciones[3] == posiciones[5] && posiciones[7] == posiciones[5] && posiciones[3] != 0){
        if(!esTurno()){
            document.querySelector(".n3").style.backgroundColor = "red";
            document.querySelector(".n5").style.backgroundColor = "red";
            document.querySelector(".n7").style.backgroundColor = "red";
        } else {
            document.querySelector(".n3").style.backgroundColor = "blue";
            document.querySelector(".n5").style.backgroundColor = "blue";
            document.querySelector(".n7").style.backgroundColor = "blue";
        }
        document.querySelector("#reinciar").addEventListener("click", function(){
            document.querySelector(".n3").style.backgroundColor = "white";
            document.querySelector(".n5").style.backgroundColor = "white";
            document.querySelector(".n7").style.backgroundColor = "white";
            limpiar();
        });

        ganador[7] = true;
    }
    for(let i = 0; i < ganador.length; i++){
        if(ganador[i] == true){
            flag = true;
        }
    }
    return flag;
}

function esTurno() {
    var flag = false;
    if(jugadoruno > jugadordos){
        flag = true;
        jugadordos++;
    } else {
        jugadoruno++;
    }
    return flag;
}

function verificarSiEstaOcupado(pos, posiciones){
    let flag = false;
    if (posiciones[pos] == 0){
        flag = true;
    }
    return flag;
}

function verificarSiEstaCompleta(posiciones){
    let flag = false;
    let cant = 0;
    for(let i = 1; i < posiciones.length; i++){
        if(posiciones[i] != 0){
            cant++;
        }
    }
    if(cant == 9){
        flag = true;
    }
    return flag;
}

var flag = 1;

function ponerSimbolo(pos, posiciones, marcado) {
    if(flag == 1){
        crono = setInterval(cronometro, 1000);
        flag++;
    }
    if(verificarSiEstaOcupado(pos, posiciones)){
        if(!esTurno()){
            posiciones[pos] = 1;
            marcado.textContent = "X";
            if(esGanador(posiciones)){
                gano = document.querySelector("#ganador");
                gano.textContent = "Gano el primer Jugador";
                gandoruno++;
                document.querySelector("#puntosX").textContent = gandoruno.toString();
                clearInterval(crono);
                document.querySelector(".col").style.cursor = "none";
            }
        } else{
            posiciones[pos] = 2;
            marcado.textContent = "O";
            if(esGanador(posiciones)){
                gano = document.querySelector("#ganador");
                gano.textContent = "Gano el segundo Jugador";
                gandordos++;
                document.querySelector("#puntosO").textContent = gandordos.toString();
                clearInterval(crono);
                document.querySelector(".col").style.pointerEvents = "none";
            }
        }
    }
    if(verificarSiEstaCompleta(posiciones)){
        gano = document.querySelector("#ganador");
        gano.textContent = "Empate";
        limpiar();
    }
}


pos1 = document.querySelector(".n1");
pos1.addEventListener("click", function(){
    p = document.querySelector("#p1");
    ponerSimbolo(1, posiciones, p);
});
pos2 = document.querySelector(".n2");
pos2.addEventListener("click", function(){
    p = document.querySelector("#p2");
    ponerSimbolo(2, posiciones, p);
});
pos3 = document.querySelector(".n3");
pos3.addEventListener("click", function(){
    p = document.querySelector("#p3");
    ponerSimbolo(3, posiciones, p);
});
pos4 = document.querySelector(".n4");
pos4.addEventListener("click", function(){
    p = document.querySelector("#p4");
    ponerSimbolo(4, posiciones, p);
});
pos5 = document.querySelector(".n5");
pos5.addEventListener("click", function(){
    p = document.querySelector("#p5");
    ponerSimbolo(5, posiciones, p);
});
pos6 = document.querySelector(".n6");
pos6.addEventListener("click", function(){
    p = document.querySelector("#p6");
    ponerSimbolo(6, posiciones, p);
});
pos7 = document.querySelector(".n7");
pos7.addEventListener("click", function(){
    p = document.querySelector("#p7");
    ponerSimbolo(7, posiciones, p);
});
pos8 = document.querySelector(".n8");
pos8.addEventListener("click", function(){
    p = document.querySelector("#p8");
    ponerSimbolo(8, posiciones, p);
});
pos9 = document.querySelector(".n9");
pos9.addEventListener("click", function(){
    p = document.querySelector("#p9");
    ponerSimbolo(9, posiciones, p);
});
