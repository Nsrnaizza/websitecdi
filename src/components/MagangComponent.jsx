import { useState } from "react";
import "../dist/css/main.css";


const MagangComponent = () => {
  const [modalContent, setModalContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const chatWA = (program) => {
    window.open(`https://wa.me/62816343742?text=Halo,%20saya%20tertarik%20dengan%20program%20${program}%20yang%20ada%20di%20website%20anda.`);
  };

  const programs = [
    {
      title: "Pengembangan dan Sinkronisasi Kurikulum",
      image: "https://campusdigital.id/assets/images/program/19265-scaled.jpg",
      description: "Pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan duni....",
      modalContent: "Pengembangan dan sinkronisasi kurikulum Pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sangatlah penting karena dapat mempersiapkan siswa untuk memasuki dunia industri yang kompetitif. Kurikulum yang disesuaikan dengan kebutuhan industri dapat membantu siswa untuk memperoleh keterampilan dan pengetahuan yang relevan dengan pekerjaan yang diinginkannya. Selain itu, sinergi antara sekolah kejuruan dan industri juga dapat membuka peluang kerja dan magang bagi siswa, sehingga mereka dapat memperoleh pengalaman kerja yang berharga sebelum lulus dari sekolah. Dengan demikian, pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sangatlah penting untuk memastikan kesesuaian antara keterampilan siswa dan kebutuhan industri. PT. Campus Digital Indonesia memberikan support bagi sekolah yang ingin melakukan sinkronisasi kurikulum dan Menjalin Kerjasama"
    },
    {
      title: "Magang Siswa",
      image: "https://campusdigital.id/assets/images/program/magang.jpeg",
      description: "Magang siswa bagi sekolah kejuruan sangat penting karena dapat memberikan peng...",
      modalContent: "Magang Siswa Magang siswa bagi sekolah kejuruan sangat penting karena dapat memberikan pengalaman kerja yang berharga dan relevan dengan bidang yang diminati oleh siswa. Selain itu, magang juga dapat membuka peluang kerja di masa depan dan membantu siswa membangun jaringan profesional. Oleh karena itu, penting bagi sekolah kejuruan untuk memilih tempat magang yang tepat, yaitu tempat yang sesuai dengan kebutuhan dan minat siswa. Tempat magang yang tepat juga harus memiliki lingkungan kerja yang aman dan kondusif serta memberikan kesempatan untuk siswa untuk belajar dan berkembang. Dengan demikian, memilih tempat magang yang tepat sangatlah penting untuk memastikan bahwa siswa mendapatkan pengalaman magang yang optimal dan dapat membantu mereka dalam mempersiapkan karir di masa depan. Campus Digital juga menerima magang siswa untuk dapat mendapatkan pengalaman yang relevan dengan dunia Industri"    },
    {
      title: "Magang Guru",
      image: "https://campusdigital.id/assets/images/program/19265-scaled.jpg",
      description: "Magang guru bagi sekolah kejuruan sangatlah penting karena dapat membantu gur .... ",
      modalContent: "Magang guru bagi sekolah kejuruan sangatlah penting karena dapat membantu guru-guru untuk memperoleh pengalaman praktis pada industri dan update pengetahuan mereka mengenai teknologi terbaru. Dengan magang, guru-guru dapat belajar dari para profesional dan ahli di bidangnya, dan memperoleh pemahaman yang lebih dalam tentang keterampilan dan pengetahuan yang dibutuhkan untuk sukses di dunia kerja. Selain itu, pengalaman magang juga dapat membantu guru-guru dalam mengembangkan kurikulum dan metode pembelajaran yang lebih relevan dengan kebutuhan industri dan mempersiapkan siswa untuk memasuki pasar kerja yang kompetitif. Bersama Campus Digital program magang guru memastikan bahwa guru-guru memiliki Wepengetahuan dan keterampilan yang up-to-date dan dapat memberikan pembelajaran yang berkualitas tinggi bagi siswa."
    },
    {
      title: "Sistem Informasi Sekolah",
      image: "https://campusdigital.id/assets/images/program/magang.jpeg",
      description: "Sistem informasi sekolah sangatlah penting karena dapat membantu sekolah dalam mengelola d....",
      modalContent: "Sistem Informasi Sekolah Sistem informasi sekolah sangatlah penting karena dapat membantu sekolah dalam mengelola data dan informasi yang berkaitan dengan kegiatan akademik dan administratif. Dengan sistem informasi yang baik, sekolah dapat memperoleh informasi yang akurat dan terbaru mengenai siswa, guru, kurikulum, dan administrasi sekolah. Selain itu, sistem informasi juga dapat membantu sekolah dalam memantau kinerja siswa dan guru, serta memperoleh data yang relevan untuk pengambilan keputusan yang lebih baik. Dengan demikian, sistem informasi sekolah sangatlah penting untuk meningkatkan efisiensi dan efektivitas pengelolaan sekolah, serta memastikan bahwa siswa dan guru memiliki akses ke informasi yang diperlukan untuk mencapai tujuan akademik mereka. PT. Campus Digital Indonesia juga membantu sekolah untuk dapat memiliki Sistem Informasi yang akurat dan terbaru."
    },
    {
      title: "Uji Kompetensi Keahlian",
      image: "https://campusdigital.id/assets/images/program/19265-scaled.jpg",
      description: "Campus digital memiliki beberapa asesor atau pelatih yang telah bersertifikat BNSP dan pen... ",
      modalContent: "Uji Kompetensi Keahlian Campus digital memiliki beberapa asesor atau pelatih yang telah bersertifikat BNSP dan pengalaman lapangan di berbagai kota dan sekolah. Kami sanggup memberikan bantuan dan support dalam Uji Kompetensi Keahlian agar bisa menghasilkan lulusan yang kompeten."
    },
    {
      title: "Digital Studentpreneur",
      image: "https://campusdigital.id/assets/images/program/magang.jpeg",
      description: "Membangun jiwa entrepreneur bagi siswa kejuruan sangatlah penting karena dapat membantu si....",
      modalContent: "Digital Studentpreneur Membangun jiwa entrepreneur bagi siswa kejuruan sangatlah penting karena dapat membantu siswa untuk mempersiapkan diri dalam memasuki dunia kerja yang kompetitif dan membangun karir yang sukses di masa depan. Jiwa entrepreneur dapat membantu siswa untuk mengembangkan keterampilan seperti kreativitas, inovasi, kepemimpinan, dan kemandirian, yang sangat dibutuhkan dalam dunia kerja saat ini. Selain itu, siswa yang memiliki jiwa entrepreneur juga dapat membuka peluang untuk menjadi pengusaha atau membangun bisnis mereka sendiri di masa depan. Bersama Campus Digital mewujudkan mimpi untuk menjadi seorang entrepreneur yang berhasil"
    },
    {
      title: "Narasumber dan Guru Tamu",
      image: "https://campusdigital.id/assets/images/program/19265-scaled.jpg",
      description: "Campus digital memiliki SDM yang unggul dalam bidang digital, dengan dibekali kemampuan pu.... ",
      modalContent: "Narasumber dan Guru Tamu Campus digital memiliki SDM yang unggul dalam bidang digital, dengan dibekali kemampuan public speaking tim dari Campus Digital akan menemani siswa sebagai guru tamu untuk mengatasi perkembangan era digital dan menguasai kompetensi sesuai dengan starndart industri"
    },
    {
      title: "Pengembangan Usaha Mandiri",
      image: "https://campusdigital.id/assets/images/program/magang.jpeg",
      description: "Mengembangkan usaha mandiri bagi sekolah kejuruan sangat penting karena dapat ... ",
      modalContent: "Pengembangan Usaha Mandiri Mengembangkan usaha mandiri bagi sekolah kejuruan sangat penting karena dapat memberikan manfaat yang besar bagi siswa dan institusi. Dengan mengembangkan usaha mandiri, siswa dapat belajar langsung tentang pengelolaan bisnis dan kewirausahaan, serta memperoleh pengalaman praktis yang berguna untuk karir mereka di masa depan. Selain itu, usaha mandiri juga dapat memberikan sumber pendapatan tambahan bagi sekolah kejuruan, sehingga dapat memperkuat keuangan institusi dan meningkatkan kualitas pendidikan yang disediakan. PT. Campus Digital Indonesia membantu sekolah untuk memetakan bagaimana strategi mapping pengembangan USMAN untuk bisa sukses dan memiliki daya saing yang tinggi, tidak hanya itu kami juga akan mendampingi dalam proses eksekusinya."
    },
    {
      title: "Peningkatan Branding Sekolah",
      image: "https://campusdigital.id/assets/images/program/magang.jpeg",
      description: "MPeningkatan branding sekolah kejuruan sangatlah penting karena dapat membant... ",
      modalContent: "Peningkatan Branding Sekolah Peningkatan branding sekolah kejuruan sangatlah penting karena dapat membantu sekolah untuk memperoleh reputasi yang baik dan menarik minat calon siswa yang berkualitas. Dengan branding yang kuat, sekolah kejuruan dapat memperoleh kepercayaan dari masyarakat dan industri, serta meningkatkan visibilitas dan daya tariknya di kalangan calon siswa. Selain itu, branding yang kuat juga dapat membantu sekolah kejuruan dalam membangun jaringan profesional dan kemitraan dengan industri dan perusahaan lokal, yang dapat membuka peluang kerja dan magang bagi siswa. Dengan demikian, peningkatan branding sekolah kejuruan sangatlah penting untuk memastikan bahwa sekolah memiliki reputasi yang baik dan dapat memperoleh banyak siswa berkualitas pada saat PPDB. Dengan berbagai pengalaman tim Campus Digital dalam melakukan branding kami akan membantu sekolah untuk menemukan positioning yang tepat dan meningkatkan market share sekolahan di wilayahnya."
    },
    {
      title: "Ekstrakulikuler Jualan Online",
      image: "https://campusdigital.id/assets/images/program/19265-scaled.jpg",
      description: "Pentingnya kompetensi jualan online bagi siswa sebagai bekal menghadapi era digital sangat.... ",
      modalContent: "Ekstrakulikuler Jualan Online Pentingnya kompetensi jualan online bagi siswa sebagai bekal menghadapi era digital sangatlah tinggi. Dalam era digital saat ini, jualan online menjadi semakin populer dan menjadi salah satu cara untuk memperoleh penghasilan. Oleh karena itu, siswa yang memiliki kompetensi jualan online dapat mempersiapkan diri mereka untuk memasuki dunia kerja yang kompetitif dan membangun karir yang sukses di masa depan."
    },
    {
      title: "Upskilling & Reskilling Guru",
      image: "https://campusdigital.id/assets/images/program/magang.jpeg",
      description: "Upskilling dan reskilling sangat penting bagi guru sekolah kejuruan karena bidang teknolog....",
      modalContent: "Upskilling & Reskilling Guru Upskilling dan reskilling sangat penting bagi guru sekolah kejuruan karena bidang teknologi dan industri terus berkembang dengan cepat. Dengan memperbarui keterampilan mereka, guru dapat memastikan bahwa siswa mereka mendapatkan pendidikan yang relevan dan up-to-date, serta siap untuk memasuki dunia kerja yang terus berubah."
    },
  ];

  return (
    <section className="py-4">
      <div className="container">
        <div className="row g-3">
          {programs.map((program, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="ratio ratio-16x9">
                  <img 
                    src={program.image} 
                    className="card-img-top object-fit-cover" 
                    alt={program.title}
                    style={{ borderTopLeftRadius: "0.25rem", borderTopRightRadius: "0.25rem" }}
                  />
                </div>
                <div className="d-flex flex-column p-3">
                  <h5 className="card-title fw-bold mb-2 text-truncate" style={{ fontSize: "1rem", color: "#333" }}>
                    {program.title}
                  </h5>
                  <p className="card-text mb-2 flex-grow-1 " style={{ fontSize: "0.875rem" }}>
                    {program.description}
                    <button 
                      onClick={() => showModal(program.modalContent)}
                      className="btn btn-link p-0 text-decoration-none"
                      style={{ fontSize: "0.875rem" }}
                    >
                      <span className="text-primary"> Lihat Selengkapnya...</span>
                    </button>
                  </p>
                  <button 
                    onClick={() => chatWA(program.title)}
                    className="btn btn-success w-100 py-2"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <i className="bi bi-whatsapp me-2"></i>WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalVisible && (
       <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(3px)" }}>
       <div className="modal-dialog modal-dialog-centered modal-lg">
         <div className="modal-content border-0 shadow-lg overflow-hidden">
           {/* Header lebih minimalis */}
           <div className="modal-header bg-dark text-white">
             <h5 className="modal-title fs-5 fw-medium">Detail Program</h5>

           </div>
           
           {/* Body lebih bersih */}
           <div className="modal-body p-4" style={{ 
             lineHeight: "1.7",
             maxHeight: "60vh",
             overflowY: "auto"
           }}>
             <div className="text-muted">{modalContent}</div>
           </div>
           
           {/* Footer lebih simple */}
           <div className="modal-footer bg-light">
             <button 
               type="button" 
               className="btn btn-outline-dark px-4 rounded-1"
               onClick={hideModal}
             >
               Tutup
             </button>
           </div>
         </div>
       </div>
     </div>


      )}
    </section>
  );
};

export default MagangComponent;
