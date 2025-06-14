import React, { useState } from "react";
import NewtonVideoPlayer from "../components/video/NewtonVideoPlayer";
import NewtonVideoList from "../components/video/NewtonVideoList";

// Dummy data video
const videos = [
  {
    id: 1,
    title: "Hukum Newton 1: Kelembaman",
    url: "https://www.youtube.com/embed/nGknf3vuORw?si=2cuzU57tj6wR6vy3",
    thumb: "/media/images/newton1-thumb.png",
    desc: "Riwayat Hidup Ilmuan Sir Isaac Newton atau Sejarah Singkat Penemuan Hukum Newton menceritakan Biografi dari salah satu Ilmuan Fisika yang sangat terkenal dan namanya sering kita jumpai ada di dalam buku Paket/ cetak mata pelajaran fisika. Di biografi ilmuan fisika ini akan di bahas mengenai hukum Newton tentang Gerak dan hukum gravitasi Newton. Banyak sekali pengaruh Konsep Newton dalam kehidupan manusia dari zaman dahulu sampai sekarang.",
  },
  {
    id: 2,
    title: "Hukum gerak newton | Materi dan contoh penerapan hukum newton 1,2,3 dalam kehidupan sehari - hari",
    url: "https://www.youtube.com/embed/lXCQ6Mli6fc?si=kuSKKRhmnyBMIEwF",
    thumb: "/media/images/newton2-thumb.png",
    desc: "Materi Pembelajaran Fisika kali ini,membahas materi Fisika tentang Konsep Hukum Gerak Newton, Materi dan Contoh Penerapan Hukum 1 2 dan 3 Newton Dalam Kehidupan Sehari-hari dengan detail.",
  },
  {
    id: 3,
    title: "Hukum Gerak Newton (Dinamika Gerak Lurus) | Gaya-Gaya Yang Bekerja Pada Benda Bertumpuk",
    url: "https://www.youtube.com/embed/Hf-Ny7hqDYw?si=AZMtdtIFBHM62V29",
    thumb: "/media/images/newton3-thumb.png",
    desc: "Video Materi Pembelajaran Fisika kali ini, kita akan membahas materi Fisika tentang Konsep Hukum Newton tentang Gerak (Dinamika Gerak Lurus), yaitu  khususnya tentang Gaya- Gaya Yang Bekerja Pada Benda Bertumpuk  dengan detail.",
  },
];

export default function NewtonVideoPage() {
  const [selected, setSelected] = useState(videos[0]);

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-primary text-center">
        Video Pembelajaran Hukum Newton
      </h2>
      <div className="row">
        <div className="col-lg-8 mb-4">
          <NewtonVideoPlayer video={selected} />
        </div>
        <div className="col-lg-4">
          <NewtonVideoList
            videos={videos}
            selectedId={selected.id}
            onSelect={setSelected}
          />
        </div>
      </div>
    </div>
  );
}