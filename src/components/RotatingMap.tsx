import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { MenuHouse } from "./MenuHouse";
import { TreeHouse } from "./TreeHouse";
function RotatingMap() {
  const mapRef = useRef<Mesh>(null);

  // Rotazione lenta della mappa
  useFrame(() => {
    if (mapRef.current) {
      mapRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={mapRef} castShadow receiveShadow>
      {/* Includi qui il modello della mappa */}
      {/* <MenuHouse scale={0.5} position={[0, 0, 0]} castShadow receiveShadow /> */}
      <TreeHouse scale={0.1} position={[0, 0, 0]} castShadow receiveShadow />
    </group>
  );
}

export default RotatingMap;
