import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { BsSearch, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import debounce from "lodash.debounce";
import CardArticles from "../components/CardArticles";
import HeroImage from "../assets/img/reguler.png";
import { getArticlesByAuthor, getCategories } from "../api/articleService";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const ArticleAuthor = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const authorFromQuery = queryParams.get("author") || "Semua Penulis";

  const [categories, setCategories] = useState(["Semua Kategori"]);
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const scrollRef = useRef(null);

  // Fetch artikel berdasarkan author, kategori, dan search query
  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      console.log("Fetching articles for author:", authorFromQuery);
      console.log("Category:", selectedCategory);
      console.log("Search Query:", searchQuery);

      const data = await getArticlesByAuthor(authorFromQuery, currentPage, 12);
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
  }, [currentPage, authorFromQuery, selectedCategory, searchQuery]);

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

  const handleCategoryClick = (category) => {
    if (selectedCategory !== category) {
      setSelectedCategory(category);
      setCurrentPage(1);
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

  const debounceSearch = useCallback(
    debounce((query) => {
      setSearchQuery(query);
      setCurrentPage(1);
    }, 500),
    []
  );

  const handleSearch = () => {
    setCurrentPage(1);
    fetchArticles();
  };

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
          <Row className="d-flex align-items-center mt-4">
            <Col lg={6}>
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
                  current={authorFromQuery}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="title">Artikel oleh {authorFromQuery}</h1>
                <p className="description">
                  Semua artikel yang ditulis oleh {authorFromQuery}
                </p>
              </motion.div>
            </Col>
            <Col lg={6} className="text-center">
              <motion.img
                src={HeroImage}
                alt="Artikel"
                className="img-fluid hero-img"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </Col>
          </Row>

          
          <Row className="mt-4">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
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
                        <Link to={`/articles/author?author=${encodeURIComponent(article.contributor?.name_contributor || "Tidak ada kontributor")}`}
                            style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}>
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
                <p>Tidak ada artikel untuk author ini.</p>
                </Col>
            )}
            </Row>

          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <Button variant="light" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                <BsChevronLeft />
              </Button>
              {paginationButtons}
              <Button variant="light" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                <BsChevronRight />
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default ArticleAuthor;
