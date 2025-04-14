import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/img/image.png";
import Illustration from "../assets/img/reguler.png";
import { login } from "../api/authService";
import FinisherHeader from "../components/FinisherHeader";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      console.log("Mengirim data login...");
      const response = await login({ email, password });

      console.log("Login Berhasil:", response);
      localStorage.setItem("token", response.token);
      navigate("/dashboard"); // Ganti dengan rute dashboard yang sesuai
    } catch (error) {
      console.error("Login Gagal:", error);
      setErrorMessage(error.message || "Login gagal, periksa kembali email dan password.");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Background Animasi */}
      <div className="background-animation">
        <FinisherHeader />
      </div>

      {/* Container utama */}
      <div className="login-container">
        {/* Ilustrasi */}
        <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="illustration-container">
          <img src={Illustration} alt="Illustration" className="illustration-img" />
        </motion.div>

        {/* Form Login */}
        <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="login-form">
          <img src={logo} alt="Campus Digital Logo" className="login-logo" />
          <h4 className="login-title">Masuk</h4>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <form onSubmit={handleLogin} className="form">
            <div className="form-group">
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email atau Username" required />
            </div>
            <div className="form-group">
              <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
              <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>
            <div className="forgot-password">
              <a href="#">Lupa password?</a>
            </div>
            <button type="submit" className="btn-login">
              Masuk
            </button>
            <p className="register-text">Belum punya akun?</p>
            <button type="button" onClick={() => navigate("/register")} className="btn-register">
              Daftar
            </button>
          </form>
        </motion.div>
      </div>

      <style>
        {`
          .login-wrapper {
            position: relative;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .background-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
          }

          .login-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 200px;
            width: 90%;
            max-width: 1200px;
            padding: 20px;
          }

          .login-form {
            width: 30%;
            min-width: 250px;
            max-width: 350px;
            padding: 30px;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
            border-radius: 20px;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .login-logo {
            margin-bottom: 20px;
            width: 120px;
          }

          .login-title {
            margin-bottom: 15px;
            color: #4a148c;
          }

          .error-message {
            color: red;
            text-align: center;
          }

          .form {
            width: 100%;
          }

          .form-group {
            margin-bottom: 15px;
            position: relative;
          }

          .input {
            width: 100%;
            padding: 8px;
            border-radius: 15px;
            border: 1px solid rgba(154, 113, 236, 0.9);
          }

          .password-toggle {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
          }

          .forgot-password {
            margin-bottom: 15px;
            text-align: left;
          }

          .forgot-password a {
            text-decoration: none;
            color: #4a148c;
            font-size: 14px;
          }

          .btn-login {
            width: 100%;
            padding: 8px;
            background-color: rgba(154, 113, 236, 0.9);
            color: white;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            margin-bottom: 10px;
            font-size: 14px;
          }

          .register-text {
            text-align: center;
            margin-bottom: 10px;
            color: #4a148c;
            font-size: 14px;
          }

          .btn-register {
            width: 100%;
            padding: 8px;
            background-color: #ffcc00;
            color: white;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            font-size: 14px;
          }

          .illustration-container {
            width: 50%;
            max-width: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .illustration-img {
            width: 100%;
            max-width: 500px;
          }

          @media (max-width: 1080px) {
            .login-container {
              flex-direction: column;
              gap: 30px;
              margin-top: 100px;
              margin-buttom: 200px;
            }

            .illustration-container {
              width: 70%;
              text-align: center;
            }

            .illustration-img {
              max-width: 400px;
            }

            .login-form {
              width: 80%;
              max-width: 350px;
            }
          }

          @media (max-width: 740px) {
            .illustration-container {
              width: 90%;
            }

            .login-form {
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
