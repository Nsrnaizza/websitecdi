import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import { BsCalendarDate, BsPerson, BsTag } from "react-icons/bs"; // Import ikon

const ArticleHeader = ({ title, publishedAt, author, tags, image }) => {
  // Konversi `publishedAt` ke format "X hari yang lalu"
  const formattedDate = publishedAt
    ? formatDistanceToNow(parseISO(publishedAt), { addSuffix: true, locale: id })
    : "Tanggal tidak diketahui";

  return (
    <div>
      <h1>{title}</h1>

      {/* PublishedAt, Author, Tags dalam satu baris */}
      <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
        {/* PublishedAt */}
        <div className="d-flex align-items-center">
          <BsCalendarDate className="me-2 text-primary" />
          <span>{formattedDate}</span>
        </div>

        {/* Author */}
        <div className="d-flex align-items-center">
          <BsPerson className="me-2 text-primary" />
          <span>{author || "Tanpa Penulis"}</span>
        </div>

        {/* Tags */}
        <div className="d-flex align-items-center">
          <BsTag className="me-2 text-primary" />
          {tags && tags.length > 0 ? (
            <div className="d-flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="badge bg-primary">{tag}</span>
              ))}
            </div>
          ) : (
            <span className="text-muted">Tidak ada tag</span>
          )}
        </div>
      </div>

      {/* Tambahkan gambar di bawah title */}
      {image && (
        <div className="d-flex justify-content-center img-fluid">
        <img
          src={image}
          alt="Article"
          style={{
            maxWidth: "100%", // Maksimal selebar parent container
            width: "auto", // Ukuran tetap, bisa diubah sesuai kebutuhan
            height: "400px", // Agar tidak terdistorsi
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        />
        </div>
      )}
    </div>
  );
};

export default ArticleHeader;
