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

export function Scene() {
  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Suspense fallback={null}>
          <FallingGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
}
