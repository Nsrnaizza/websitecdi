import "../dist/css/main.css";
import { FaMosque, FaDesktop, FaBook, FaWind, FaEye } from "react-icons/fa";

const KeunggulanComponent = () => {
  return (
    <div className="container my-5">
      <div className="bg-light p-5 rounded-3 text-center shadow-sm">
        <h2 className="mb-4">Fasilitas dan Sarana</h2>
        <div className="row justify-content-center">
          <div className="col-md-2 mb-4">
            <FaMosque size={50} color="#4B0082" className="mb-2" />
            <p>Musholla</p>
          </div>
          <div className="col-md-2 mb-4">
            <FaEye size={50} color="#4B0082" className="mb-2" />
            <p>LED Proyektor</p>
          </div>
          <div className="col-md-2 mb-4">
            <FaDesktop size={50} color="#4B0082" className="mb-2" />
            <p>Komputer dan Internet</p>
          </div>
          <div className="col-md-2 mb-4">
            <FaWind size={50} color="#4B0082" className="mb-2" />
            <p>Ruangan yang nyaman dan ber-AC</p>
          </div>
          <div className="col-md-2 mb-4">
            <FaBook size={50} color="#4B0082" className="mb-2" />
            <p>Materi e-book dan video pembelajaran</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeunggulanComponent;
