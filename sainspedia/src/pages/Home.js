import React from "react";
import FeatureCard from "../components/home/FeatureCard";
import MediaPreview from "../components/home/MediaPreview";
import QuizHighlight from "../components/home/QuizHighlight";
import Ensiklopedia from "../components/home/Ensiklopedia";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="p-5 mb-4 rounded-4 text-white shadow"
        style={{
          background: "linear-gradient(90deg, #4f8cff 60%, #6ee7ff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h1 className="display-4 fw-bold mb-2">
          Selamat Datang di <span className="text-warning">Sainspedia</span>!
        </h1>
        <p className="lead mb-0">
          Platform edukasi sains interaktif berbasis media audio, video, animasi, dan kuis seru.<br />
          Belajar sains jadi lebih mudah, menyenangkan, dan penuh warna!
        </p>
        <div
          style={{
            position: "absolute",
            right: -60,
            bottom: -60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            zIndex: 0,
          }}
        ></div>
      </div>

        {/* Ensiklopedia Newton */}
      <Ensiklopedia />

      {/* Fitur Utama */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <FeatureCard
            icon="bi bi-lightbulb-fill"
            title="Materi Interaktif"
            desc="Penjelasan sains dasar dengan ilustrasi, audio, dan animasi."
            color="primary"
          />
        </div>
        <div className="col-md-4">
          <FeatureCard
            icon="bi bi-play-circle-fill"
            title="Media Edukatif"
            desc="Audio narasi & video eksperimen untuk memperjelas konsep."
            color="success"
          />
        </div>
        <div className="col-md-4">
          <FeatureCard
            icon="bi bi-patch-question-fill"
            title="Kuis Seru"
            desc="Uji pemahamanmu lewat kuis interaktif dengan feedback langsung."
            color="warning"
          />
        </div>
      </div>

      {/* Media Preview Section */}
      <div
        className="p-4 rounded-4 mb-5"
        style={{
          background: "linear-gradient(90deg, #fbbf24 40%, #fcd34d 100%)",
        }}
      >
        <h3 className="mb-3 text-dark fw-bold">Preview Media Pembelajaran</h3>
        <MediaPreview />
      </div>

      {/* Quiz Highlight Section */}
      <div className="my-5">
        <QuizHighlight />
      </div>
    </div>
  );
}

export default Home;