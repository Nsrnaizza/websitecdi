import { Container, Row, Col } from "react-bootstrap";
import ProgramSertifikasiComponent from "../components/ProgramSertifikasiComponent";

const ProgramSertifikasiPage = () => {
  return (
    <section className="d-flex flex-column min-vh-100">
      <Container className="py-5 my-auto">
        <Row className="justify-content-center">
          <Col md={30}>
            <ProgramSertifikasiComponent />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProgramSertifikasiPage;
