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
        // 2. Add event listeners to toggle the hover state
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "absolute",
          top: "56%",
          left: "50%",
          // 3. Dynamically alter the transform property so it scales nicely on hover
          transform: isHovered 
            ? "translate(-50%, -50%) scale(1.05)" 
            : "translate(-50%, -50%) scale(1)",
          // 4. Dynamically switch background color based on hover state
          backgroundColor: isHovered ? "crimson" : "red",
          color: "#ffffff",
          border: "none",
          padding: "10px 20px",
          fontSize: "1.4rem",
          fontWeight: "bold",
          cursor: "pointer",
          borderRadius: "15px",
          zIndex: 1,
          // 5. Add a smooth transition time so it doesn't snap abruptly
          transition: "all 0.2s ease-in-out",
        }}
        
      >
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
