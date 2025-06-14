import React from "react";
import Lottie from "react-lottie-player";
import energyAnim from "../../assets/animations/energy.json"; // Ganti dengan file animasi Lottie Anda

const mediaList = [
  {
    type: "audio",
    title: "Audio Narasi: Gaya & Gerak",
    src: "/media/audio/gaya-dan-gerak.mp3",
    desc: "Penjelasan materi gaya & gerak dengan suara narator.",
    icon: "bi bi-mic-fill",
    bg: "success",
  },
  {
    type: "video",
    title: "Video Eksperimen: Cahaya",
    src: "/media/video/eksperimen-cahaya.mp4",
    desc: "Eksperimen sederhana untuk memahami sifat cahaya.",
    icon: "bi bi-film",
    bg: "danger",
  },
];

function MediaPreview() {
  return (
    <div className="row g-4">
      {mediaList.map((media, idx) => (
        <div className="col-md-4" key={idx}>
          <div className="card h-100 shadow-sm">
            <div className={`card-header bg-${media.bg} text-white text-center`}>
              <i className={`${media.icon} display-6`}></i>
              <div>{media.title}</div>
            </div>
            <div className="card-body text-center">
              {media.type === "audio" && (
                <audio controls>
                  <source src={media.src} type="audio/mp3" />
                  Browser Anda tidak mendukung audio.
                </audio>
              )}
              {media.type === "video" && (
                <video width="100%" height="160" controls>
                  <source src={media.src} type="video/mp4" />
                  Browser Anda tidak mendukung video.
                </video>
              )}
              <p className="mt-2 mb-0">{media.desc}</p>
            </div>
          </div>
        </div>
      ))}
      {/* Animasi Interaktif */}
      <div className="col-md-4">
        <div className="card h-100 shadow-sm">
          <div className="card-header bg-info text-white text-center">
            <i className="bi bi-stars display-6"></i>
            <div>Animasi Interaktif: Energi</div>
          </div>
          <div className="card-body text-center">
            <Lottie
              loop
              play
              animationData={energyAnim}
              style={{ width: 180, height: 180, margin: "0 auto" }}
            />
            <p className="mt-2 mb-0">
              Animasi interaktif untuk memahami konsep energi panas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaPreview;