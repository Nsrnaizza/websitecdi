import PropTypes from "prop-types";
import { BsPerson, BsTag, BsCalendarDate } from "react-icons/bs"; // Import ikon
import { Link } from "react-router-dom";
import { formatDistanceToNow, parseISO } from "date-fns"; // Import date-fns
import { id as localeID } from "date-fns/locale"; // Gunakan alias untuk locale ID
import { motion } from "framer-motion"; // Import framer-motion

const CardArticles = ({ id, image, title, publishedAt, author, category }) => {
  // Konversi `publishedAt` ke format "X hari yang lalu"
  const formattedDate = publishedAt
    ? formatDistanceToNow(parseISO(publishedAt), { addSuffix: true, locale: localeID }) // Gunakan locale dengan alias
    : "Tanggal tidak diketahui";

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="card-component border rounded shadow-sm h-100"
      style={{
        borderRadius: "25px",
        overflow: "hidden",
        transition: "all 0.2s ease-in-out",
        backgroundColor: "white", // Tambahkan warna putih
      }}
    >
      <Link to={`/detailartikel/${id}`} className="text-decoration-none text-dark">
        <div className="card-image-wrapper text-center mb-2">
          <img src={image || "https://via.placeholder.com/150"} alt={title || "Judul Tidak Tersedia"} className="card-image img-fluid rounded" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
        </div>
        <div className="px-3 pb-3">
          <h5 className="mt-2 text-truncate" title={title}>
            {title || "Judul Tidak Tersedia"}
          </h5>
        </div>
      </Link>

      <div className="px-3 pb-3">
        {/* PublishedAt dengan ikon */}
        <div className="d-flex align-items-center text-muted small">
          <BsCalendarDate className="me-1 text-primary" />
          <span>{formattedDate}</span>
        </div>

        {/* Category */}
        {category && (
          <div className="d-flex align-items-center mt-1">
            <BsTag className="me-1 text-secondary" />
            <span className="text-secondary small">{category}</span>
          </div>
        )}

        {/* Author */}
        {author && (
          <div className="d-flex align-items-center mt-1">
            <BsPerson className="me-1 text-primary" />
            <span className="text-primary fw-semibold small">{author}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

CardArticles.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

export default CardArticles;
