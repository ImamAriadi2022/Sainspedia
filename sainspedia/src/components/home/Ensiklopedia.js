import React, { useState } from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import Lottie from "react-lottie-player";
import energyAnim from "../../assets/animations/isac.json"; // Animasi Lottie untuk efek popup

const BIOGRAFI = `
Sir Isaac Newton (1643–1727) adalah seorang ilmuwan jenius asal Inggris yang mengubah wajah dunia melalui karya dan penemuannya. 
Sebagai fisikawan, matematikawan, astronom, dan filsuf, Newton dikenal sebagai tokoh sentral dalam revolusi ilmiah. 
Karya agungnya, "Philosophiæ Naturalis Principia Mathematica" (1687), merumuskan hukum gerak dan gravitasi universal — fondasi dari fisika klasik yang bertahan selama berabad-abad.

Tak hanya di bidang mekanika, Newton juga meneliti cahaya dan warna, memperkenalkan teori optika yang revolusioner serta menciptakan teleskop reflektor pertamanya. 
Di bidang matematika, ia secara independen mengembangkan kalkulus, yang kelak menjadi alat penting dalam ilmu pengetahuan modern.

Sebagai Presiden Royal Society, Newton dihormati dalam kehidupan maupun setelah wafatnya. 
Ia dimakamkan di Westminster Abbey — tempat peristirahatan tokoh-tokoh besar Inggris — sebagai simbol kehormatan atas warisan ilmiah yang tak tergantikan.
`;


function Ensiklopedia() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Card className="mb-4 shadow" data-aos="fade-up">
        <Row className="g-0 align-items-center">
          <Col md={3} className="text-center">
            <img
              src="/media/foto/newton.png"
              alt="Isaac Newton"
              className="img-fluid rounded-circle m-3"
              style={{ maxWidth: 150, border: "4px solid #fbbf24" }}
            />
            <Button
              variant="warning"
              className="mt-2 fw-bold mb-3"
              onClick={() => setShow(true)}
            >
              Lihat Biografi
            </Button>
          </Col>
          <Col md={9}>
            <Card.Body>
              <Card.Title className="fw-bold fs-3 mb-2">Sir Isaac Newton</Card.Title>
              <Card.Text>
                <span className="fw-semibold">Isaac Newton</span> (1643–1727) adalah ilmuwan Inggris yang dikenal sebagai bapak fisika klasik. Ia menemukan tiga hukum dasar tentang gerak benda yang sangat berpengaruh dalam dunia sains hingga saat ini.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* Modal Biografi dengan animasi */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
        animation={true}
        contentClassName="border-0"
      >
        <Modal.Body className="p-4 text-center">
          <Lottie
            loop
            play
            animationData={energyAnim}
            style={{ width: 120, height: 120, margin: "0 auto" }}
          />
          <h4 className="fw-bold mt-3 mb-2 text-warning">Biografi Sir Isaac Newton</h4>
          <p className="text-dark" style={{ whiteSpace: "pre-line" }}>
            {BIOGRAFI}
          </p>
          <Button variant="primary" onClick={() => setShow(false)}>
            Tutup
          </Button>
        </Modal.Body>
      </Modal>

      <h4 className="mb-3 text-primary">Ringkasan Hukum Newton</h4>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 border-primary shadow" data-aos="fade-up">
            <Card.Body>
              <Card.Title className="fw-bold text-primary">Hukum Newton 1</Card.Title>
              <Card.Text>
                <em>Hukum Kelembaman:</em> Suatu benda akan tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja padanya.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-success shadow" data-aos="fade-up" data-aos-delay="100">
            <Card.Body>
              <Card.Title className="fw-bold text-success">Hukum Newton 2</Card.Title>
              <Card.Text>
                <em>Hukum Percepatan:</em> Percepatan sebuah benda berbanding lurus dengan gaya total yang bekerja padanya dan berbanding terbalik dengan massanya (<b>F = m × a</b>).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-warning shadow" data-aos="fade-up" data-aos-delay="200">
            <Card.Body>
              <Card.Title className="fw-bold text-warning">Hukum Newton 3</Card.Title>
              <Card.Text>
                <em>Hukum Aksi-Reaksi:</em> Setiap aksi akan menimbulkan reaksi yang sama besar dan berlawanan arah.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Ensiklopedia;