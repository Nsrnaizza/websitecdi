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
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
