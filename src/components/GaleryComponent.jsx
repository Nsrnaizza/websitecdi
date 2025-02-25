import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const GalleryComponent = () => {
  const dataGallery = [
    {
      title: "Pelatihan & Sertifikasi Digital Marketing",
      image: "/path/to/image1.jpg",
      subtitle: "UNIVERSITAS PGRI SEMARANG",
      date: "2 - 3 Januari 2025",
    },
    {
      title: "Pelatihan & Sertifikasi Data Scient",
      image: "/path/to/image2.jpg",
      subtitle: "FISIP UNDIP",
      date: "30 November 2024",
    },
    {
      title: "Pelatihan & Sertifikasi Social Media Marketing",
      image: "/path/to/image3.jpg",
      subtitle: "FISIP UNDIP",
      date: "8 Oktober 2024",
    },
    {
      title: "Pelatihan & Sertifikasi Digital Marketing",
      image: "/path/to/image4.jpg",
      subtitle: "FISIP UNDIP",
      date: "15-16 September 2024",
    },
  ];

  return (
    <Container className="mt-5">
      <Row>
        {dataGallery.map((item, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                className="img-fluid"
              />
              <Card.Body className="text-center">
                <Card.Title className="text-primary">
                  {item.title}
                </Card.Title>
                <Card.Text className="text-secondary">
                  {item.subtitle}
                  <br />
                  <small>{item.date}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryComponent;
