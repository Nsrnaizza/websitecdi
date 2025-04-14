import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getGalleries } from "../api/GalleriesApi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GalleryItem = ({ item, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Col md={3} sm={6} xs={12} key={index} className="mb-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }
          }
        }}
        whileHover={{ scale: 1.03 }}
        className="h-100"
      >
        <div className="gallery-card shadow-sm rounded-lg overflow-hidden h-100">
          <div className="gallery-image-container">
            <img 
              src={item.image_url} 
              alt={item.title} 
              className="img-fluid w-100 gallery-image"
            />
            <div className="gallery-overlay"></div>
          </div>
          <div className="p-3">
            <h5 className="gallery-title mb-0">{item.title}</h5>
          </div>
        </div>
      </motion.div>
    </Col>
  );
};

const GaleryComponent = () => {
  const [galleries, setGalleries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(galleries.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGalleries();
      setGalleries(data);
    };
    fetchData();
  }, []);

  return (
    <Container className="py-5">
      <motion.h2 
        className="text-center mb-5 gallery-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Galeri Pelatihan
      </motion.h2>

      <Row className="g-4">
        {galleries
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((item, index) => (
            <GalleryItem 
              key={`${item.id}-${index}`} 
              item={item} 
              index={index % itemsPerPage} 
            />
          ))
        }
      </Row>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div 
          className="d-flex justify-content-center mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
            className="page-button me-2"
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`page-button mx-1 ${currentPage === index ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className="page-button ms-2"
          >
            <FaChevronRight />
          </button>
        </motion.div>
      )}
    </Container>
  );
};

export default GaleryComponent;