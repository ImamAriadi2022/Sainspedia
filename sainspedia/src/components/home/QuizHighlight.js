import React from "react";
import { Link } from "react-router-dom";

function QuizHighlight() {
  return (
    <div className="p-4 bg-warning rounded-4 shadow text-center">
      <h4 className="fw-bold mb-2 text-dark">
        Uji Pemahamanmu dengan Kuis Interaktif!
      </h4>
      <p className="mb-3 text-dark">
        Jawab soal-soal sains seru dan dapatkan umpan balik langsung. Cocok untuk latihan mandiri atau bersama teman!
      </p>
      <Link to="/kuis" className="btn btn-primary btn-lg">
        Mulai Kuis Sekarang
      </Link>
    </div>
  );
}

export default QuizHighlight;