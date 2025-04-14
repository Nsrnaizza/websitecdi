import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import DataRoleComponent from "../components/DataRoleComponent";

const DataRole = () => {
  return (
    <Container className="mt-4">
      {/* Judul Data Role dan Breadcrumb */}
      <div className="sticky-top bg-white" style={{ zIndex: 100, top: "50px", right: "80px", position: "relative" }}>
        <Row>
          <Col>
            <h1 className="fw-normal" style={{ fontSize: "20px" }}>
              Data Role
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Breadcrumb className="d-flex align-items-center" style={{ fontSize: "13px", padding: "1px" }}>
              <Breadcrumb.Item href="#" className="d-flex align-items-center">
                <FaHome className="me-0" size={12} />
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data Role</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </div>

      {/* Data Role Component */}
      <div className="mt-3">
        <DataRoleComponent />
      </div>
    </Container>
  );
};

export default DataRole;
