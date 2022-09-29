import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "J'ai 25 ans",
          "Que dire de moi ?",
          "Je suis Ingénieur informatique",
          "Bienvenue sur mon portfolio",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
