"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef, Suspense, useMemo, useEffect } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { useScroll } from "framer-motion";
import * as THREE from "three";

function FallingGlobe(props: any) {
  const ref = useRef<any>(null);
  const { scrollY } = useScroll();
  
  // Create a hollow sphere (globe)
  // Increased count for density, Radius adjusted for screen fit
  const sphere = useMemo(() => {
    return random.onSphere(new Float32Array(12000), { radius: 2.2 });
  }, []);

  useFrame((state, delta) => {
    // Get current scroll
    const scroll = scrollY.get();
    
    // Constant slow rotation on Y (spinning globe)
    ref.current.rotation.y += delta * 0.05;

    // "Infinite Falling" Effect:
    // We rotate the sphere on the X-axis. 
    // If points move UP on the front face, it feels like we are falling DOWN.
    // Base speed + Scroll speed
    const fallSpeed = 0.05 + (scroll * 0.0002); 
    ref.current.rotation.x += delta * fallSpeed;

    // Subtle breathing/floating
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003} // Finer particles for "Space" feel
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
}

function Jellyfish() {
  const { scrollYProgress } = useScroll();
  const groupRef = useRef<THREE.Group>(null);
  const bellRef = useRef<THREE.Points>(null);
  const tentaclesRef = useRef<THREE.Points>(null);

  // Generate particles for the Bell (Hemisphere-ish)
  const bellParticles = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 0.5; // Upper hemisphere
        const r = 0.8 + Math.random() * 0.1; // Radius
        
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.cos(phi) * 0.6; // Flatten slightly
        positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return positions;
  }, []);

  // Generate particles for Tentacles (Long trails)
  const tentacleParticles = useMemo(() => {
      const count = 1200;
      const positions = new Float32Array(count * 3);
      const tentacleCount = 12;
      const pointsPerTentacle = count / tentacleCount;

      for (let t = 0; t < tentacleCount; t++) {
          const theta = (t / tentacleCount) * Math.PI * 2;
          const r = 0.4 + Math.random() * 0.2; // Base radius
          
          for (let i = 0; i < pointsPerTentacle; i++) {
              const idx = (t * pointsPerTentacle + i) * 3;
              const y = -(i * 0.05); // Going down
              
              positions[idx] = r * Math.cos(theta);
              positions[idx + 1] = y;
              positions[idx + 2] = r * Math.sin(theta);
          }
      }
      return positions;
  }, []);

  useFrame((state) => {
      if (!groupRef.current) return;
      const time = state.clock.elapsedTime;
      const scroll = scrollYProgress.get(); // 0 to 1

      // 1. Scroll Interaction: Move down and Scale down
      // Start in middle (y=0), move deep down (y=-10)
      const targetY = 0 - (scroll * 10); 
      // Start scale 1, shrink to 0.2
      const targetScale = 1 - (scroll * 0.8); 

      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1);
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.1));
      
      // Rotate slowly
      groupRef.current.rotation.y = time * 0.1;

      // 2. Animation: Pulse Bell
      // We can't easily modify buffer attributes in vanilla ReactThreeFiber without a ref to geometry or manual attribute update.
      // For simplicity in this constraints, we'll just float the whole group and maybe scale the bell slightly.
      if (bellRef.current) {
         bellRef.current.scale.x = 1 + Math.sin(time * 2) * 0.05;
         bellRef.current.scale.z = 1 + Math.sin(time * 2) * 0.05;
         bellRef.current.scale.y = 1 - Math.sin(time * 2) * 0.05;
      }
      
      // 3. Animation: Waving Tentacles
      // Real vertex animation is expensive here without a custom shader.
      // Let's rotate/swing the jellyfish slightly to simulate swimming.
      groupRef.current.rotation.z = Math.sin(time) * 0.1;
      groupRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, 2, 0]}>
        {/* Bell */}
        <Points ref={bellRef} positions={bellParticles} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#ffffff" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
        </Points>
        {/* Tentacles */}
        <Points ref={tentaclesRef} positions={tentacleParticles} stride={3} frustumCulled={false}>
             <PointMaterial transparent color="#ffffff" size={0.015} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
        </Points>
    </group>
  );
}

function FloatingParticles() {
  const ref = useRef<any>(null);
  const particles = useMemo(() => {
    return random.inSphere(new Float32Array(3000), { radius: 4 });
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y -= delta * 0.02;
    // Simulate simple rising "bubbles" or "dust"
    ref.current.position.y += Math.sin(state.clock.elapsedTime) * 0.0005; 
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015} // Slightly varying size illusion via distance
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

export function Scene() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Suspense fallback={null}>
          <FallingGlobe />
          <FloatingParticles />
          <Jellyfish />
        </Suspense>
      </Canvas>
    </div>
  );
}
