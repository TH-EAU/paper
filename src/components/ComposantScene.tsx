"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";

const ComposantScene: React.FC = () => {
  return (
    <Canvas shadows orthographic camera={{ zoom: 40, position: [10, 10, 10] }}>
      <ambientLight intensity={0.5} />
      <ambientLight intensity={0.2} color="blue" position={[5, 5, 5]} />
      <directionalLight color="white" position={[2, 5, 5]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </Canvas>
  );
};

export default ComposantScene;
