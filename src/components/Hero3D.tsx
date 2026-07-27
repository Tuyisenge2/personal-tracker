"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TrackerKnot() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const geometry = useMemo(
    () => new THREE.TorusKnotGeometry(1.15, 0.34, 260, 32, 2, 3),
    []
  );

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.28;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.current.y * 0.25,
        0.04
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -pointer.current.x * 0.15,
        0.04
      );
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#0ea5e9"
          metalness={0.35}
          roughness={0.15}
          transmission={0.55}
          thickness={1.4}
          iridescence={1}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[100, 500]}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.4}
        />
      </mesh>
    </group>
  );
}

function Sparks() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 220;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#38bdf8" size={0.02} sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#38bdf8" />
      <pointLight position={[-4, -2, 2]} intensity={30} color="#a855f7" />
      <pointLight position={[0, 4, -3]} intensity={25} color="#f472b6" />

      <TrackerKnot />
      <Sparks />
    </Canvas>
  );
}
