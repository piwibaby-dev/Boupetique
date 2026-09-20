// ==========================================================
// PERRITO SIGUE EL MOUSE
// ==========================================================

// Obtenemos las dos pupilas del HTML

const pupilaIzquierda =
    document.getElementById("pupil-left");

const pupilaDerecha =
    document.getElementById("pupil-right");


// Cuando el usuario mueve el mouse...

document.addEventListener("mousemove", function(event) {

    // Movemos cada pupila

    moverPupila(
        pupilaIzquierda,
        190,
        230,
        event.clientX,
        event.clientY
    );

    moverPupila(
        pupilaDerecha,
        310,
        230,
        event.clientX,
        event.clientY
    );

});


// ==========================================================
// FUNCIÓN PARA MOVER UNA PUPILA
// ==========================================================

function moverPupila(
    pupila,
    posicionX,
    posicionY,
    mouseX,
    mouseY
) {

    // Obtenemos la posición real de la pupila
    // dentro de la pantalla

    const rect =
        pupila.getBoundingClientRect();


    // Centro del ojo

    const centroX =
        rect.left + rect.width / 2;

    const centroY =
        rect.top + rect.height / 2;


    // Calculamos la distancia
    // entre el ojo y el mouse

    const diferenciaX =
        mouseX - centroX;

    const diferenciaY =
        mouseY - centroY;


    // Calculamos el ángulo

    const angulo =
        Math.atan2(
            diferenciaY,
            diferenciaX
        );


    // Distancia máxima que puede moverse la pupila

    const distancia = 10;


    // Calculamos cuánto se mueve
    // horizontalmente

    const movimientoX =
        Math.cos(angulo) * distancia;


    // Calculamos cuánto se mueve
    // verticalmente

    const movimientoY =
        Math.sin(angulo) * distancia;


    // Aplicamos el movimiento

    pupila.style.transform =
        `translate(${movimientoX}px, ${movimientoY}px)`;

}