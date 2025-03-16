import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const RegisterComponent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    gender: "",
    phoneNumber: "",
    school: "",
    profession: "",
    referralCode: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div style={{ display: "flex", height: "230vh", alignItems: "center", justifyContent: "center", backgroundColor: "#F8F9FA" }}>
      <Container className="mt-5" >
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Card className="p-4 shadow justify-content-lg-center">
            <div className="text-center mb-2">
              <img src="src/assets/img/image.png" alt="Campus Digital" width={200} />
              <h4>Form Registrasi</h4>
            </div>
            <hr></hr>
            <section className="price-box">
            <div className="custom-green p-2 text-center rounded mb-2">
            <h6 className="text-success">Biaya Aktivasi:</h6>
              <del className="text-danger">Rp 799.000</del>
              <h5 className="text-success text-center">Rp 99.000</h5>
            </div>
            </section>
            <section className="sponsor-box">
            <div className="custom-yellow p-1 text-center rounded mb-3">
              <b>Sponsor:</b> Faris Fanani
            </div> <br>
            </br>
            </section>
            <Form onSubmit={handleSubmit}>
              <fieldset>
                <div className="h6 fw-bold text-center">---Identitas Pendaftar---</div>
                <Form.Group>
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control type="text" name="fullName" onChange={handleChange} required size="sm" placeholder="Masukkan Nama Lengkap" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control type="date" name="birthDate" onChange={handleChange} required size="sm" placeholder="Masukkan Tanggal Lahir" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <div>
                    <Form.Check inline type="radio" label="Laki-laki" name="gender" value="Laki-laki" onChange={handleChange} /> <br></br>
                    <Form.Check inline type="radio" label="Perempuan" name="gender" value="Perempuan" onChange={handleChange} />
                  </div>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Nomor HP</Form.Label>
                  <Form.Control type="text" name="phoneNumber" onChange={handleChange} required size="sm" placeholder="Masukkan Nomor HP"/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Masukkan Asal/Nama Sekolah/Nama Instansi</Form.Label>
                  <Form.Control type="text" name="fullName" onChange={handleChange} required size="sm" placeholder="Masukkan Nomor HP"/>
                </Form.Group>

                <Form.Group>
  <Form.Label>Profesi</Form.Label>
  <Form.Select name="country" onChange={handleChange} required size="sm">
    <option value="">Pilih Profesi</option>
    <option value="Karyawan">Karyawan</option>
    <option value="UMKM">UMKM</option>
    <option value="Pelajar">Pelajar</option>
    <option value="Mahasiswa">Mahasiswa</option>
    <option value="Dosen">Dosen</option>
    <option value="Guru">Guru</option>
    <option value="Dan Lain Lain">Lain-lain</option>
  </Form.Select>
</Form.Group>

              </fieldset>

              <br></br>

              <fieldset className="mt-2">
                <div className="h6 fw-bold text-center">---Akun Pendaftar---</div>
                <Form.Group>
                  <Form.Label>Referal (bila ada)</Form.Label>
                  <Form.Control type="kode" name="kode" onChange={handleChange} required size="sm" placeholder="kode referal"/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" onChange={handleChange} required size="sm" placeholder="Contoh: sirpobon8@gmail.com"/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" onChange={handleChange} required size="sm" placeholder="Masukkan Username"/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" onChange={handleChange} required size="sm" placeholder="Masukkan Password"/>
                </Form.Group>
                <h6>Diisi minimal 6 karakter</h6>

                <Form.Group>
                  <Form.Label>Ulangi Password</Form.Label>
                  <Form.Control type="password" name="password" onChange={handleChange} required size="sm" placeholder="Ulangi Password"/>
                </Form.Group>
              </fieldset>

              <div className="text-justify mt-2">
              <Button className="submit-btn custom-green-btn" type="submit" size="sm">
  <i className="bi bi-check-circle text-success"></i> Kirim
</Button>
</div>
            </Form>
          </Card>
        </Col>
        <Col md={5} className="text-center">
          <img src="src/assets/img/register.png" alt="Illustration" className="img-fluid" height={300}/>
        </Col>
      </Row>
    </Container>
    </div>
    
  );
};

export default RegisterComponent; 