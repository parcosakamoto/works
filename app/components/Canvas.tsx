"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function EggModel() {
  const { scene } = useGLTF("/images/egg.glb"); // publicに置いた場合
  return <primitive object={scene} scale={1} />;
}

export default function EggCanvas() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <EggModel />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          inertia={0.5} // フリック感
        />
      </Canvas>
    </div>
  );
}

// 必須：GLTFローダーのプリロード
useGLTF.preload("/images/egg.glb");
