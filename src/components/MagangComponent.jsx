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

  return (
    <section className="mb-5 mod">
      <div className="container">
        <div className="row">
          {/* Card for Pengembangan dan sinkronisasi kurikulum */}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="h-auto mb-3 mb-lg-0 img-header" src="https://campusdigital.id/assets/images/program/19265-scaled.jpg" alt="Magang Program" />
                <h5 className="card-title">Pengembangan dan sinkronisasi kurikulum</h5>
                <p className="card-text">
                  Pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sang....
                 
                  <a
                    onClick={() =>
                      showModal(
                        "Pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sangatlah penting karena dapat mempersiapkan siswa untuk memasuki dunia industri yang kompetitif. Kurikulum yang disesuaikan dengan kebutuhan industri dapat membantu siswa untuk memperoleh keterampilan dan pengetahuan yang relevan dengan pekerjaan yang diinginkannya. Selain itu, sinergi antara sekolah kejuruan dan industri juga dapat membuka peluang kerja dan magang bagi siswa, sehingga mereka dapat memperoleh pengalaman kerja yang berharga sebelum lulus dari sekolah. Dengan demikian, pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sangatlah penting untuk memastikan kesesuaian antara keterampilan siswa dan kebutuhan industri. PT. Campus Digital Indonesia memberikan support bagi sekolah yang ingin melakukan sinkronisasi kurikulum dan Menjalin Kerjasama"
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>
         
          {/* Card for Magang Siswa */}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="h-auto mb-3 mb-lg-0 img-header" src="https://campusdigital.id/assets/images/program/magang.jpeg" alt="Magang Program" />
                <h5 className="card-title">Magang Siswa</h5>
                <p className="card-text">
                  Magang siswa bagi sekolah kejuruan sangat penting karena dapat memberikan pengalaman kerja....
                  <a
                    onClick={() =>
                      showModal(
                        "Magang siswa bagi sekolah kejuruan sangat penting karena dapat memberikan pengalaman kerja yang berharga dan relevan dengan bidang yang diminati oleh siswa. Selain itu, magang juga dapat membuka peluang kerja di masa depan dan membantu siswa membangun jaringan profesional. Oleh karena itu, penting bagi sekolah kejuruan untuk memilih tempat magang yang tepat, yaitu tempat yang sesuai dengan kebutuhan dan minat siswa. Tempat magang yang tepat juga harus memiliki lingkungan kerja yang aman dan kondusif serta memberikan kesempatan untuk siswa untuk belajar dan berkembang. Dengan demikian, memilih tempat magang yang tepat sangatlah penting untuk memastikan bahwa siswa mendapatkan pengalaman magang yang optimal dan dapat membantu mereka dalam mempersiapkan karir di masa depan. Campus Digital juga menerima magang siswa untuk dapat mendapatkan pengalaman yang relevan dengan dunia Industri"
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>

          {/* Card for Magang Guru */}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="card-img-top" src="https://campusdigital.id/assets/images/program/magang-guru.jpg" alt="Magang Program" />
                <h5 className="card-title">Magang Guru</h5>
                <p className="card-text">
                  Magang guru bagi sekolah kejuruan sangatlah penting karena dapat membantu guru-guru untuk ....
                  <a
                    onClick={() =>
                      showModal(
                        "Magang guru bagi sekolah kejuruan sangatlah penting karena dapat membantu guru-guru untuk memperoleh pengalaman praktis pada industri dan update pengetahuan mereka mengenai teknologi terbaru. Dengan magang, guru-guru dapat belajar dari para profesional dan ahli di bidangnya, dan memperoleh pemahaman yang lebih dalam tentang keterampilan dan pengetahuan yang dibutuhkan untuk sukses di dunia kerja. Selain itu, pengalaman magang juga dapat membantu guru-guru dalam mengembangkan kurikulum dan metode pembelajaran yang lebih relevan dengan kebutuhan industri dan mempersiapkan siswa untuk memasuki pasar kerja yang kompetitif. Bersama Campus Digital program magang guru memastikan bahwa guru-guru memiliki  Wepengetahuan dan keterampilan yang up-to-date dan dapat memberikan pembelajaran yang berkualitas tinggi bagi siswa."
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>

         {/* Card for Strategi Optimasi PPDB Sekolah*/}
         <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="card-img-top" src="https://campusdigital.id/assets/images/program/optimization.png" alt="Magang Program" />
                <h5 className="card-title">Strategi Optimasi PPDB Sekolah</h5>
                <p className="card-text">
                Memiliki banyak murid adalah dambaan bagi sekolahan terutama sekolah swasta, untuk itu sek.... 
                  <a
                    onClick={() =>
                      showModal(
                        "Pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sangatlah penting karena dapat mempersiapkan siswa untuk memasuki dunia industri yang kompetitif. Kurikulum yang disesuaikan dengan kebutuhan industri dapat membantu siswa untuk memperoleh keterampilan dan pengetahuan yang relevan dengan pekerjaan yang diinginkannya. Selain itu, sinergi antara sekolah kejuruan dan industri juga dapat membuka peluang kerja dan magang bagi siswa, sehingga mereka dapat memperoleh pengalaman kerja yang berharga sebelum lulus dari sekolah. Dengan demikian, pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sangatlah penting untuk memastikan kesesuaian antara keterampilan siswa dan kebutuhan industri. PT. Campus Digital Indonesia memberikan support bagi sekolah yang ingin melakukan sinkronisasi kurikulum dan Menjalin Kerjasama"
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success" >
                  WhatsApp
                </a>
              </div>
            </div>
          
        

          {/* Card for Sistem Informasi Sekolah */}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="card-img-top" src="https://campusdigital.id/assets/images/program/sistem-informasi.jpg" alt="Magang Program" />
                <h5 className="card-title">Sistem Informasi Sekolah</h5>
                <p className="card-text">
                  Sistem informasi sekolah sangatlah penting karena dapat membantu sekolah dalam mengelola d....
                  <a
                    onClick={() =>
                      showModal(
                        "Sistem informasi sekolah sangatlah penting karena dapat membantu sekolah dalam mengelola data dan informasi yang berkaitan dengan kegiatan akademik dan administratif. Dengan sistem informasi yang baik, sekolah dapat memperoleh informasi yang akurat dan terbaru mengenai siswa, guru, kurikulum, dan administrasi sekolah. Selain itu, sistem informasi juga dapat membantu sekolah dalam memantau kinerja siswa dan guru, serta memperoleh data yang relevan untuk pengambilan keputusan yang lebih baik. Dengan demikian, sistem informasi sekolah sangatlah penting untuk meningkatkan efisiensi dan efektivitas pengelolaan sekolah, serta memastikan bahwa siswa dan guru memiliki akses ke informasi yang diperlukan untuk mencapai tujuan akademik mereka. PT. Campus Digital Indonesia juga membantu sekolah untuk dapat memiliki Sistem Informasi yang akurat dan terbaru."
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>

          {/* Card for Uji Kompetensi Keahlian */}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="card-img-top" src="https://campusdigital.id/assets/images/program/kompetensi.jpg" alt="Magang Program" />

                <h5 className="card-title">Uji Kompetensi Keahlian</h5>
                <p className="card-text">
                  Campus digital memiliki beberapa asesor atau pelatih yang telah bersertifikat BNSP dan pen....
                  <a
                    onClick={() =>
                      showModal(
                        "Campus digital memiliki beberapa asesor atau pelatih yang telah bersertifikat BNSP dan pengalaman lapangan di berbagai kota dan sekolah. Kami sanggup memberikan bantuan dan support dalam Uji Kompetensi Keahlian agar bisa menghasilkan lulusan yang kompeten."
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>

          {/* Card for Digital Studentpreneur */}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="card-img-top" src="https://campusdigital.id/assets/images/program/student.jpeg" alt="Magang Program" />
                <h5 className="card-title">Digital Studentpreneur</h5>
                <p className="card-text">
                  Membangun jiwa entrepreneur bagi siswa kejuruan sangatlah penting karena dapat membantu si....
                  <a
                    onClick={() =>
                      showModal(
                        "Membangun jiwa entrepreneur bagi siswa kejuruan sangatlah penting karena dapat membantu siswa untuk mempersiapkan diri dalam memasuki dunia kerja yang kompetitif dan membangun karir yang sukses di masa depan. Jiwa entrepreneur dapat membantu siswa untuk mengembangkan keterampilan seperti kreativitas, inovasi, kepemimpinan, dan kemandirian, yang sangat dibutuhkan dalam dunia kerja saat ini. Selain itu, siswa yang memiliki jiwa entrepreneur juga dapat membuka peluang untuk menjadi pengusaha atau membangun bisnis mereka sendiri di masa depan. Bersama Campus Digital mewujudkan mimpi untuk menjadi seorang entrepreneur yang berhasil"
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>

          {/* Card for Narasumber dan Guru Tamu */}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="card-img-top" src="https://campusdigital.id/assets/images/program/narasumber.png" alt="Magang Program" />
                <h5 className="card-title">Narasumber dan Guru Tamu</h5>
                <p className="card-text">
                  Campus digital memiliki SDM yang unggul dalam bidang digital, dengan dibekali kemampuan pu....
                  <a
                    onClick={() =>
                      showModal(
                        "Campus digital memiliki SDM yang unggul dalam bidang digital, dengan dibekali kemampuan public speaking tim dari Campus Digital akan menemani siswa sebagai guru tamu untuk mengatasi perkembangan era digital dan menguasai kompetensi sesuai dengan starndart industri"
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>

          {/* Card for Pengembangan Usaha Mandiri */}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="card-img-top" src="https://campusdigital.id/assets/images/program/usman.jpeg" alt="Magang Program" />
                <h5 className="card-title">Pengembangan Usaha Mandiri</h5>
                <p className="card-text">
                  Mengembangkan usaha mandiri bagi sekolah kejuruan sangat penting karena dapat memberikan m....
                  <a
                    onClick={() =>
                      showModal(
                        "Pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sangatlah penting karena dapat mempersiapkan siswa untuk memasuki dunia industri yang kompetitif. Kurikulum yang disesuaikan dengan kebutuhan industri dapat membantu siswa untuk memperoleh keterampilan dan pengetahuan yang relevan dengan pekerjaan yang diinginkannya. Selain itu, sinergi antara sekolah kejuruan dan industri juga dapat membuka peluang kerja dan magang bagi siswa, sehingga mereka dapat memperoleh pengalaman kerja yang berharga sebelum lulus dari sekolah. Dengan demikian, pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sangatlah penting untuk memastikan kesesuaian antara keterampilan siswa dan kebutuhan industri. PT. Campus Digital Indonesia memberikan support bagi sekolah yang ingin melakukan sinkronisasi kurikulum dan Menjalin Kerjasama"
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>

          {/* Card for Pengembangan dan sinkronisasi kurikulum */}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="card-img-top" src="https://campusdigital.id/assets/images/program/19265-scaled.jpg" alt="Magang Program" />
                <h5 className="card-title">Pengembangan dan sinkronisasi kurikulum</h5>
                <p className="card-text">
                  Pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sang....
                  <a
                    onClick={() =>
                      showModal(
                        "Pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sangatlah penting karena dapat mempersiapkan siswa untuk memasuki dunia industri yang kompetitif. Kurikulum yang disesuaikan dengan kebutuhan industri dapat membantu siswa untuk memperoleh keterampilan dan pengetahuan yang relevan dengan pekerjaan yang diinginkannya. Selain itu, sinergi antara sekolah kejuruan dan industri juga dapat membuka peluang kerja dan magang bagi siswa, sehingga mereka dapat memperoleh pengalaman kerja yang berharga sebelum lulus dari sekolah. Dengan demikian, pengembangan dan sinkronisasi kurikulum antara sekolah kejuruan dengan dunia industri sangatlah penting untuk memastikan kesesuaian antara keterampilan siswa dan kebutuhan industri. PT. Campus Digital Indonesia memberikan support bagi sekolah yang ingin melakukan sinkronisasi kurikulum dan Menjalin Kerjasama"
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>

          {/* Ekstrakulikuler Jualan Online*/}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="card-img-top" src="https://campusdigital.id/assets/images/program/jualan-online.jpg" alt="Magang Program" />
                <h5 className="card-title">Ekstrakulikuler Jualan Online</h5>
                <p className="card-text">
                Pentingnya kompetensi jualan online bagi siswa sebagai bekal menghadapi era digital sangat.... 
                  <a
                    onClick={() =>
                      showModal(
                        "Pentingnya kompetensi jualan online bagi siswa sebagai bekal menghadapi era digital sangatlah tinggi. Dalam era digital saat ini, jualan online menjadi semakin populer dan menjadi salah satu cara untuk memperoleh penghasilan. Oleh karena itu, siswa yang memiliki kompetensi jualan online dapat mempersiapkan diri mereka untuk memasuki dunia kerja yang kompetitif dan membangun karir yang sukses di masa depan."
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>

          {/* Card for Upskilling & Reskilling Guru*/}
          <div className="col-12 col-sm-6 g-3">
            <div className="card rounded-1 shadow">
              <img style={{ height: "320px", width: "100%" }} className="card-img-top" src="https://campusdigital.id/assets/images/program/Upskilling-Courses.jpg" alt="Magang Program" />
                <h5 className="card-title">Upskilling & Reskilling Guru</h5>
                <p className="card-text">
                Upskilling dan reskilling sangat penting bagi guru sekolah kejuruan karena bidang teknolog....
                  <a
                    onClick={() =>
                      showModal(
                        "Upskilling dan reskilling sangat penting bagi guru sekolah kejuruan karena bidang teknologi dan industri terus berkembang dengan cepat. Dengan memperbarui keterampilan mereka, guru dapat memastikan bahwa siswa mereka mendapatkan pendidikan yang relevan dan up-to-date, serta siap untuk memasuki dunia kerja yang terus berubah."
                      )
                    }
                    type="button"
                    id="myBtn"
                  >
                    <span style={{ color: "blue" }}>
                      <u>Lihat Selengkapnya...</u>
                    </span>
                  </a>
                </p>
                <br />
                <a onClick={() => chatWA("Magang Siswa")} id="chat" className="chat btn btn-success">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>


      {isModalVisible && (
        <div className="modal" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-content" style={{ padding: "20px", borderRadius: "10px", backgroundColor: "#fff", maxWidth: "500px", width: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <span className="close" onClick={hideModal} style={{ cursor: "pointer", float: "right", fontSize: "20px" }}>
              &times;
            </span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MagangComponent;
