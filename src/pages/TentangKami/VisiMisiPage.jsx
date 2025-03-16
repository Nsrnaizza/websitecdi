import VisiComponent from "../../components/VisiComponent";
import MisiComponent from "../../components/MisiComponent";

const VisiMisiPage = () => {
  return (
    <div className="container">
      <div className="section_header">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
            <h1>Visi &amp; Misi</h1>
            <h4 className="fw-normal">Visi &amp; Misi Campus Digital</h4>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0 text-center">
            <img className="h-auto mb-3 mb-lg-0 img-header" src="https://campusdigital.id/assets/images/illustration/5237.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section_visi mb-5">
        <div className="row justify-content-center">
          <VisiComponent />
          <MisiComponent />
        </div>
      </div>
    </div>
  );
};

export default VisiMisiPage;
