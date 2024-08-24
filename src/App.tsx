import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import RotatingMap from "./components/RotatingMap";

export default function App() {
  return (
    <Canvas
      shadows
      style={{ background: "linear-gradient(to top, #87CEEB, #FFFFFF)" }} // Sfondo celeste
    >
      <ambientLight intensity={0.5} />

      {/* Luce direzionale con ombre */}
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

      {/* Punto luce principale */}
      <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />

      {/* Mappa rotante */}
      <RotatingMap />

      {/* Sfocatura */}
      {/* <mesh>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial transparent opacity={0.3} color="black" />
      </mesh> */}

      {/* Logo del gioco */}
      <Html position={[0, 1.5, 0]} center>
        <div style={{ textAlign: "center", color: "white", fontSize: "2rem" }}>
          <img src="/logo.png" alt="Game Logo" style={{ width: "800px" }} />
        </div>
      </Html>

      {/* Pulsante Start */}
      <Html position={[0, -2, 0]} center>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1.5rem",
            cursor: "pointer",
            background: "transparent",
            border: "2px solid white",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="/sword-icon.png" alt="Start" style={{ height: "140px", marginRight: "20px" }} />
          START
        </button>
      </Html>

      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}
