import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/SidebarComponent";
import Dashboard from "./pages/Dashboard";
import DataRole from "./pages/DataRolePage";
import RoleManagement from "./pages/RoleManagementPage";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import BerandaPage from "./pages/BerandaPage";
import CabangPage from "./pages/CabangPage";
import GaleryPage from "./pages/GaleryPage";

import AfiliasiPage from "./pages/AfiliasiPage";
import ArtikelPage from "./pages/ArtikelPage";
import DetailArticle from "./pages/DetailArticle";
import ArticleAuthor from "./pages/ArticleAuthor";
import HubungiKamiPage from "./pages/HubungiKamiPage";
import RegularProgramPage from "./pages/RegularProgramPage";
import CorporateProgramPage from "./pages/CorporateProgramPage";
import ProfesiProgramPage from "./pages/ProfesiProgramPage";
import SejarahPage from "./pages/TentangKami/sejarahPage";
import VisiMisiPage from "./pages/TentangKami/VisiMisiPage";
import BudayaKerjaPage from "./pages/TentangKami/BudayaKerjaPage";
import FasilitasKeunggulanPage from "./pages/TentangKami/FasilitasKeunggulanPage";
import ProgramSertifikasiPage from "./pages/ProgramSertifikasiPage";
import MagangPage from "./pages/MagangPage";
import DigitalMarketingPage from "./pages/Reguler/DigitalMarketingPage";
import GraphicDesignPage from "./pages/Reguler/GraphicDesignPage";
import KomputerPerkantoranPage from "./pages/Reguler/KomputerPerkantoranPage";
import WebDesignerPage from "./pages/Reguler/WebDesignerPage";
import WebDeveloperPage from "./pages/Reguler/WebDeveloperPage";
import VideoEditorPage from "./pages/Reguler/VideoEditorPage";
import FotografiPage from "./pages/Reguler/FotografiPage";
import MultimediaPage from "./pages/Reguler/MutimediaPage";
import GameDeveloperPage from "./pages/Reguler/GameDeveloperPage";
import SocialMediaSpecialistPage from "./pages/Reguler/SocialMediaSpecialistPage";
import MobileProgrammerPage from "./pages/Reguler/MobileProgrammerPage";
import JuniorComputerTechnicianPage from "./pages/Reguler/JuniorComputerTechnicianPage";
import KompetensiDigitalMarketingPage from "./pages/Corporate/KompetensiDigitalMarketingPage";
import PraktekKerjaIndustriPage from "./pages/Corporate/PraktekKerjaIndustriPage";
import KelasIndustriPage from "./pages/Corporate/KelasIndustriPage";
import TrainingForTrainerPage from "./pages/Corporate/TrainingForTrainerPage";
import UjiKompetensiDigitalPage from "./pages/Corporate/UjiKompetensiDigitalPage";
import BeasiswaPage from "./pages/Corporate/BeasiswaPage";
import InHouseTrainingPage from "./pages/Corporate/InHouseTrainingPage";
import NetworkPage from "./pages/Sertifikasi/NetworkPage";
import SoftwarePage from "./pages/Sertifikasi/SoftwarePage";
import MultimediaOfficePage from "./pages/Sertifikasi/MultimediaOfficePage";
import ManagementPage from "./pages/Sertifikasi/ManagementPage";
import Fundamentalpage from "./components/Sertifikasi/FundamentalComponent";
import FiberPage from "./components/Sertifikasi/FiberComponent";
import DigitalMarketerPage from "./pages/Profesi/DigitalMarketerPage";
import TechnopreneurPage from "./pages/Profesi/TechnopreneurPage";
import UMKMGoDigitalPage from "./pages/Corporate/UMKMGoDigitalPage";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
// import AdminPage from "./pages/AdminPage";

function App() {
  const location = useLocation();

  // Daftar rute yang menggunakan Sidebar
  const adminRoutes = ["/dashboard", "/datarole", "/rolemanagement"];

  // Periksa apakah halaman saat ini adalah halaman admin
  const isAdminPage = adminRoutes.some((route) => location.pathname.startsWith(route));

  return (
    <div>
      {/* Render HeaderComponent dan FooterComponent hanya jika bukan halaman admin */}
      {!isAdminPage && <NavbarComponent />}

      <Routes>
        <Route path="/" element={<BerandaPage />} />
        <Route path="/tentangkami/sejarah" element={<SejarahPage />} />
        <Route path="/tentangkami/visi-misi" element={<VisiMisiPage />} />
        <Route path="/tentangkami/budaya-kerja" element={<BudayaKerjaPage />} />
        <Route path="/tentangkami/fasilitas-keunggulan" element={<FasilitasKeunggulanPage />} />
        <Route path="/cabang" element={<CabangPage />} />
        <Route path="/galery" element={<GaleryPage />} />
        <Route path="/afiliasi" element={<AfiliasiPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/detailartikel/:id" Component={DetailArticle} />
        <Route path="/articles/author" Component={ArticleAuthor} />
        <Route path="/hubungiKami" element={<HubungiKamiPage />} />
        <Route path="/program-reguler" element={<RegularProgramPage />} />
        <Route path="/program-corporate" element={<CorporateProgramPage />} />
        <Route path="/program-profesi" element={<ProfesiProgramPage />} />
        <Route path="/program-sertifikasi" element={<ProgramSertifikasiPage />} />
        <Route path="/program/magang/internprogram" element={<MagangPage />} />
        <Route path="/reguler/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/reguler/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/reguler/operator-komputer" element={<KomputerPerkantoranPage />} />
        <Route path="/reguler/web-designer" element={<WebDesignerPage />} />
        <Route path="/reguler/web-developer" element={<WebDeveloperPage />} />
        <Route path="/reguler/video-editor" element={<VideoEditorPage />} />
        <Route path="/reguler/photography" element={<FotografiPage />} />
        <Route path="/reguler/multimedia" element={<MultimediaPage />} />
        <Route path="/reguler/game-developer" element={<GameDeveloperPage />} />
        <Route path="/reguler/social-media-specialist" element={<SocialMediaSpecialistPage />} />
        <Route path="/reguler/mobile-programing" element={<MobileProgrammerPage />} />
        <Route path="/reguler/junior-computer" element={<JuniorComputerTechnicianPage />} />
        <Route path="/corporate/kompetensi-digital-marketing" element={<KompetensiDigitalMarketingPage />} />
        <Route path="/corporate/praktek-kerja-industri" element={<PraktekKerjaIndustriPage />} />
        <Route path="/corporate/industri-teknologi-digital" element={<KelasIndustriPage />} />
        <Route path="/corporate/training-for-trainer" element={<TrainingForTrainerPage />} />
        <Route path="/corporate/uji-kompetensi-teknologi-digital" element={<UjiKompetensiDigitalPage />} />
        <Route path="/corporate/beasiswa" element={<BeasiswaPage />} />
        <Route path="/corporate/inhouse-training" element={<InHouseTrainingPage />} />
        <Route path="/corporate/umkm-go-digital" element={<UMKMGoDigitalPage />} />
        <Route path="/Program/digital-marketer" element={<DigitalMarketerPage />} />
        <Route path="/program/digital-technopreneur" element={<TechnopreneurPage />} />
        <Route path="/program/network-infrastructure-iot-and-services" element={<NetworkPage />} />
        <Route path="/program/software-development-and-data-science" element={<SoftwarePage />} />
        <Route path="/program/multimedia-and-office" element={<MultimediaOfficePage />} />
        <Route path="/program/project-management-and-quality" element={<ManagementPage />} />
        <Route path="/program/digital-marketing-and-it-fundamental" element={<Fundamentalpage />} />
        <Route path="/program/Fiber-optic" element={<FiberPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path ="/admin" element={<AdminPage/>}/> */}
      </Routes>
      {!isAdminPage && <FooterComponent />}

      {isAdminPage && (
        <div className="d-flex">
          <Sidebar />
          <div style={{ marginLeft: isAdminPage ? "80px" : "280px", padding: "20px", width: "100%" }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/datarole" element={<DataRole />} />
              <Route path="/rolemanagement" element={<RoleManagement />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
