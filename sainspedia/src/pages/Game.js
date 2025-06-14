import React from "react";
import NewtonGame from "../components/game/NewtonGame";

function GameBelajar() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-success fw-bold text-center">
        Game & Animasi Interaktif: Hukum Newton
      </h2>
      <p className="text-center mb-5">
        Uji pemahamanmu tentang Hukum Newton melalui kuis interaktif berikut!
      </p>
      <NewtonGame />
    </div>
  );
}

export default GameBelajar;