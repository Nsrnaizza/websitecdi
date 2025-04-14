import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { getCategories, getRecommendedArticles } from "../api/articleService";
import CardArticles from "./CardArticles";
import { useParams } from "react-router-dom";

const ArticleSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [recommendedArticles, setRecommendedArticles] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate(); // Gunakan navigate untuk pindah halaman

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await getCategories();
        const categoryNames = categoryData.map((category) => category.name_category);
        setCategories(categoryNames);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories(["Tidak ada kategori"]);
      }
    };

    const fetchRecommendedArticles = async () => {
      if (!id) return;
      try {
        const articles = await getRecommendedArticles(id);
        setRecommendedArticles(articles);
      } catch (err) {
        console.error("Error fetching recommended articles:", err);
      }
    };

    fetchCategories();
    fetchRecommendedArticles();
  }, [id]);

  // Fungsi untuk menangani klik kategori
  const handleCategoryClick = (category) => {
    navigate(`/artikel?category=${encodeURIComponent(category)}`);
  };

  return (
    <aside style={{ padding: "20px" }}>
      {/* Kategori */}
      <h5 className="text-start fw-bold">Kategori</h5>
      <ul className="list-unstyled">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(category)}
              style={{
                color: "#6c757d", // Warna teks default
                cursor: "pointer",
                transition: "color 0.3s ease-in-out, font-weight 0.3s ease-in-out", // Efek transisi untuk warna dan bold
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#6F2DA8"; // Ubah warna saat hover
                e.target.style.fontWeight = "bold"; // Jadikan teks bold saat hover
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#6c757d"; // Kembalikan warna asli saat tidak hover
                e.target.style.fontWeight = "normal"; // Kembalikan font normal saat tidak hover
              }}
            >
              {category}
            </li>
          ))
        ) : (
          <li className="text-muted">Memuat kategori...</li>
        )}
      </ul>

      {/* Artikel Serupa */}
      <h5 className="text-start fw-bold mt-4">Artikel Serupa</h5>
      {recommendedArticles.length > 0 ? (
        recommendedArticles.map((article) => (
          <div key={article.id} className="py-3">
            <CardArticles
              id={article.id}
              image={article.image_url}
              title={article.title}
              publishedAt={article.published_at}
              author={article.contributor ? article.contributor.name_contributor : "Tidak diketahui"}
              category={article.category ? article.category.name_category : "Tidak ada kategori"}
            />
          </div>
        ))
      ) : null}
    </aside>
  );
};

export default ArticleSidebar;
