import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, useProgress } from "@react-three/drei";
import RotatingMap from "./components/RotatingMap";
import { Suspense } from "react";
import { Menu } from "./components/Menu";

export default function App() {
  const { progress } = useProgress();

  return (
    <>
      <Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
        <color attach="background" args={[0x87ceeb]} />
        <fog attach="fog" args={[0x87ceeb, 30, 40]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />

          {/* Luce direzionale (simulazione del sole) */}
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={1.5}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          {/* Punto luce principale */}
          <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
          <RotatingMap />
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
      <Loader />
      {progress === 100 && <Menu />}
    </>
  );
}
