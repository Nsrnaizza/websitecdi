import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { BsSearch, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import debounce from "lodash.debounce"; // Tambahkan library debounce
import CardArticles from "../components/CardArticles";
import HeroImage from "../assets/img/reguler.png";
import { getArticles, getCategories } from "../api/articleService";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const ArtikelPage = () => {
  let navigate = useNavigate();
  const location = useLocation(); // Gunakan useLocation untuk membaca query parameter dari URL
  const queryParams = new URLSearchParams(location.search);
  const categoryFromQuery = queryParams.get("category") || "Semua Kategori"; // Ambil kategori dari URL jika ada

  const [categories, setCategories] = useState(["Semua Kategori"]);
  const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery);
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const scrollRef = useRef(null);

  // Fetch artikel berdasarkan kategori & search query
  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      console.log("Fetching articles for category:", selectedCategory);
      console.log("Search Query:", searchQuery);

      const data = await getArticles(currentPage, 12, selectedCategory, searchQuery);
      console.log("Data dari API:", data);

      setArticles(data.articles || []);
      setTotalPages(data.totalPages || 1);
      setError(null);
    } catch (err) {
      console.error("Error fetching articles:", err);
      setError("Gagal memuat artikel");
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedCategory, searchQuery]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Fetch kategori saat halaman pertama kali dimuat
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryData = await getCategories();
        const categoryNames = categoryData.map((category) => category.name_category);
        setCategories(["Semua Kategori", ...categoryNames]);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories(["Semua Kategori"]);
      }
    };
    fetchCategories();
  }, []);

  // Update kategori ketika query parameter berubah
  useEffect(() => {
    if (categoryFromQuery) {
      setSelectedCategory(categoryFromQuery);
      setCurrentPage(1);
    }
  }, [categoryFromQuery]);

  const handleCategoryClick = (category) => {
    if (selectedCategory !== category) {
      navigate(`?category=${encodeURIComponent(category)}`); // Ubah URL agar sesuai dengan kategori yang dipilih
    }
  };

  const scrollCategory = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    debounceSearch(e.target.value);
  };

  // Debounce untuk menghindari pemanggilan API berulang saat mengetik pencarian
  const debounceSearch = useCallback(
    debounce((query) => {
      setSearchQuery(query);
      setCurrentPage(1);
      fetchArticles(); // Tambahkan ini agar data diperbarui langsung setelah debounce selesai
    }, 500),
    [fetchArticles]
  );
  
  const handleSearch = () => {
    setCurrentPage(1);
    fetchArticles(); // Pastikan fetchArticles dipanggil ulang setelah pencarian
  };
  

  // Gunakan useMemo untuk mengoptimasi pagination rendering
  const paginationButtons = useMemo(
    () =>
      Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          variant={currentPage === index + 1 ? "primary" : "light"}
          onClick={() => setCurrentPage(index + 1)}
          className="mx-1"
        >
          {index + 1}
        </Button>
      )),
    [totalPages, currentPage]
  );

  return (
    <div className="artikelpage">
      <header className="w-100 min-vh-100 d-flex align-items-center hero-section">
        <Container>
        <Row className="d-flex align-items-center">
            {/* Animasi teks muncul dari kiri ke kanan */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Mulai dari luar layar kiri
                animate={{ opacity: 1, x: 0 }} // Muncul ke posisi normal
                transition={{ duration: 0.8, ease: "easeOut" }} // Durasi 0.8 detik
              >
                <h1 className="title">Artikel</h1>
                <p className="description">
                  Artikel, tips, dan checklist <br />
                  menarik yang disiapkan bagi bisnis Anda
                </p>
              </motion.div>
            </Col>

            {/* Animasi gambar muncul dari kanan ke kiri */}
            <Col lg={6} className="text-center">
              <motion.img
                src={HeroImage}
                alt="Artikel"
                className="img-fluid hero-img"
                initial={{ opacity: 0, x: 100 }} // Mulai dari luar layar kanan
                animate={{ opacity: 1, x: 0 }} // Muncul ke posisi normal
                transition={{ duration: 0.8, ease: "easeOut" }} // Durasi 0.8 detik
              />
            </Col>
          </Row>
          
          <Row className="mt-4">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <InputGroup className="search-bar">
                  <Form.Control
                    placeholder="Pencarian"
                    aria-label="Pencarian"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <Button variant="light" onClick={handleSearch}>
                    <BsSearch style={{ color: "#6f42c1" }} />
                  </Button>
                </InputGroup>
              </motion.div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <div className="d-flex align-items-center">
                <Button variant="light" className="me-2" onClick={() => scrollCategory("left")}>
                  <BsChevronLeft />
                </Button>
                <div
                  className="category-scroll d-flex align-items-center"
                  ref={scrollRef}
                  style={{ overflowX: "auto", whiteSpace: "nowrap" }}
                >
                  {categories.map((category, index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }} // Delay tiap kategori
                    >
                      <Button
                        variant={selectedCategory === category ? "primary" : "light"}
                        className={`fw-bold mx-2 ${selectedCategory === category ? "text-white" : "text-dark"}`}
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </Button>
                    </motion.div>
                  ))}
                </div>
                <Button variant="light" className="ms-2" onClick={() => scrollCategory("right")}>
                  <BsChevronRight />
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {loading ? (
              <Col className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
                <p>Memuat artikel...</p>
              </Col>
            ) : error ? (
              <Col className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
                <p>{error}</p>
              </Col>
            ) : articles.length > 0 ? (
              articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <Col className="my-3">
                  <CardArticles
                      id={article.id}
                      image={article.image_url}
                      title={article.title}
                      publishedAt={article.published_at}
                      author={
                        <Link
                          to={`/articles/author?author=${encodeURIComponent(article.contributor?.name_contributor || "Tidak ada kontributor")}`}
                          style={{
                            textDecoration: "none",
                            color: "blue",
                            cursor: "pointer",
                            fontWeight: "normal",
                            transition: "font-weight 0.2s ease-in-out",
                          }}
                          onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
                          onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
                        >
                          {article.contributor?.name_contributor || "Tidak ada kontributor"}
                        </Link>
                      }
                      category={article.category?.name_category || "Tidak ada kategori"}
                    />
                  </Col>
                </motion.div>
              ))
            ) : (
              <Col className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
                <p>Tidak ada artikel untuk kategori ini.</p>
              </Col>
            )}
          </Row>

          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <Button variant="light" disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className="me-2">
                <BsChevronLeft />
              </Button>
              {paginationButtons}
              <Button variant="light" disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} className="ms-2">
                <BsChevronRight />
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default ArtikelPage;
