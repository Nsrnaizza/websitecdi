import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import DashboardComponent from "../components/DashboardComponent";
import { useState } from "react";

const Dashboard = () => {
  const [timeRange] = useState("Seminggu Terakhir");

  return (
    <Container className="mt-4">
      {/* Judul Dashboard dan Breadcrumb */}
      <div className="sticky-top bg-white" style={{ zIndex: 100, top: "50px", right: "80px", position: "relative" }}>
        <Row>
          <Col>
            <h1 className="fw-normal" style={{ fontSize: "20px" }}>
              Dashboard
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Breadcrumb className="d-flex align-items-center" style={{ fontSize: "13px", padding: "1px" }}>
              <Breadcrumb.Item href="#" className="d-flex align-items-center">
                <FaHome className="me-0" size={12} />
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </div>

      {/* Time Range Selector */}
      <DashboardComponent timeRange={timeRange} />
    </Container>
  );
};

export default Dashboard;
