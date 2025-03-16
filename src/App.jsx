import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import BerandaPage from "./pages/BerandaPage";
import CabangPage from "./pages/CabangPage";
import GaleryPage from "./pages/GaleryPage";

import AfiliasiPage from "./pages/AfiliasiPage";
import ArtikelPage from "./pages/ArtikelPage";
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

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={BerandaPage} />
        <Route path="/tentangkami/sejarah" Component={SejarahPage} />
        <Route path="/tentangkami/visi-misi" Component={VisiMisiPage} />
        <Route path="/tentangkami/budaya-kerja" Component={BudayaKerjaPage} />
        <Route path="/tentangkami/fasilitas-keunggulan" Component={FasilitasKeunggulanPage} />
        <Route path="/cabang" Component={CabangPage} />
        <Route path="/galery" Component={GaleryPage} />
        <Route path="/afiliasi" Component={AfiliasiPage} />
        <Route path="/artikel" Component={ArtikelPage} />
        <Route path="/hubungiKami" Component={HubungiKamiPage} />
        <Route path="/program-reguler" Component={RegularProgramPage} />
        <Route path="/program-corporate" Component={CorporateProgramPage} />
        <Route path="/program-profesi" Component={ProfesiProgramPage} />
        <Route path="/program-sertifikasi" Component={ProgramSertifikasiPage} />
        <Route path="/internprogram" Component={MagangPage} />
        <Route path="/reguler/digital-marketing" Component={DigitalMarketingPage} />
        <Route path="/reguler/graphic-design" Component={GraphicDesignPage} />
        <Route path="/reguler/operator-komputer" Component={KomputerPerkantoranPage} />
        <Route path="/reguler/web-designer" Component={WebDesignerPage} />
        <Route path="/reguler/web-developer" Component={WebDeveloperPage} />
        <Route path="/reguler/video-editor" Component={VideoEditorPage} />
        <Route path="/reguler/photography" Component={FotografiPage} />
        <Route path="/reguler/multimedia" Component={MultimediaPage} />
        <Route path="/reguler/game-developer" Component={GameDeveloperPage} />
        <Route path="/reguler/social-media-specialist" Component={SocialMediaSpecialistPage} />
        <Route path="/reguler/mobile-programing" Component={MobileProgrammerPage} />
        <Route path="/reguler/junior-computer" Component={JuniorComputerTechnicianPage} />
        <Route path="/corporate/kompetensi-digital-marketing" Component={KompetensiDigitalMarketingPage} />
        <Route path="/corporate/praktek-kerja-industri" Component={PraktekKerjaIndustriPage} />
        <Route path="/corporate/industri-teknologi-digital" Component={KelasIndustriPage} />
        <Route path="/corporate/training-for-trainer" Component={TrainingForTrainerPage} />
        <Route path="/corporate/uji-kompetensi-teknologi-digital" Component={UjiKompetensiDigitalPage} />
        <Route path="/corporate/beasiswa" Component={BeasiswaPage} />
        <Route path="/corporate/inhouse-training" Component={InHouseTrainingPage} />
        <Route path="/corporate/umkm-go-digital" Component={UMKMGoDigitalPage}/>
        <Route path="/Program/digital-marketer" Component={DigitalMarketerPage}/>
        <Route path="/program/digital-technopreneur" Component={TechnopreneurPage}/>
        <Route path="/program/network-infrastructure-iot-and-services" Component={NetworkPage} />
        <Route path="/program/software-development-and-data-science" Component={SoftwarePage} />
        <Route path ="/program/multimedia-and-office" Component={MultimediaOfficePage}/>
        <Route path ="/program/project-management-and-quality" Component={ManagementPage}/>
        <Route path ="/program/digital-marketing-and-it-fundamental" Component={Fundamentalpage}/>
        <Route path ="/program/Fiber-optic" Component={FiberPage}/>
        <Route path ="/register" Component={RegisterPage}/>
        <Route path ="/login" Component={LoginPage}/>
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
