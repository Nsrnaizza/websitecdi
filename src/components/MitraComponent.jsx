import "../dist/css/main.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const mitraData = [
  {
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
  },
];

const MitraComponent = () => {
  return (
    <div className="mitra-lg container py-5">
      <div className="row text-center">
        {mitraData.map((mitra, index) => (
          <div key={index} className="col-2">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id={`tooltip-${index}`}>{mitra.title}</Tooltip>}
            >
              <img src={mitra.imgSrc} alt="Mitra Campusdigital" className="img-fluid" />
            </OverlayTrigger>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MitraComponent;