import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { registerUser } from "../api/authApi"; // Pastikan path ini sesuai
import { useNavigate } from "react-router-dom";

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

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    // Validasi password
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Password tidak cocok" });
      setIsLoading(false);
      return;
    }

    try {
      // Format data sesuai kebutuhan API
      const apiData = {
        name: formData.fullName,
        birthdate: formData.birthDate,
        gender: formData.gender,
        no_hp: formData.phoneNumber,
        instansi: formData.school,
        // profession: formData.profession,
        reference: formData.referralCode,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        // password_confirmation: formData.confirmPassword,
      };
      console.log(apiData); // Debugging: Lihat data yang akan dikirim

      const response = await registerUser(apiData);
      
      setSuccessMessage("Registrasi berhasil! Silakan cek email Anda untuk verifikasi.");
      console.log("Registration success:", response);
      
      // // Reset form setelah berhasil
      // setFormData({  
      //   fullName: "",
      //   birthDate: "",
      //   gender: "",
      //   phoneNumber: "",
      //   school: "",
      //   profession: "",
      //   referralCode: "",
      //   email: "",
      //   username: "",
      //   password: "",
      //   confirmPassword: "",
      // });

      // Redirect setelah 3 detik
      setTimeout(() => {
        navigate("/login");
      }, 3000);

    } catch (error) {
      console.error("Registration error:", error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: error.response?.data?.message || "Terjadi kesalahan saat registrasi" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#F8F9FA", minHeight: "100vh" }}>
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          {/* Sticky Gambar */}
          <Col md={5} className="d-none d-md-block">
            <div style={{ position: "sticky", top: "20px" }}>
              <img
                src="src/assets/img/register.png"
                alt="Illustration"
                className="img-fluid"
              />
            </div>
          </Col>

          {/* Form Registrasi */}
          <Col md={6}>
            <Card className="p-4 shadow">
              <div className="text-center mb-3">
                <img
                  src="src/assets/img/image.png"
                  alt="Campus Digital"
                  width={180}
                  className="mb-2"
                />
                <h4 className="fw-bold">Form Registrasi</h4>
              </div>

              <hr />
              
              {/* Menampilkan pesan error/success */}
              {errors.general && (
                <Alert variant="danger" className="text-center">
                  {errors.general}
                </Alert>
              )}
              
              {successMessage && (
                <Alert variant="success" className="text-center">
                  {successMessage}
                </Alert>
              )}

              {/* Panduan Download */}
              <div className="text-center mb-3">
                <Button 
                  variant="outline-purple" 
                  href="https://campusdigital.id/assets/docs/TUTORIAL%20PENDAFTARAN%20MEMBER%20CAMPUS%20DIGITAL.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  className="px-3 py-2 rounded-3 fw-medium"
                  style={{
                    color: '#6f42c1',
                    borderColor: '#6f42c1',
                    '&:hover': {
                      backgroundColor: '#6f42c1',
                      color: '#fff'
                    }
                  }}
                >
                  <i className="bi bi-file-earmark-pdf me-2"></i> 
                  <span style={{ fontSize: "0.875rem" }}>Download Panduan Pendaftaran</span>
                </Button>
              </div>

              {/* Biaya */}
              <section className="price-box">
                <div className="bg-light p-2 text-center rounded mb-3 border">
                  <h6 className="text-success m-0">Biaya Aktivasi:</h6>
                  <del className="text-danger">Rp 799.000</del>
                  <h5 className="text-success m-0 text-center">Rp 99.000</h5>
                </div>
              </section>

              {/* Sponsor */}
              <section className="sponsor-box">
                <div className="bg-warning p-2 text-center rounded mb-4">
                  <strong>Sponsor:</strong> Faris Fanani
                </div>
              </section>

              <Form onSubmit={handleSubmit}>
                <fieldset>
                  <div className="h6 fw-bold text-center mb-3">--- Identitas Pendaftar ---</div>
                  
                  {/* Nama Lengkap */}
                  <Form.Group className="mb-3">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      size="sm"
                      placeholder="Masukkan Nama Lengkap"
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name?.[0]}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Tanggal Lahir */}
                  <Form.Group className="mb-3">
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Form.Control
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                      size="sm"
                      isInvalid={!!errors.birth_date}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.birth_date?.[0]}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Jenis Kelamin */}
                  <Form.Group className="mb-3">
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <div>
                      <Form.Check
                        inline
                        type="radio"
                        label="Laki-laki"
                        name="gender"
                        value="L"
                        checked={formData.gender === "L"}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        label="Perempuan"
                        name="gender"
                        value="P"
                        checked={formData.gender === "P"}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.gender && (
                      <div className="text-danger small">{errors.gender[0]}</div>
                    )}
                  </Form.Group>

                  {/* Nomor HP */}
                  <Form.Group className="mb-3">
                    <Form.Label>Nomor HP</Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      size="sm"
                      placeholder="Masukkan Nomor HP"
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone?.[0]}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Asal Sekolah/Instansi */}
                  <Form.Group className="mb-3">
                    <Form.Label>Asal Sekolah/Instansi</Form.Label>
                    <Form.Control
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      required
                      size="sm"
                      placeholder="Masukkan Nama Sekolah/Instansi"
                      isInvalid={!!errors.institution}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.institution?.[0]}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Profesi */}
                  <Form.Group className="mb-3">
                    <Form.Label>Profesi</Form.Label>
                    <Form.Select
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                      size="sm"
                      isInvalid={!!errors.profession}
                    >
                      <option value="">Pilih Profesi</option>
                      <option value="Karyawan">Karyawan</option>
                      <option value="UMKM">UMKM</option>
                      <option value="Pelajar">Pelajar</option>
                      <option value="Mahasiswa">Mahasiswa</option>
                      <option value="Dosen">Dosen</option>
                      <option value="Guru">Guru</option>
                      <option value="Lain-lain">Lain-lain</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.profession?.[0]}
                    </Form.Control.Feedback>
                  </Form.Group>
                </fieldset>

                <fieldset className="mt-4">
                  <div className="h6 fw-bold text-center mb-3">--- Akun Pendaftar ---</div>

                  {/* Referral Code */}
                  <Form.Group className="mb-3">
                    <Form.Label>Referal (bila ada)</Form.Label>
                    <Form.Control
                      type="text"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleChange}
                      size="sm"
                      placeholder="Kode Referal"
                      isInvalid={!!errors.referral_code}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.referral_code?.[0]}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      size="sm"
                      placeholder="Contoh: nama@gmail.com"
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.[0]}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Username */}
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      size="sm"
                      placeholder="Masukkan Username"
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username?.[0]}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Password */}
                  <Form.Group className="mb-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      size="sm"
                      placeholder="Masukkan Password"
                      isInvalid={!!errors.password}
                    />
                    <Form.Text className="text-muted">Minimal 6 karakter</Form.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.[0]}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Confirm Password */}
                  <Form.Group className="mb-4">
                    <Form.Label>Ulangi Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      size="sm"
                      placeholder="Ulangi Password"
                      isInvalid={!!errors.confirmPassword || !!errors.password_confirmation}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword || errors.password_confirmation?.[0]}
                    </Form.Control.Feedback>
                  </Form.Group>
                </fieldset>

                <div className="d-grid">
                  <Button 
                    variant="success" 
                    type="submit" 
                    size="sm"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Memproses...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-check-circle me-2"></i> Kirim
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterComponent;