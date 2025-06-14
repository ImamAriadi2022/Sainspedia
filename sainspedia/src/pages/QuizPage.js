import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "Siapakah ilmuwan yang dikenal sebagai penemu tiga hukum gerak?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    answer: 1
  },
  {
    question: "Apa nama hukum Newton yang menyatakan 'Setiap aksi akan menimbulkan reaksi yang sama besar dan berlawanan arah'?",
    options: [
      "Hukum Newton 1",
      "Hukum Newton 2",
      "Hukum Newton 3",
      "Hukum Gravitasi"
    ],
    answer: 2
  },
  {
    question: "Rumus Hukum Newton 2 yang benar adalah...",
    options: [
      "F = m × a",
      "F = m / a",
      "F = a / m",
      "F = m + a"
    ],
    answer: 0
  },
  {
    question: "Apa yang dimaksud dengan hukum kelembaman (Newton 1)?",
    options: [
      "Benda akan selalu bergerak cepat",
      "Benda akan tetap diam atau bergerak lurus beraturan jika tidak ada gaya",
      "Benda akan selalu jatuh ke bawah",
      "Benda akan selalu berputar"
    ],
    answer: 1
  },
  {
    question: "Jika kamu mendorong tembok, tembok juga mendorong kamu dengan gaya yang ...",
    options: [
      "lebih kecil",
      "lebih besar",
      "sama besar dan berlawanan arah",
      "tidak ada gaya"
    ],
    answer: 2
  },
  {
    question: "Satuan SI untuk gaya adalah ...",
    options: [
      "Joule",
      "Newton",
      "Watt",
      "Meter"
    ],
    answer: 1
  },
  {
    question: "Isaac Newton juga terkenal dalam bidang ...",
    options: [
      "Optika dan cahaya",
      "Kimia organik",
      "Biologi sel",
      "Teknik mesin"
    ],
    answer: 0
  },
  {
    question: "Apa yang terjadi pada benda jika resultan gaya yang bekerja padanya nol?",
    options: [
      "Benda akan berhenti",
      "Benda akan bergerak melingkar",
      "Benda tetap diam atau bergerak lurus beraturan",
      "Benda akan meledak"
    ],
    answer: 2
  },
  {
    question: "Hukum gravitasi universal ditemukan oleh ...",
    options: [
      "Isaac Newton",
      "James Watt",
      "Michael Faraday",
      "Stephen Hawking"
    ],
    answer: 0
  },
  {
    question: "Teleskop reflektor pertama kali dibuat oleh ...",
    options: [
      "Galileo Galilei",
      "Isaac Newton",
      "Johannes Kepler",
      "Marie Curie"
    ],
    answer: 1
  }
];

const animStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 80,
  zIndex: 10,
  fontSize: 80,
  fontWeight: "bold",
  textAlign: "center",
  width: "100%",
  pointerEvents: "none",
  transition: "opacity 0.3s"
};

function QuizPage() {
  const [countdown, setCountdown] = useState(3);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showAnim, setShowAnim] = useState(false);
  const [animType, setAnimType] = useState(""); // "benar" atau "salah"

  // Countdown effect
  useEffect(() => {
    if (!started && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 800);
      return () => clearTimeout(timer);
    }
    if (countdown === 0 && !started) {
      setTimeout(() => setStarted(true), 600);
    }
  }, [countdown, started]);

  // Animasi benar/salah
  const handleOption = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[current].answer) {
      setScore(score + 1);
      setAnimType("benar");
    } else {
      setAnimType("salah");
    }
    setShowAnim(true);
    setTimeout(() => setShowAnim(false), 900);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setAnimType("");
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
    setSelected(null);
    setStarted(false);
    setCountdown(3);
    setAnimType("");
  };

  const handleShareWA = () => {
    const text = `Aku baru saja mencoba Kuis Sainspedia dan mendapat skor ${score}/${questions.length}! Yuk, coba juga dan buktikan pengetahuanmu! https://sainspedia.vercel.app/kuis`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{maxWidth:500,margin:"auto",padding:24,borderRadius:16,boxShadow:"0 2px 8px #ccc",position:"relative",minHeight:400}}>
      <h2 className="mb-4 text-center">Kuis Sainspedia</h2>
      {/* Hitung mundur */}
      {!started && (
        <div style={{textAlign:"center",marginTop:100}}>
          <div style={{fontSize:90,fontWeight:"bold",color:"#fbbf24",transition:"all 0.3s"}}>
            {countdown > 0 ? countdown : "Mulai!"}
          </div>
        </div>
      )}

      {/* Animasi benar/salah */}
      {showAnim && (
        <div
          style={{
            ...animStyle,
            opacity: showAnim ? 1 : 0,
            color: animType === "benar" ? "#22c55e" : "#ef4444",
            textShadow: animType === "benar"
              ? "0 0 24px #bbf7d0"
              : "0 0 24px #fecaca"
          }}
        >
          {animType === "benar" ? "🎉 BENAR!" : "❌ SALAH!"}
        </div>
      )}

      {/* Kuis */}
      {started && !showScore && (
        <>
          <div>
            <p><b>Soal {current + 1} dari {questions.length}</b></p>
            <p>{questions[current].question}</p>
            <div>
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOption(idx)}
                  style={{
                    display:"block",
                    width:"100%",
                    margin:"8px 0",
                    padding:"12px",
                    borderRadius:8,
                    border:"1px solid #ccc",
                    fontSize:16,
                    cursor: selected === null ? "pointer" : "default",
                    background:
                      selected === null
                        ? "#f9f9f9"
                        : idx === questions[current].answer
                        ? "#d4edda"
                        : selected === idx
                        ? "#f8d7da"
                        : "#f9f9f9",
                    borderColor:
                      selected === null
                        ? "#ccc"
                        : idx === questions[current].answer
                        ? "#22c55e"
                        : selected === idx
                        ? "#ef4444"
                        : "#ccc",
                    boxShadow:
                      selected !== null && idx === questions[current].answer
                        ? "0 0 12px #bbf7d0"
                        : selected !== null && selected === idx
                        ? "0 0 12px #fecaca"
                        : "none",
                    transition: "all 0.3s"
                  }}
                  disabled={selected !== null}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={handleNext}
            disabled={selected === null}
          >
            {current + 1 === questions.length ? "Lihat Skor" : "Selanjutnya"}
          </button>
        </>
      )}

      {/* Skor akhir */}
      {showScore && (
        <div style={{textAlign:"center",padding:32}}>
          <h2>🎉 Skor Kamu 🎉</h2>
          <div style={{fontSize:48,fontWeight:"bold",margin:"16px 0"}}>{score} / {questions.length}</div>
          <p>
            {score === 10
              ? "Luar biasa! Kamu jenius!"
              : score >= 8
              ? "Hebat! Pengetahuanmu sangat baik!"
              : score >= 5
              ? "Bagus! Masih bisa lebih baik lagi!"
              : "Ayo belajar lagi, kamu pasti bisa!"}
          </p>
          <button
            onClick={handleShareWA}
            style={{
              marginTop:16,
              background:"#25D366",
              color:"#fff",
              padding:"12px 24px",
              border:"none",
              borderRadius:8,
              fontSize:16,
              cursor:"pointer"
            }}
          >
            Bagikan ke WhatsApp
          </button>
          <br /><br />
          <button
            onClick={handleRestart}
            style={{padding:"8px 20px",borderRadius:8}}
            className="btn btn-secondary"
          >
            Coba Lagi
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizPage;