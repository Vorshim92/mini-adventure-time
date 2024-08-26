import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, useProgress } from "@react-three/drei";
import RotatingMap from "./components/RotatingMap";
import { Suspense } from "react";
import { Menu } from "./components/Menu";
import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function App() {
  const { progress } = useProgress();

  return (
    <>
      <Canvas shadows camera={{ position: [4, 6, 25], fov: 30 }}>
        <color attach="background" args={[0x87ceeb]} />
        <fog attach="fog" args={[0x87ceeb, 50, 80]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />

          {/* Luce direzionale (simulazione del sole) */}
          <directionalLight
            castShadow
            position={[-5, 5, -5]} // Basso sull'orizzonte per simulare l'alba
            intensity={1.2} // Luce più morbida
            color={new THREE.Color(0xffa07a)} // Colore caldo per simulare l'alba
            shadow-mapSize-width={4096} // Aumenta la risoluzione della mappa delle ombre
            shadow-mapSize-height={4096}
            shadow-camera-far={50}
            shadow-camera-left={-15}
            shadow-camera-right={15}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
            shadow-bias={-0.0001} // Riduci gli artefatti delle ombre
          />

          {/* Punto luce principale */}
          <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
          <RotatingMap />
          {/* Effetti di post-processing */}
          <EffectComposer>
            <Bloom intensity={1.5} radius={0.4} threshold={0.2} />
          </EffectComposer>
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
      <Loader />
      {progress === 100 && <Menu />}
    </>
  );
}
