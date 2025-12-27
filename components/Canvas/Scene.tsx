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
    const fallSpeed = 0.01 + (scroll * 0.0002); 
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

function LargeFloatingParticles() {
  const ref = useRef<any>(null);
  // Fewer, larger particles for that "floating embers/fireflies" feel
  const particles = useMemo(() => {
    return random.inSphere(new Float32Array(300), { radius: 3 });
  }, []);

  useFrame((state, delta) => {
    // Independent drift
    ref.current.rotation.x += delta * 0.01;
    ref.current.rotation.y += delta * 0.015;
    // Gentle vertical float
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2; 
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.04} // Distinctly larger
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7} // More visible
        />
      </Points>
    </group>
  );
}

function Jellyfish() {
  const { scrollYProgress } = useScroll();
  const groupRef = useRef<THREE.Group>(null);
  const bellRef = useRef<THREE.Points>(null); 
  const fillerRef = useRef<THREE.Points>(null); // New: Internal Filler
  const rimRef = useRef<THREE.Points>(null);  
  const coreRef = useRef<THREE.Points>(null); 
  const tentaclesRef = useRef<THREE.Points>(null); 
  const vortexRef = useRef<THREE.Points>(null); // New: Surrounding Ripple/Vortex

  // 1. Bell: Translucent Blue Dome - WIDENED to meet Rim
  const bellParticles = useMemo(() => {
    const count = 6000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random()); 
        // Previously * 0.55 (too narrow). Now * 0.9 to reach closer to PI/2 (Rim)
        const safePhi = phi * 0.9; 
        
        // Volume + Surface
        const r = 1.0 + Math.random() * 0.1; 
        
        // Flattened Hemisphere
        positions[i * 3] = r * Math.sin(safePhi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.cos(safePhi) * 0.9; // Squat dome
        positions[i * 3 + 2] = r * Math.sin(safePhi) * Math.sin(theta);
    }
    return positions;
  }, []);

  // 1b. Filler: Sparse Dots Inside (Connects Top to Circle)
  const fillerParticles = useMemo(() => {
      const count = 1000; // "Don't use more" -> Sparse
      const positions = new Float32Array(count * 3);
      for(let i=0; i<count; i++) {
          // Point inside the dome volume
          const theta = Math.random() * Math.PI * 2;
          const r = Math.random() * 0.8; // Internal
          const y = Math.random() * 0.5;
          
          positions[i * 3] = r * Math.cos(theta);
          positions[i * 3 + 1] = y;
          positions[i * 3 + 2] = r * Math.sin(theta);
      }
      return positions;  
  }, []);

  // 2. Rim: Spectral Aberration Edge
  const rimParticles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const r = 1.0 + (Math.random() - 0.5) * 0.05;
        const y = (Math.random() - 0.5) * 0.05;
        positions[i * 3] = r * Math.cos(theta);
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = r * Math.sin(theta);
    }
    return positions;
  }, []);

  // 3. Central Core: Detailed Strands
  const coreParticles = useMemo(() => {
    const count = 3000; 
    const positions = new Float32Array(count * 3);
    const numStrands = 8;
    const ptsPerStrand = count / numStrands;
    
    for(let s=0; s<numStrands; s++) {
        const theta = (s/numStrands) * Math.PI * 2;
        for(let i=0; i<ptsPerStrand; i++) {
            const idx = (s*ptsPerStrand + i) * 3;
            const p = i/ptsPerStrand;
            
            // Start higher up to connect to dome
            const y = 0.4 - (p * 4.0); 
            
            const rBase = 0.2 * (1 - p); 
            const zig = Math.sin(y * 20) * 0.05;
            const zag = Math.cos(y * 15) * 0.05;
            
            positions[idx] = (rBase + zig) * Math.cos(theta);
            positions[idx+1] = y;
            positions[idx+2] = (rBase + zag) * Math.sin(theta);
        }
    }
    return positions;
  }, []);

  // 4. Outer Tentacles: More Organic Spread
  const tentacleParticles = useMemo(() => {
    const count = 3000; // Slightly reduced count to de-clutter
    const positions = new Float32Array(count * 3);
    const numTentacles = 30; // Fewer independent strands
    const ptsPerStrand = count / numTentacles;

    for (let t = 0; t < numTentacles; t++) {
        // Randomize start angle slightly for less perfect ring
        const theta = (t / numTentacles) * Math.PI * 2 + (Math.random() * 0.1);
        const startR = 0.9 + Math.random() * 0.15; // Vary attachment point
        
        for (let i = 0; i < ptsPerStrand; i++) {
            const idx = (t * ptsPerStrand + i) * 3;
            const progress = i / ptsPerStrand;
            
            const wave = Math.sin(progress * 15) * 0.15;
            
            positions[idx] = (startR + wave) * Math.cos(theta);
            positions[idx + 1] = -progress * 4.0;
            positions[idx + 2] = (startR + wave) * Math.sin(theta);
        }
    }
    return positions;
  }, []);

  // 5. Surrounding Vortex / Ripple (New)
  const vortexParticles = useMemo(() => {
      const count = 1500;
      const positions = new Float32Array(count * 3);
      for(let i=0; i<count; i++) {
          // Flattened sphere/disk rings
          const theta = Math.random() * Math.PI * 2;
          const r = 1.5 + Math.random() * 1.5; // Wide area
          const y = (Math.random() - 0.5) * 1.0; // Flat-ish
          
          positions[i * 3] = r * Math.cos(theta);
          positions[i * 3 + 1] = y;
          positions[i * 3 + 2] = r * Math.sin(theta);
      }
      return positions;
  }, []);

  useFrame((state) => {
      if (!groupRef.current) return;
      const time = state.clock.elapsedTime;
      const scroll = scrollYProgress.get(); 
      const pointer = state.pointer; 

      // --- Swim Cycle ---
      const speed = 1.4;
      const t = time * speed;
      const cycle = t % (Math.PI * 2);
      const propulsion = Math.pow(Math.sin(cycle), 4);
      const contraction = THREE.MathUtils.smoothstep(propulsion, 0.2, 1.0) * 0.25;
      
      if (bellRef.current) {
          bellRef.current.scale.x = 1 - contraction;
          bellRef.current.scale.z = 1 - contraction;
          bellRef.current.scale.y = 1 + contraction * 0.8;
      }
      if (fillerRef.current) {
          fillerRef.current.scale.copy(bellRef.current!.scale);
      }
      if (rimRef.current) {
          rimRef.current.scale.x = 1 - contraction;
          rimRef.current.scale.z = 1 - contraction;
      }

      // Drag Effect
      const drag = contraction * 2.0; 
      
      if (coreRef.current) {
          coreRef.current.scale.y = 1 + drag * 0.5;
          coreRef.current.scale.x = 1 - drag * 0.1;
          coreRef.current.scale.z = 1 - drag * 0.1;
          coreRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
      }

      if (tentaclesRef.current) {
          tentaclesRef.current.scale.y = 1 + drag; 
          tentaclesRef.current.scale.x = 1 - drag * 0.2;
          tentaclesRef.current.scale.z = 1 - drag * 0.2;
          tentaclesRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
      }
      
      // Vortex Animation (Rotate + Pulse)
      if (vortexRef.current) {
          vortexRef.current.rotation.y = time * 0.2; // Slow spin
          vortexRef.current.rotation.z = Math.sin(time * 0.1) * 0.1; // Tilt
          // Dilate with swim
          const vScale = 1 + (propulsion * 0.05);
          vortexRef.current.scale.setScalar(vScale);
      }

      // --- Movement ---
      const scrollYOffset = -(scroll * 15);
      const wanderX = Math.sin(time * 0.2) * 2.5 + Math.cos(time * 0.5) * 0.5;
      const wanderY = Math.cos(time * 0.15) * 2.0; 
      const wanderZ = Math.sin(time * 0.1) * 1.5;

      const mouseX = pointer.x * 3.0;
      const mouseY = pointer.y * 3.0;

      const targetX = -2 + (scroll * 3) + wanderX + mouseX;
      const targetY = 2 + scrollYOffset + wanderY + mouseY;
      const targetZ = wanderZ;
      
      const burst = THREE.MathUtils.smoothstep(propulsion, 0.2, 0.8);
      const moveAlpha = 0.005 + (burst * 0.04); 

      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, moveAlpha);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, moveAlpha);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, moveAlpha);

      // --- Rotation & Scale ---
      const velX = targetX - groupRef.current.position.x;
      const velY = targetY - groupRef.current.position.y;
      groupRef.current.rotation.z = -velX * 0.2; 
      groupRef.current.rotation.x = velY * 0.2;
      groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.2; 

      // Smaller Scale ("Reduce size small")
      const targetSize = 0.6 - (scroll * 0.3); // Reduced from 0.9
      const finalSize = Math.max(0.2, targetSize);
      const breathe = 1 + (propulsion * 0.02);
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, finalSize, 0.05) * breathe);
  });

  return (
    <group ref={groupRef} position={[-2, 2, 0]}>
        {/* 1. Bell - Translucent Light Blue (#a5f2f3) */}
        <Points ref={bellRef} positions={bellParticles} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#a5f2f3" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
        </Points>

        {/* 1b. Filler - Internal Dots */}
        <Points ref={fillerRef} positions={fillerParticles} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#a5f2f3" size={0.015} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
        </Points>

        {/* 2. Rim - Spectral Cyan/White */}
        <Points ref={rimRef} positions={rimParticles} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#ffffff" size={0.025} sizeAttenuation={true} depthWrite={false} opacity={0.9} />
        </Points>

        {/* 3. Core - Reddish-Pink (#f94d6a) */}
        <Points ref={coreRef} positions={coreParticles} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#f94d6a" size={0.025} sizeAttenuation={true} depthWrite={false} opacity={0.7} />
        </Points>

        {/* 4. Tentacles - Purple/Red Hint (#9b5de5) */}
        <Points ref={tentaclesRef} positions={tentacleParticles} stride={3} frustumCulled={false}>
             <PointMaterial transparent color="#9b5de5" size={0.015} sizeAttenuation={true} depthWrite={false} opacity={0.5} />
        </Points>
        
        {/* 5. Vortex - Faint Ripple (#ffffff) */}
        <Points ref={vortexRef} positions={vortexParticles} stride={3} frustumCulled={false}>
             <PointMaterial transparent color="#88edff" size={0.01} sizeAttenuation={true} depthWrite={false} opacity={0.2} />
        </Points>
    </group>
  );
}

// ... FloatingParticles ...

export function Scene() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none bg-transparent">
      {/* Background black needs to be separate if Scene is z-10 transparent */}
      <div className="absolute inset-0 bg-black -z-10" /> 
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Suspense fallback={null}>
          <FallingGlobe />
          <FloatingParticles />
          <LargeFloatingParticles />
          <Jellyfish />
        </Suspense>
      </Canvas>
    </div>
  );
}
