import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../dist/css/main.css";

const GaleryComponent = () => {
  const dataGallery = [
    [
      { title: "Pelatihan & Sertifikasi Digital Marketing", image: "src/assets/img/galery/1 1.jpg"},
      { title: "Pelatihan & Sertifikasi Data Scient", image: "src/assets/img/galery/1 2.jpg"},
      { title: "Pelatihan & Sertifikasi Social Media Marketing", image: "src/assets/img/galery/1 3.jpg"},
      { title: "Pelatihan & Sertifikasi Digital Marketing", image: "src/assets/img/galery/1 4.jpg"},
      { title: "Pelatihan & Sertifikasi Content Creator", image: "src/assets/img/galery/1 5.jpg"},
      { title: "Sertifikasi Digital Marketing", image: "src/assets/img/galery/1 6.jpg" },
      { title: "Pelatihan & Sertifikasi Multimedia", image: "src/assets/img/galery/1 7.jpg"},
      { title: "Sertifikasi Operator Komputer Muda", image: "src/assets/img/galery/1 8.jpg"},
    ],
    [
      { title: "Sertifikasi Content Creator", image: "src/assets/img/galery/2 1.jpg" },
      { title: "Pelatihan Content Creator", image: "src/assets/img/galery/2 2.jpg"},
      { title: "Pelatihan Operator Komputer Muda", image: "src/assets/img/galery/2 3.jpg" },
      { title: "Sertifikasi Digital Marketing", image: "src/assets/img/galery/2 4.jpg"},
      { title: "Pelatihan & Sertifikasi Digital Marketing", image: "src/assets/img/galery/2 5.jpg"},
      { title: "Pelatihan & Sertifikasi Digital Marketing", image: "src/assets/img/galery/2 6.jpg"},
      { title: "Sertifikasi Digital Marketing", image: "src/assets/img/galery/2 7.jpg"},
      { title: "Digital Creative Talen...", image: "src/assets/img/galery/2 8.jpg"},
    ],
    [
      { title: "Sertifikasi Digital Marketing", image: "src/assets/img/galery/3 1.jpg"},
      { title: "Pelatihan Digital Marketing", image: "src/assets/img/galery/3 2.jpg"},
      { title: "Workshop", image: "src/assets/img/galery/3 3.jpg"},
      { title: "Sertifikasi Operator Kompu...", image: "src/assets/img/galery/3 4.jpg"},
      { title: "Pelatihan Operator Komputer Muda", image: "src/assets/img/galery/3 5.jpg"},
      { title: "Pelatihan Digital Marketing", image: "src/assets/img/galery/3 6.jpg"},
      { title: "Pelatihan Web Devloper", image: "src/assets/img/galery/3 7.jpg"},
      { title: "Prakerin SMKN 5 Semarang", image: "src/assets/img/galery/3 8.jpg"},
    ],
    [
      { title: "Pelatihan & Sertifikasi...", image: "src/assets/img/galery/4 1.jpg"},
      { title: "Pelatihan Komputer Muda", image: "src/assets/img/galery/4 2.jpg"},
      { title: "Assement Minat Bakat", image: "src/assets/img/galery/4 3.jpg"},
      { title: "Uji Sertifikasi", image: "src/assets/img/galery/4 4.jpg"},
      { title: "Pendampingan Guru", image: "src/assets/img/galery/4 5.jpg"},
      { title: "Sertifikasi Profesi", image: "src/assets/img/galery/4 6.jpg"},
      { title: "Kunjungan Industri", image: "src/assets/img/galery/4 7.jpg"},
      { title: "Kegiatan Prakerin", image: "src/assets/img/galery/4 8.jpg"},
    ],
    [
      { title: "Pelatihan & Sertifikasi", image: "src/assets/img/galery/5 1jpg"},
      { title: "In House Training", image: "src/assets/img/galery/5 2.jpg"},
      { title: "Pelatihan & Sertifikasi", image: "src/assets/img/galery/5 3.jpg"},
    ],
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = dataGallery.length;

  return (
    <Container className="mt-5">
      <h2 className="text-center text-primary mb-4">Galeri Pelatihan</h2>
      <Row>
        {dataGallery[currentPage].map((item, index) => (
          <Col md={3} key={index} className="mb-3 d-flex align-items-stretch">
            <Card className="h-100 w-100 shadow galery-item">
              <Card.Img variant="top" src={item.image} alt={item.title} className="img-fluid fixed-img" />
              {/* <Card.Body className="text-center"> */}
                <Card.Title className="text-center text-truncate-2 p-1 mt-0 mb-2 " style={{fontSize:"15px", font:"normal"}}>{item.title}</Card.Title>
              {/* </Card.Body> */}
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} className="me-2">
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button key={index} variant={currentPage === index ? "dark" : "outline-primary"} onClick={() => setCurrentPage(index)} className="mx-1">
            {index + 1}
          </Button>
        ))}
        <Button variant="primary" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages - 1} className="ms-2">
          Next
        </Button>
      </div>
    </Container>
  );
};

export default GaleryComponent;
