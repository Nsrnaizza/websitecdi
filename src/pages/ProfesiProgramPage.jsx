import ProfesiProgram from "../components/ProfesiProgramComponent";
import { Container, Row, Col } from "react-bootstrap";

const ProfesiProgramPage = () => {
  return (
    <section className="d-flex flex-column min-vh-100">
      <Container className="py-5 my-auto">
        <Row className="justify-content-center">
          <Col md={30}>
            <ProfesiProgram />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProfesiProgramPage;
