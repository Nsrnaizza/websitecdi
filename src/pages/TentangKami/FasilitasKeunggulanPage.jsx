import FasilitasComponent from "../../components/FasilitasComponent";
import KeunggulanComponent from "../../components/KeunggulanComponent";

const FasilitasKeunggulanPage = () => {
  return (
      <div className="section_fasilitas mb-5">
        <div className="row justify-content-center">
          <FasilitasComponent />
          <KeunggulanComponent />
        </div>
      </div>
  );
};

export default FasilitasKeunggulanPage;