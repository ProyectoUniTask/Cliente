import React, { useState, useEffect } from 'react';

const FrasesAleatoria = () => {
  const frases = [
    "Siempre parece imposible hasta que se hace (Nelson Mandela)",
    "La motivación es lo que te pone en marcha, el hábito es lo que hace que sigas (Jim Ryun)",
    "No hay un sustituto para el trabajo duro (Thomas Edison)",
    "Tus talentos y habilidades irán mejorando con el tiempo, pero para eso has de empezar (Martin Luther King)",
    "La perseverancia puede transformar el fracaso en un logro extraordinario (Matt Biondi)",
    "La energía y la persistencia conquistan todas las cosas (Benjamin Franklin)",
    "¡Nunca te rindas! El fracaso y el rechazo son sólo el primer escalón hacia el éxito (Jim Valvano)",
    "No importa cuán despacio vayas mientras no te detengas (Confucio)",
    "Puedes encontrar derrotas, pero no debes ser derrotado (Maya Angelou)",
    "El 80% del éxito se basa simplemente en insistir (Woody Allen)",
    "Siempre he creído que si uno se pone a trabajar, los resultados llegarán tarde o temprano (Michael Jordan)",
    "La fuerza no viene de ganar. Sus luchas desarrollan sus fortalezas. Cuando uno atraviesa dificultades y decide no rendirse, eso es fuerza (Arnold Schwarzenegger)",
    "La fuerza no viene de la capacidad física. Proviene de una voluntad indomable (Mahatma Gandhi)",
    "Siempre se puede ser mejor (Tiger Woods)",
    "La verdadera educación consiste en obtener lo mejor de uno mismo (Mahatma Gandhi)",
    "Emplea todos tus esfuerzos, incluso cuando las posibilidades jueguen en tu contra (Arnold Palmer)",
    "La mejor forma de predecir el futuro es crearlo (Peter Drucker)",
    "Esfuérzate al máximo. Lo que siembres hoy dará sus frutos mañana (Og Mandino)",
    "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer (John R. Wooden)",
    "La calidad nunca es un accidente, siempre es resultado de un esfuerzo de la inteligencia (John Ruskiin)",
    "Lo maravilloso de aprender algo es que nadie puede arrebatárnoslo (B. B. King)",
    "El hombre bien preparado para la lucha ha conseguido medio triunfo (Miguel de Cervantes)",
    "El éxito depende del esfuerzo (Sófocles)",
    "Haz de cada día una obra maestra (John Wooden)",
    "No mires el reloj. Haz lo mismo que él: ve avanzando (Sam Levenson)",
    "Todos nosotros sabemos algo. Todos nosotros ignoramos algo. Por eso, aprendemos siempre (Paulo Freire)",
    "Pregúntate si lo que estás haciendo hoy te acerca al lugar en el que quieres estar mañana (Walt Disney)",
    "Tú tienes poder sobre tu mente, no fuera en los acontecimientos. Date cuenta de esto y encontrarás la fuerza (Marco Aurelio)"
  ];

  const [fraseActual, setFraseActual] = useState("");

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    setFraseActual(frases[indiceAleatorio]);
  }, []);

  return (
    <div style={{ textAlign: 'center'}}>
      <h3>{fraseActual}</h3>
    </div>
  );
};

export default FrasesAleatoria;