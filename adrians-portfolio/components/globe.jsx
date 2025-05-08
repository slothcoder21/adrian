"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/car/scene.gltf";
  const mesh = useRef(null);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.0009;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Globe() {
  return (
    <div className='flex justify-center items-center h-screen relative overflow-hidden'>
      <Canvas className="w-full h-full"camera={{ position: [0, 8, 28], fov: 60}}>
        <OrbitControls enableZoom maxDistance={24} minDistance={2}/>
        <ambientLight intensity={10}/>
        <directionalLight intensity={2} position={[5, 10, 7]} castShadow />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}