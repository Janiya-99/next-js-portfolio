import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";

function Rings() {
  const group = useRef<Group>(null);
  useFrame(({ clock, pointer }, delta) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y +=
      (pointer.x * 0.18 + 0.25 - group.current.rotation.y) *
      Math.min(delta * 2, 1);
    group.current.rotation.z = Math.sin(t * 0.23) * 0.07 - 0.1;
    group.current.position.y = Math.sin(t * 0.6) * 0.07;
  });
  return (
    <group ref={group} rotation={[0.2, 0.25, -0.1]}>
      <mesh position={[-0.36, 0.26, 0]} rotation={[0.72, -0.36, 0.2]}>
        <torusGeometry args={[1.14, 0.27, 32, 100]} />
        <meshPhysicalMaterial
          color="#d6c8b2"
          metalness={0.65}
          roughness={0.19}
          clearcoat={1}
        />
      </mesh>
      <mesh position={[0.42, -0.25, 0.24]} rotation={[1.58, 0.47, -0.35]}>
        <torusGeometry args={[1.04, 0.29, 32, 100]} />
        <meshPhysicalMaterial
          color="#dba65e"
          metalness={0.32}
          roughness={0.2}
          clearcoat={1}
        />
      </mesh>
      <mesh position={[1.3, 1.18, 0.35]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        <meshPhysicalMaterial color="#dba65e" metalness={0.3} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function SystemScene({ onReady }: { onReady: () => void }) {
  const [active, setActive] = useState(true);
  const wrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = wrapper.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) =>
      setActive(entries[0].isIntersecting),
    );
    observer.observe(element);
    const onVisibility = () =>
      setActive(!document.hidden && element.getBoundingClientRect().bottom > 0);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  return (
    <div className="sculpture-canvas" ref={wrapper}>
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        onCreated={onReady}
      >
        <ambientLight intensity={1.8} />
        <directionalLight position={[-4, 6, 5]} intensity={5} color="#ffffff" />
        <directionalLight position={[4, -2, 3]} intensity={3} color="#ffdb9e" />
        <pointLight position={[-3, -3, -2]} intensity={20} color="#dba65e" />
        <Rings />
      </Canvas>
    </div>
  );
}
