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
 
alimentar(5); 
jugar(40);

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

simularPasoDelTiempo(15);
diagnosticoMascota(5);

