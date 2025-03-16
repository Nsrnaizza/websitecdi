import React, { useState } from "react";
import logo from "../assets/img/image.png";
import Illustration from "../assets/img/register.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#F8F9FA" }}>
      {/* Form di kiri */}
      <div style={{ width: "30%", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", borderRadius: "8px", backgroundColor: "white", overflow: "hidden", padding: "5px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img src={logo} alt="Campus Digital Logo" style={{ marginBottom: "2px" }} />
        <h4 style={{ marginBottom: "15px", color: "#4a148c" }}>Masuk</h4>
        <form style={{ width: "100%" }}>
          <div style={{ marginBottom: "15px" }}>
            <input type="text" style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="Email atau Username" />
          </div>
          <div style={{ marginBottom: "15px", position: "relative" }}>
            <input 
              type={showPassword ? "text" : "password"} 
              style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} 
              placeholder="Password" 
            />
            <span 
              onClick={() => setShowPassword(!showPassword)} 
              style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <a href="#" style={{ textDecoration: "none", color: "#4a148c" }}>Lupa password?</a>
          </div>
          <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "rgba(230, 220, 250, 0.9)", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginBottom: "10px" }}>Masuk</button>
          <p style={{ textAlign: "center", marginBottom: "10px", color: "#4a148c" }}>Belum punya akun?</p>
          <button type="button" style={{ width: "100%", padding: "10px", backgroundColor: "#ffcc00", color: "black", border: "none", borderRadius: "4px", cursor: "pointer" }}>Daftar</button>
        </form>
      </div>
      {/* Ilustrasi di kanan */}
      <div style={{ width: "40%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={Illustration} alt="Illustration" style={{ width: "100%", maxWidth: "400px" }} />
      </div>
    </div>
  );
};

export default Login;
