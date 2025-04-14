import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import Breadcrumb from "../components/Breadcrumb";
import ArticleHeader from "../components/ArticleHeader";
import ArticleContent from "../components/ArticleContent";
import ArticleSidebar from "../components/ArticleSidebar";
import CardArticles from "../components/CardArticles"; // Import komponen Card
import { getArticleById } from "../api/articleService"; // Import fungsi API

const DetailArticle = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [article, setArticle] = useState(null);
  const [recommendedArticles, setRecommendedArticles] = useState([]); // State untuk artikel serupa

  useEffect(() => {
    const fetchArticle = async () => {
      const data = await getArticleById(id);
      setArticle(data);
      setRecommendedArticles(data.recommended || []); // Ambil data rekomendasi
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return <p>Loading...</p>; // Tampilkan loading jika data belum ada
  }

  // CSS sebagai objek di dalam file
  const styles = {
    container: {
      paddingTop: "80px",
    },
    sidebarScroll: {
      position: "sticky",
      top: "80px",
      maxHeight: "calc(100vh - 120px)",
      overflowY: "auto",
      paddingRight: "10px",
    },
  };

  return (
    <div className="mt-4 container-md" style={styles.container}>
      {/* Animasi Breadcrumb muncul dulu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Breadcrumb
          path={[
            { label: "Beranda", to: "/" },
            { label: "Artikel", to: "/artikel" },
          ]}
          current={article.title}
        />
      </motion.div>

      {/* Layout responsif dengan Bootstrap */}
      <Row className="d-flex flex-column flex-lg-row">
        {/* Konten utama (di layar kecil tetap di atas sidebar) */}
        <Col lg={9} className="order-1 order-lg-0">
          {/* Animasi Header Artikel muncul setelah Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ArticleHeader
              title={article.title}
              publishedAt={article.published_at}
              author={article.contributor?.name_contributor || null}
              tags={article.tags}
              image={article.image_url}
              category={article.category?.name_category || null}
            />
          </motion.div>

          {/* Animasi Konten Artikel muncul setelah Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ArticleContent content={article.content} />
          </motion.div>

          {/* Artikel Serupa dalam Grid */}
          {recommendedArticles.length > 0 && (
            <>
              <h5 className="text-start fw-bold mt-4">Artikel Serupa</h5>
              <Row>
                {recommendedArticles.map((article) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Col lg={4} md={6} xs={12} className="mb-3">
                      <CardArticles
                        id={article.id}
                        image={article.image_url}
                        title={article.title}
                        publishedAt={article.published_at}
                        author={article.contributor ? article.contributor.name_contributor : "Tidak diketahui"}
                        category={article.category ? article.category.name_category : "Tidak ada kategori"}
                      />
                    </Col>
                  </motion.div>
                ))}
              </Row>
            </>
          )}
        </Col>

        {/* Sidebar dengan animasi muncul dari kanan ke kiri */}
        <Col lg={3} className="order-2 order-lg-1">
          <motion.div
            style={styles.sidebarScroll}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <ArticleSidebar />
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default DetailArticle;
