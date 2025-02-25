import RegularProgram from "../components/RegularProgramComponent";
import { Container, Row, Col } from "react-bootstrap";

const RegularProgramPage = () => {
  return (
    <section className="d-flex flex-column min-vh-100">
      <Container className="py-5 my-auto">
        <Row className="justify-content-center">
          <Col md={30}>
            <RegularProgram />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RegularProgramPage;
