import { useEffect } from "react";

const FinisherHeader1 = () => {
  useEffect(() => {
    // Cek apakah elemen sudah ada
    let headerDiv = document.querySelector(".finisher-header");
    if (!headerDiv) {
      headerDiv = document.createElement("div");
      headerDiv.className = "finisher-header";
      document.body.prepend(headerDiv);
    }

    // Load library dari public folder
    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";
    script.async = true;
    script.onload = () => {
      console.log("FinisherHeader script loaded.");
      
      // Pastikan window.FinisherHeader tersedia
      setTimeout(() => {
        if (window.FinisherHeader) {
          console.log("Initializing FinisherHeader...");
          new window.FinisherHeader({
            "count": 50,
            "size": {
              "min": 2,
              "max": 22,
              "pulse": 0.1
            },
            "speed": {
              "x": {
                "min": 0,
                "max": 0.8
              },
              "y": {
                "min": 0,
                "max": 0.2
              }
            },
            "colors": {
              "background": "#ffffff",
              "particles": [
                "#330369",
                "#330369",
                "#acaaff",
                "#1bffc2",
                "#f9a5fe"
              ]
            },
            "blending": "screen",
            "opacity": {
              "center": 1,
              "edge": 1
            },
            "skew": 0,
            "shapes": [
              "c",
              "s",
              "t"
            ]
          });
        } else {
          console.error("FinisherHeader is not available.");
        }
      }, 500); // Delay untuk memastikan elemen tersedia
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="finisher-header" style={{ position: "absolute", width: "100%", height: "100vh", top: 0, left: 0, zIndex: -1 }} />;
};

export default FinisherHeader1;
