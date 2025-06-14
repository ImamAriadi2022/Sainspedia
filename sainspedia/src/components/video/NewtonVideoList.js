import React from "react";

export default function NewtonVideoList({ videos, selectedId, onSelect }) {
  return (
    <div>
      <h6 className="fw-bold mb-3">Video Lainnya</h6>
      {videos.map((vid) => (
        <div
          key={vid.id}
          className={`card mb-3 shadow-sm ${vid.id === selectedId ? "border-primary" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(vid)}
        >
          <div className="row g-0 align-items-center">
            <div className="col-4">
              <img
                src={vid.thumb}
                alt={vid.title}
                className="img-fluid rounded-start"
                style={{ aspectRatio: "16/9", objectFit: "cover" }}
              />
            </div>
            <div className="col-8">
              <div className="card-body py-2 px-3">
                <div className="fw-semibold small">{vid.title}</div>
                <div className="text-muted small text-truncate">{vid.desc}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}