import { useState } from "react";

function Content() {
  // 1. Create a state to track if the button is being hovered
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", height: "700px" }}>
      {/* Text Element Overlay */}
      
<>
  <h1 style={{
    position: "absolute",
    top: "38%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#ffffff",
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "800",
    fontFamily: "'Poppins', system-ui, sans-serif",
    textShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
    margin: 0,
    zIndex: 10,
    whiteSpace: "nowrap"
  }}>
    Learn <span style={{ color: "#FFD700" }}>MERN</span> Stack
  </h1>
      
  <h2 style={{
    position: "absolute",
    top: "calc(38% + 4rem)",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#f0f0f0",
    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
    fontWeight: "400",
    fontFamily: "'Merriweather', Georgia, serif",
    textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
    margin: 0,
    zIndex: 10,
    whiteSpace: "nowrap"
  }}>
    Master the Full-Stack Development
  </h2>
</>
      
      {/* Button with Hover Effect */}
      <button
  class="fancy-button"
  style="
    position: absolute;
    top: 56%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 15px;
    z-index: 1;
    background-color: red;
    transition: all 0.2s ease-in-out;
  "
>
  Click Me
</button>
  Click Me
</button>
        Enroll Now
      </button>

      {/* Background Image */}
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src="https://images.pexels.com/photos/5841687/pexels-photo-5841687.jpeg"
        alt=""
      />
    </div>
  );
}

export default Content;
