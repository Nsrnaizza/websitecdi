import CorporateProgram from "../components/CorporateProgramComponent";
import { Container, Row, Col } from "react-bootstrap";

const CorporateProgramPage = () => {
  return (
    <section className="d-flex flex-column min-vh-100">
      <Container className="py-5 my-auto">
        <Row className="justify-content-center">
          <Col md={30}>
            <CorporateProgram />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CorporateProgramPage;
