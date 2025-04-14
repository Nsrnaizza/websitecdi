import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip as ChartTooltip } from "chart.js";
import { motion } from "framer-motion"; // Import Framer Motion
import PropTypes from "prop-types"; // Import PropTypes for props validation
import { FaBookOpen, FaLaptop, FaBookReader, FaUserGraduate, FaUser, FaUserShield, FaUsers } from "react-icons/fa"; // Import icons

// Registrasi komponen Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, ChartTooltip);

import { useState } from "react"; // Import useState

const DashboardComponent = ({ timeRange: initialTimeRange }) => {
  const [timeRange, setTimeRange] = useState(initialTimeRange); // Define state for timeRange
  // Data statistik untuk chart
  const dataSeminggu = {
    labels: ["12/03/25", "13/03/25", "14/03/25", "15/03/25", "16/03/25", "17/03/25", "18/03/25", "19/03/25"],
    datasets: [
      { label: "Semua", data: [6, 4, 3, 2, 1, 2, 3, 2], borderColor: "green", pointBackgroundColor: "green" },
      { label: "Admin", data: [2, 1, 1, 1, 0, 0, 2, 1], borderColor: "red", pointBackgroundColor: "red" },
      { label: "Member", data: [4, 3, 2, 1, 1, 2, 1, 2], borderColor: "blue", pointBackgroundColor: "blue" },
    ],
  };

  const dataSebulan = {
    labels: [
      "17/02/25",
      "18/02/25",
      "19/02/25",
      "20/02/25",
      "21/02/25",
      "22/02/25",
      "23/02/25",
      "24/02/25",
      "25/02/25",
      "26/02/25",
      "27/02/25",
      "28/02/25",
      "01/03/25",
      "02/03/25",
      "03/03/25",
      "04/03/25",
      "05/03/25",
      "06/03/25",
      "07/03/25",
      "08/03/25",
      "09/03/25",
      "10/03/25",
      "11/03/25",
      "12/03/25",
      "13/03/25",
      "14/03/25",
      "15/03/25",
      "16/03/25",
      "17/03/25",
      "18/03/25",
      "19/03/25",
    ],
    datasets: [
      { label: "Semua", data: [30, 25, 20, 15, 10, 5, 10, 15, 20, 25, 30, 25, 20, 15, 10, 5, 10, 15, 20, 25, 30, 25, 20, 15, 10, 5, 10, 15, 20, 25, 30], borderColor: "green", pointBackgroundColor: "green" },
      { label: "Admin", data: [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5], borderColor: "red", pointBackgroundColor: "red" },
      { label: "Member", data: [25, 21, 17, 13, 9, 5, 9, 13, 17, 21, 25, 21, 17, 13, 9, 5, 9, 13, 17, 21, 25, 21, 17, 13, 9, 5, 9, 13, 17, 21, 25], borderColor: "blue", pointBackgroundColor: "blue" },
    ],
  };

  // Konfigurasi Chart.js
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 12 },
        bodyFont: { size: 14 },
        bodySpacing: 5,
        padding: 10,
        displayColors: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  // Variants untuk animasi kartu statistik (removed unused cardVariants)

  return (
    <Container className="mt-4 p-3" style={{ marginLeft: "-110px", marginTop: "100px", width: "100%" }}>
      {/* Statistik Materi */}
      <div className="stats-row" style={{ marginTop: "5px" }}>
        {[
          { icon: <FaBookOpen />, bg: "bg-purple", number: 186, title: "Materi E-Course" },
          { icon: <FaLaptop />, bg: "bg-blue", number: 71, title: "Materi E-Learning" },
          { icon: <FaBookReader />, bg: "bg-green", number: 23, title: "Materi E-Library" },
          { icon: <FaUserGraduate />, bg: "bg-orange", number: 42, title: "Materi E-Competence" },
        ].map((item, index) => (
          <div className="stat-card" key={index}>
            <div className={`stat-icon ${item.bg}`}>{item.icon}</div>
            <div className="stat-info">
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Statistik Pengunjung di bawah materi (sejajar ke kiri) */}
      <Row className="mt-4">
        <Col md={8}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card className="p-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Grafik Pengunjung</h5>

                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }}>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" className="shadow-sm">
                      {timeRange}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setTimeRange("Seminggu Terakhir")}>Seminggu Terakhir</Dropdown.Item>
                      <Dropdown.Item onClick={() => setTimeRange("Sebulan Terakhir")}>Sebulan Terakhir</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </motion.div>
              </div>

              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                <Line data={timeRange === "Seminggu Terakhir" ? dataSeminggu : dataSebulan} options={options} />
              </motion.div>
            </Card>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card className="p-3 shadow-sm">
              <h5 className="mb-3">Statistik Pengunjung</h5>
              <div className="visitor-summary">
                <div className="d-flex align-items-center mb-3">
                  <FaUser className="me-2 text-primary" />
                  <div>
                    <p className="mb-0">Total Visitors</p>
                    <h4>1,245</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaUserShield className="me-2 text-danger" />
                  <div>
                    <p className="mb-0">Admin Visitors</p>
                    <h4>32</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaUsers className="me-2 text-success" />
                  <div>
                    <p className="mb-0">Member Visitors</p>
                    <h4>1,213</h4>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Col>
      </Row>

      {/* CSS Styles */}
      <style>{`
        /* Stats Cards */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 10px;
        }

        .stat-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          color: white;
          font-size: 1.2rem;
        }

        .bg-purple {
          background: linear-gradient(135deg, #9c27b0, #673ab7);
        }

        .bg-blue {
          background: linear-gradient(135deg, #2196f3, #3f51b5);
        }

        .bg-green {
          background: linear-gradient(135deg, #4caf50, #2e7d32);
        }

        .bg-orange {
          background: linear-gradient(135deg, #ff9800, #f57c00);
        }

        .stat-info h3 {
          margin: 0;
          font-size: 1.8rem;
          color: #333;
        }

        .stat-info p {
          margin: 5px 0 0;
          color: #666;
          font-size: 0.9rem;
        }

        /* Visitor Stats */
        .visitor-stats-row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 20px;
        }

        .visitor-summary,
        .visitor-chart {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .visitor-summary h3,
        .visitor-chart h3 {
          margin-top: 0;
          color: #3a0057;
          font-size: 1.2rem;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }

        .visitor-counts {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 20px;
        }

        .visitor-count {
          display: flex;
          align-items: center;
          padding: 15px;
          background: #f9f9f9;
          border-radius: 8px;
        }

        .visitor-count svg {
          font-size: 1.5rem;
          color: #3a0057;
          margin-right: 15px;
        }

        .visitor-count h4 {
          margin: 5px 0 0;
          font-size: 1.4rem;
          color: #333;
        }

        .visitor-count p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }

        /* Chart */
        .chart-container {
          display: flex;
          height: 200px;
          align-items: flex-end;
          gap: 15px;
          margin-top: 20px;
        }

        .chart-bar {
          flex: 1;
          background: linear-gradient(to top, #3a0057, #6f42c1);
          border-radius: 5px 5px 0 0;
          position: relative;
          transition: height 0.5s ease;
        }

        .chart-bar span {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          color: #666;
        }

        @media (max-width: 992px) {
          .visitor-stats-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .stats-row {
            grid-template-columns: 1fr 1fr;
          }

          .visitor-counts {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .stats-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Container>
  );
};
DashboardComponent.propTypes = {
  timeRange: PropTypes.string.isRequired, // Validate that timeRange is a required string
};

export default DashboardComponent;
