import { motion } from "framer-motion";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../dist/css/main.css";

const mitraData = [{
  title: "LSP Teknologi Digital",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-04-55.png",
},
{
  title: "Tempat Uji Kompetensi",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-05-38.png",
},
{
  title: "Aladin Bank",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-19-24-16.png",
},
{
  title: "Bisa Management",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-04-15.png",
},
{
  title: "MGMP PM Jawa Tengah",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-04-37.png",
},
{
  title: "PersonalityTalk",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-02-05.png",
},
{
  title: "Eduplay",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-06-53.png",
},
{
  title: "Campus Net",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-06-04.png",
},
{
  title: "Digicard",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-06-24.png",
},
{
  title: "Universitas Negeri Semarang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-11-45-50.png",
},
{
  title: "Universitas Diponegoro",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-46-40.png",
},
{
  title: "UNISBANK",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-05-15.png",
},
{
  title: "Universitas PGRI Semarang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-12-01-15.png",
},
{
  title: "Universitas Wahid Hasyim",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-43-40.png",
},
{
  title: "Universitas Pandanaran",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-09-26.png",
},
{
  title: "SMK Negeri 1 Kebumen",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-07-27.png",
},
{
  title: "SMK Muhammadiyah 1 Semarang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-07-59.png",
},
{
  title: "SMK Muhammadiyah 1 Jatinom",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-08-20.png",
},
{
  title: "SMK Muhammadiyah 1 Wates",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-08-41.png",
},
{
  title: "SMK Negeri 6 Surakarta",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-09-01.png",
},
{
  title: "BBPPMPV",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-09-47.png",
},
{
  title: "SMK Negeri 9 Semarang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-10-06.png",
},
{
  title: "SMK Negeri 1 Wonogiri",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-06-15-15-10-25.png",
},
{
  title: "SMK Bhakti Kudus",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2021-07-16-16-06-09.png",
},
{
  title: "SMK Teuku Umar Semarang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-47-45.png",
},
{
  title: "SMK NU 01 Kendal",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-48-13.png",
},
{
  title: "SMK Negeri 5 Semarang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-48-30.png",
},
{
  title: "SMK Negeri 1 Sragen",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-50-08.png",
},
{
  title: "SMK Negeri 1 Salatiga",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-50-25.png",
},
{
  title: "SMK Negeri 1 Poso",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-50-45.png",
},
{
  title: "SMK Negeri 1 Ngablak",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-51-05.png",
},
{
  title: "SMK Negeri 1 Juwiring Klaten",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-51-24.png",
},
{
  title: "SMK Negeri 1 Jepara",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-51-38.png",
},
{
  title: "SMK Negeri 1 Binjai",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-51-54.png",
},
{
  title: "SMK 17 Agustus Semarang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-02-15-14-52-21.png",
},
{
  title: "SMK Negeri 3 Jepara",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-12-08-13.png",
},
{
  title: "SMK Komputama Majenang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-12-12-10.png",
},
{
  title: "SMK Telkom Purwokerto",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-12-16-00.png",
},
{
  title: "SMK Yayasan Pharmasi Semarang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-12-19-07.png",
},
{
  title: "SMKS Kristen BM Salatiga",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-12-23-29.png",
},
{
  title: "SMK Negeri 2 Pekalongan",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-12-26-29.png",
},
{
  title: "SMK Negeri 1 Cepu",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-18-34-25.png",
},
{
  title: "SMK Muhammadiyah 1 Pemalang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-18-55-38.png",
},
{
  title: "SMK Nuurul Muttaqin Cisarupan Garut",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-18-58-03.png",
},
{
  title: "SMK Negeri 2 Magelang",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-19-00-36.png",
},
{
  title: "SMK Negeri 1 Puhpelem",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-19-05-14.png",
},
{
  title: "SMK Muhammadiyah 1 Cepu",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-19-08-53.png",
},
{
  title: "SMK Ma'arif NU 1 Bener",
  imgSrc: "https://campusdigital.id/assets/images/mitra/2022-11-05-19-12-25.png",
},]; // Data mitra tetap sama

const MitraComponent = () => {
  return (
    <section className="py-6" style={{ backgroundColor: "#faf9ff" }}>
      <div className="container">
        <motion.h2 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            color: "#330369",
            fontSize: "2.5rem",
            fontWeight: "700",
            letterSpacing: "0.5px"
          }}
        >
          Mitra Kami
        </motion.h2>
        
        <motion.p 
          className="text-center mb-5 mx-auto"
          style={{
            color: "#666",
            fontSize: "1.1rem",
            maxWidth: "700px",
            lineHeight: "1.6"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Kami bangga bekerja sama dengan berbagai institusi terkemuka dalam mengembangkan pendidikan digital di Indonesia
        </motion.p>

        <div className="row justify-content-center g-4">
          {mitraData.map((mitra, index) => (
            <motion.div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.03
              }}
              whileHover={{ 
                y: -5,
                scale: 1.05
              }}
            >
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-${index}`} style={{ 
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}>
                    {mitra.title}
                  </Tooltip>
                }
              >
                <div style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 5px 15px rgba(51, 3, 105, 0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(51, 3, 105, 0.1)"
                }}>
                  <img 
                    src={mitra.imgSrc} 
                    alt={mitra.title}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "60px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      opacity: 1
                    }}
                  />
                </div>
              </OverlayTrigger>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ 
              backgroundColor: "#330369",
              color: "#FDD100"
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "#FDD100",
              color: "#330369",
              border: "none",
              borderRadius: "8px",
              padding: "12px 30px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(51, 3, 105, 0.2)"
            }}
          >
            Jadilah Mitra Kami
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MitraComponent;