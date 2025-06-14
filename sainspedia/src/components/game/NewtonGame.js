import React, { useState, useRef, useEffect } from "react";
import { Button, ProgressBar, Alert, Modal } from "react-bootstrap";

// Dummy audio files (ganti dengan file asli di public/media/audio/)
const audioFiles = {
  1: "/media/audio/newton1-explain.mp3",
  2: "/media/audio/newton2-explain.mp3",
  3: "/media/audio/newton3-explain.mp3",
  typing: "/media/audio/typing.mp3",
  bgm: "/media/audio/game-bgm.mp3",
};

function TypingText({ text, onDone }) {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setDisplayed("");
    idx.current = 0;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(audioFiles.typing);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    audioRef.current.play().catch(() => {});
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[idx.current]);
      idx.current += 1;
      if (idx.current >= text.length) {
        clearInterval(interval);
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        if (onDone) onDone();
      }
    }, 30);
    return () => {
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
    // eslint-disable-next-line
  }, [text]);
  return <span>{displayed}</span>;
}

export default function NewtonGame() {
  const [level, setLevel] = useState(1);
  const [ballMoved, setBallMoved] = useState(false);
  const [force, setForce] = useState(5);
  const [mass, setMass] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [reaction, setReaction] = useState(false);
  const [collision, setCollision] = useState(false); // untuk pantulan level 3
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(0); // 0: tanya, 1: penjelasan
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Untuk audio narasi penjelasan
  const audioRef = useRef(null);

  // Untuk audio background
  const bgmRef = useRef(null);

  // Play background music hanya sekali saat komponen mount
  useEffect(() => {
    if (!bgmRef.current) {
      bgmRef.current = new Audio(audioFiles.bgm);
      bgmRef.current.loop = true;
      bgmRef.current.volume = 0.3;
      bgmRef.current.play().catch(() => {});
    }
    return () => {
      if (bgmRef.current) {
        bgmRef.current.pause();
        bgmRef.current.currentTime = 0;
      }
    };
  }, []);

  // Turunkan volume BGM saat audio narasi diputar, naikkan lagi setelah selesai
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (bgmRef.current) {
      bgmRef.current.volume = 0.08;
    }
    audioRef.current = new Audio(audioFiles[level]);
    audioRef.current.play();
    audioRef.current.onended = () => {
      if (bgmRef.current) {
        bgmRef.current.volume = 0.3;
      }
    };
  };

  const resetLevel = () => {
    setBallMoved(false);
    setForce(5);
    setMass(1);
    setShowResult(false);
    setReaction(false);
    setCollision(false);
    setShowModal(false);
    setModalStep(0);
    setIsTypingDone(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Level 1: Hukum Newton 1 (Kelembaman)
  const handleMoveBall = () => {
    setBallMoved(true);
    setTimeout(() => setShowModal(true), 800);
  };

  // Level 2: Hukum Newton 2 (F = m x a)
  const handleCalculate = () => {
    setShowResult(true);
    setTimeout(() => setShowModal(true), 800);
  };

  // Level 3: Hukum Newton 3 (Aksi-Reaksi) dengan pantulan
  const handleReaction = () => {
    setReaction(true);
    setTimeout(() => {
      setCollision(true); // trigger pantulan setelah tabrakan
      setTimeout(() => setShowModal(true), 700); // tampilkan modal setelah pantulan
    }, 900); // waktu tabrakan
  };

  // Penjelasan tiap level
  const explanations = {
    1: "Bola bergerak karena ada gaya yang bekerja padanya. Inilah Hukum Newton 1 (Kelembaman): Benda diam akan tetap diam, benda bergerak akan tetap bergerak lurus beraturan jika tidak ada gaya yang bekerja padanya.",
    2: `Percepatan bola: ${(force / mass).toFixed(2)} m/s². Hukum Newton 2: F = m × a. Semakin besar gaya, semakin besar percepatan; semakin besar massa, semakin kecil percepatan.`,
    3: "Kedua bola bertabrakan lalu memantul saling menjauh. Hukum Newton 3: Setiap aksi menimbulkan reaksi yang sama besar dan berlawanan arah.",
  };

  // Pertanyaan validasi tiap level
  const questions = {
    1: "Apa kamu tahu kenapa bola bisa bergerak setelah didorong?",
    2: "Apa kamu tahu kenapa percepatan bola bisa berubah-ubah?",
    3: "Apa kamu tahu kenapa kedua bola saling memantul setelah bertabrakan?",
  };

  return (
    <div className="p-4 bg-light rounded-4 shadow mx-auto" style={{ maxWidth: 500 }}>
      <ProgressBar now={level * 33.33} label={`Level ${level}/3`} className="mb-4" />

      {/* Level 1 */}
      {level === 1 && (
        <div>
          <h4 className="fw-bold text-primary mb-3">Level 1: Hukum Newton 1 (Kelembaman)</h4>
          <p>
            <b>Instruksi:</b> Dorong bola di bawah ini untuk membuktikan bahwa benda diam akan tetap diam jika tidak ada gaya yang bekerja padanya.
          </p>
          <div style={{ height: 80, marginBottom: 20 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "#4f8cff",
                position: "relative",
                left: ballMoved ? 300 : 0,
                transition: "left 0.8s cubic-bezier(.68,-0.55,.27,1.55)",
                boxShadow: "0 4px 16px rgba(79,140,255,0.2)",
                display: "inline-block"
              }}
            />
          </div>
          {!ballMoved && (
            <Button variant="primary" onClick={handleMoveBall}>
              Dorong Bola
            </Button>
          )}
          <div className="mt-3">
            <Button variant="secondary" size="sm" onClick={resetLevel}>
              Ulangi Level Ini
            </Button>
          </div>
        </div>
      )}

      {/* Level 2 */}
      {level === 2 && (
        <div>
          <h4 className="fw-bold text-success mb-3">Level 2: Hukum Newton 2 (F = m × a)</h4>
          <p>
            <b>Instruksi:</b> Atur besar gaya dan massa, lalu hitung percepatan bola!
          </p>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div>
              <label className="me-2">Gaya (F):</label>
              <input
                type="range"
                min={1}
                max={20}
                value={force}
                onChange={e => setForce(Number(e.target.value))}
                style={{ width: 100 }}
              />
              <span className="ms-2">{force} N</span>
            </div>
            <div className="ms-4">
              <label className="me-2">Massa (m):</label>
              <input
                type="range"
                min={1}
                max={10}
                value={mass}
                onChange={e => setMass(Number(e.target.value))}
                style={{ width: 80 }}
              />
              <span className="ms-2">{mass} kg</span>
            </div>
          </div>
          <div style={{ height: 80, marginBottom: 20 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "#34d399",
                position: "relative",
                left: showResult ? Math.min((force / mass) * 15, 300) : 0,
                transition: "left 0.8s cubic-bezier(.68,-0.55,.27,1.55)",
                boxShadow: "0 4px 16px rgba(52,211,153,0.2)",
                display: "inline-block"
              }}
            />
          </div>
          {!showResult && (
            <Button variant="success" onClick={handleCalculate}>
              Hitung Percepatan
            </Button>
          )}
          <div className="mt-3">
            <Button variant="secondary" size="sm" onClick={resetLevel}>
              Ulangi Level Ini
            </Button>
          </div>
        </div>
      )}

      {/* Level 3 */}
      {level === 3 && (
        <div>
          <h4 className="fw-bold text-warning mb-3">Level 3: Hukum Newton 3 (Aksi-Reaksi)</h4>
          <p>
            <b>Instruksi:</b> Klik tombol untuk membuat dua bola saling bertabrakan dan lihat aksi-reaksinya!
          </p>
          <div style={{ height: 80, marginBottom: 20, position: "relative" }}>
            {/* Bola kiri */}
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "#fbbf24",
                position: "absolute",
                left: !reaction ? 0 : !collision ? 160 : -80,
                top: 0,
                transition: "left 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
                zIndex: 2,
              }}
            />
            {/* Bola kanan */}
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "#f87171",
                position: "absolute",
                right: !reaction ? 0 : !collision ? 160 : -80,
                top: 0,
                transition: "right 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
                zIndex: 2,
              }}
            />
          </div>
          {!reaction && (
            <Button variant="warning" onClick={handleReaction}>
              Tabrakkan Bola
            </Button>
          )}
          <div className="mt-3">
            <Button variant="secondary" size="sm" onClick={resetLevel}>
              Ulangi Level Ini
            </Button>
          </div>
        </div>
      )}

      {/* Modal Validasi & Penjelasan */}
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setModalStep(0);
          setIsTypingDone(false);
        }}
        centered
        animation
      >
        <Modal.Body className="text-center">
          {modalStep === 0 && (
            <>
              <h5 className="mb-3">Pertanyaan</h5>
              <p>{questions[level]}</p>
              <Button
                variant="primary"
                className="me-2"
                onClick={() => setModalStep(1)}
              >
                Saya Tidak Tahu, Tampilkan Penjelasan
              </Button>
              <Button
                variant="outline-success"
                className="me-2"
                onClick={() => {
                  setShowModal(false);
                  setModalStep(0);
                  setIsTypingDone(false);
                }}
              >
                Saya Sudah Tahu
              </Button>
              <div className="mt-3">
                <label className="mb-2 fw-bold">Pilih Level:</label>
                <div>
                  {[1, 2, 3].map((lvl) => (
                    <Button
                      key={lvl}
                      variant={level === lvl ? "secondary" : "outline-secondary"}
                      className="mx-1"
                      onClick={() => {
                        setLevel(lvl);
                        setShowModal(false);
                        setModalStep(0);
                        setIsTypingDone(false);
                        resetLevel();
                      }}
                    >
                      Level {lvl}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
          {modalStep === 1 && (
            <>
              <h5 className="mb-3">Penjelasan</h5>
              <div className="mb-3" style={{ minHeight: 80 }}>
                <TypingText
                  text={explanations[level]}
                  onDone={() => {
                    setIsTypingDone(true);
                    playAudio();
                  }}
                />
              </div>
              <Button
                variant="success"
                disabled={!isTypingDone}
                onClick={() => {
                  setShowModal(false);
                  setModalStep(0);
                  setIsTypingDone(false);
                  if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                  }
                  // Tidak auto next, user bisa pilih level sendiri
                }}
              >
                Tutup Penjelasan
              </Button>
              <div className="mt-3">
                <label className="mb-2 fw-bold">Pilih Level:</label>
                <div>
                  {[1, 2, 3].map((lvl) => (
                    <Button
                      key={lvl}
                      variant={level === lvl ? "secondary" : "outline-secondary"}
                      className="mx-1"
                      onClick={() => {
                        setLevel(lvl);
                        setShowModal(false);
                        setModalStep(0);
                        setIsTypingDone(false);
                        resetLevel();
                      }}
                    >
                      Level {lvl}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}