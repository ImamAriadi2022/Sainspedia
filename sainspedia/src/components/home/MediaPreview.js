import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MediaPreview() {
  const navigate = useNavigate();

  return (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card h-100 shadow-sm text-center">
          {/* Thumbnail Video */}
          <div style={{
            background: "linear-gradient(135deg, #4f8cff 60%, #6ee7ff 100%)",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            padding: "24px 0"
          }}>
            <img
              src="/media/images/video-thumb.png"
              alt="Video Pembelajaran"
              style={{ width: 500, height: 300 }}
            />
          </div>
          <div className="card-body bg-primary text-white rounded-bottom">
            <i className="bi bi-film display-5 mb-2"></i>
            <h5 className="card-title fw-bold">Video Pembelajaran</h5>
            <p className="card-text">
              Tonton video interaktif untuk memahami konsep sains dengan mudah.
            </p>
            <Button
              variant="light"
              className="fw-bold"
              onClick={() => navigate("/videopembelajaran")}
            >
              Lihat Detail
            </Button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card h-100 shadow-sm text-center">
          {/* Thumbnail Game/Animasi */}
          <div style={{
            background: "linear-gradient(135deg, #34d399 60%, #6ee7b7 100%)",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            padding: "24px 0"
          }}>
            <img
              src="/media/images/gameInteraktif.png"
              alt="Game & Animasi Interaktif"
              style={{ width: 500, height: 300 }}
            />
          </div>
          <div className="card-body bg-success text-white rounded-bottom">
            <i className="bi bi-controller display-5 mb-2"></i>
            <h5 className="card-title fw-bold">Game & Animasi Interaktif</h5>
            <p className="card-text">
              Belajar sambil bermain dengan animasi dan audio interaktif seperti game!
            </p>
            <Button
              variant="light"
              className="fw-bold"
              onClick={() => navigate("/gamebelajar")}
            >
              Lihat Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaPreview;