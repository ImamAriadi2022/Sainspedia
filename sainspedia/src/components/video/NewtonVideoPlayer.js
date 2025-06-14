import React from "react";

export default function NewtonVideoPlayer({ video }) {
  if (!video) return null;
  return (
    <div className="card shadow mb-3">
      <div className="ratio ratio-16x9">
        <iframe
          src={video.url}
          title={video.title}
          allowFullScreen
          frameBorder="0"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold">{video.title}</h5>
        <p className="card-text">{video.desc}</p>
      </div>
    </div>
  );
}