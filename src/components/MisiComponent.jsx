import "../dist/css/main.css";

const MisiComponent = () => {
  return (
    <div className="col-lg-4 d-lg-flex align-items-stretch mb-4 mb-lg-0">
      <div className="card text-center rounded-1 border-0 shadow-sm">
        <div className="p-4 rounded-1 bg-misi">
          <img className="logo-visi" src="https://campusdigital.id/assets/images/icon/guidance.png" alt="icon" />
        </div>
          <h1>Misi</h1>
          <ul className="text-start">
            <li>Menyediakan layanan program Pendidikan dan pelatihan yang berkualitas</li>
            <li>Membangun karakter sumber daya manusia yang kompeten dan profesional</li>
            <li>Membangun tim yang solid, unggul, dan amanah</li>
            <li>Menyajikan solusi bagi semua mitra bisnis untuk meraih cita-cita mulianya</li>
            <li>Menjadi model pengelolaan bisnis yang menguntungkan dan mensejahterakan</li>
          </ul>
      </div>
    </div>
  );
};

export default MisiComponent;
