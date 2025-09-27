let nombreMascota = prompt("Bienvenido! Por favor dale un nombre a tu mascota virtual:");
let nivelHambre = 50; 
let nivelFelicidad = 50; 


function mostrarEstado() {
  console.log(`Mascota: ${nombreMascota}, Hambre: ${nivelHambre}/100, Felicidad: ${nivelFelicidad}/100.`);
}
mostrarEstado();


const alimentar = function(puntosComida) {
  nivelHambre -= puntosComida;

  if (nivelHambre < 0) {
    nivelHambre = 0;
  }
  console.log(`Ñam! El hambre de ${nombreMascota} ha disminuido. Hambre: ${nivelHambre}/100.`);
};


const jugar = (puntosDiversion) => {
  nivelFelicidad += puntosDiversion;
  
  if (nivelFelicidad > 100) {
    nivelFelicidad = 100;
  }
  console.log(`Que divertido! La felicidad de ${nombreMascota} ha aumentado. Felicidad: ${nivelFelicidad}/100.`);
};
 
alimentar(); 
jugar();

mostrarEstado()


const simularPasoDelTiempo = () => {
  for (let i = 0; i < 4; i++) { 
    nivelHambre += 10;
    nivelFelicidad -= 5;

    
    if (nivelHambre > 100) {
      nivelHambre = 100;
    }
    if (nivelFelicidad < 0) {
      nivelFelicidad = 0;
    }
  }
  console.log("Han pasado algunas horas...");
};


function diagnosticoMascota() {
  
  if (nivelHambre >= 80) {
    console.log("¡Alertaaa! Tu mascota está muy hambrienta, necesita comida ya!");
  } else if (nivelHambre >= 40) {
    console.log("Tu mascota tiene algo de hambre.");
  } else {
    console.log("Tu mascota está satisfecha.");
  }

 
  switch (true) {
    case (nivelFelicidad >= 80):
      console.log("Tu mascota está muy feliz y juguetona :D");
      break;
    case (nivelFelicidad >= 40):
      console.log("Tu mascota está contenta :)");
      break;
    default:
      console.log("Tu mascota se siente un poco triste T-T");
      break;
  }
}

simularPasoDelTiempo();
diagnosticoMascota();


function iniciarCuidado() {
  console.log(`\n¡Hola! Es hora de cuidar a ${nombreMascota}.`);

  while (true) {
    let opcion = prompt(`
Menú de Cuidado de Mascota:
1 - Alimentar a la mascota
2 - Jugar con la mascota
3 - Simular el paso del tiempo
4 - Ver diagnóstico de la mascota
5 - Mostrar estado actual
6 - Despedirse de la mascota

Ingresa el número de tu opción:`);

  
    switch (opcion) {
      case '1':
        let comidaStr = prompt("¿Cuántos puntos de comida quieres darle? (Ej: 20)");
        let puntosComida = parseInt(comidaStr); 
        if (!isNaN(puntosComida) && puntosComida > 0) {
          alimentar(puntosComida);
        } else {
          console.log("\nOpción no válida. Por favor, ingresa una cantidad numérica positiva.");
        }
        break;
      
      case '2':
        let diversionStr = prompt("¿Cuántos puntos de diversión quieres darle? (Ej: 20)");
        let puntosDiversion = parseInt(diversionStr); 
        if (!isNaN(puntosDiversion) && puntosDiversion > 0) {
          jugar(puntosDiversion);
        } else {
          console.log("\nOpción no válida. Por favor, ingresa una cantidad numérica positiva.");
        }
        break;
      
      case '3':
        simularPasoDelTiempo();
        break;
      
      case '4':
        diagnosticoMascota();
        break;
      
      case '5':
        console.log("\n--- Estado Actual ---");
        mostrarEstado();
        console.log("---------------------");
        break;
      
      case '6':
        
        console.log(`\n${nombreMascota} Te dice: Adiós, gracias por cuidar de mí. El simulador ha finalizado.`);
        return; 
      
      default:
        console.log("\nOpción no válida. Por favor, elige un número del 1 al 6.");
        break;
    }
  }
}

iniciarCuidado(); 