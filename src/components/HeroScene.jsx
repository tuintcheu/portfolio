import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei/core/AdaptiveDpr';
import { Float } from '@react-three/drei/core/Float';
import * as THREE from 'three';

// Chargé uniquement côté navigateur via React.lazy (voir home.page.jsx) :
// three.js n'alourdit ni le rendu serveur ni le premier affichage.

function useWindowPointer() {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return pointer;
}

// Sprite rond et doux pour les particules (par défaut three.js dessine des carrés)
function useDotTexture() {
  return useMemo(() => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.45, 'rgba(255,255,255,0.9)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);
}

function Particles({ count, color, animated }) {
  const ref = useRef();
  const dot = useDotTexture();
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3.2 + Math.random() * 7;
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u);
      array[i * 3] = radius * s * Math.cos(theta);
      array[i * 3 + 1] = radius * u * 0.75;
      array[i * 3 + 2] = radius * s * Math.sin(theta);
    }
    return array;
  }, [count]);

  useFrame((_, delta) => {
    if (animated) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        map={dot}
        alphaTest={0.01}
        color={color}
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Orbit({ radius, tilt, speed, color, animated }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (animated) ref.current.rotation.z += delta * speed;
  });
  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.006, 6, 240]} />
        <meshBasicMaterial color={color} transparent opacity={0.45} />
      </mesh>
      <group ref={ref}>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>
    </group>
  );
}

function Sphere({ color, highlight, animated, pointer }) {
  const rig = useRef();
  const core = useRef();
  const shell = useRef();
  const { viewport } = useThree();

  // Sur écran large la sphère se place à droite du texte, sur mobile elle reste centrée en fond
  const wide = viewport.aspect > 1.1;
  const position = wide ? [viewport.width * 0.24, 0.1, 0] : [0, viewport.height * 0.18, -1];
  const scale = wide ? Math.min(1, viewport.width / 13) : 0.75;

  const shellGeometry = useMemo(() => new THREE.IcosahedronGeometry(2.05, 1), []);

  useFrame((_, delta) => {
    if (!animated) return;
    const { x, y } = pointer.current;
    // Easing indépendant du framerate vers la position du curseur
    rig.current.rotation.y = THREE.MathUtils.damp(rig.current.rotation.y, x * 0.5, 3, delta);
    rig.current.rotation.x = THREE.MathUtils.damp(rig.current.rotation.x, y * 0.35, 3, delta);
    shell.current.rotation.y += delta * 0.08;
    core.current.rotation.x += delta * 0.25;
    core.current.rotation.y += delta * 0.18;
  });

  return (
    <group position={position} scale={scale}>
      <group ref={rig}>
        <Float speed={animated ? 1.4 : 0} rotationIntensity={0.3} floatIntensity={0.6}>
          <mesh ref={core}>
            <icosahedronGeometry args={[1.05, 0]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.28}
              metalness={0.55}
              roughness={0.32}
              flatShading
            />
          </mesh>

          <group ref={shell}>
            <mesh geometry={shellGeometry}>
              <meshBasicMaterial color={highlight} wireframe transparent opacity={0.55} />
            </mesh>
            <points geometry={shellGeometry}>
              <pointsMaterial size={0.07} color={highlight} sizeAttenuation />
            </points>
          </group>

          <Orbit radius={3} tilt={[1.25, 0.2, 0]} speed={0.35} color={color} animated={animated} />
          <Orbit radius={3.5} tilt={[1.75, -0.45, 0.3]} speed={-0.22} color={color} animated={animated} />
          <Orbit radius={2.6} tilt={[0.35, 0.9, 0]} speed={0.5} color={highlight} animated={animated} />
        </Float>
      </group>
    </group>
  );
}

export default function HeroScene({ accent, theme, active = true, reduced = false }) {
  const pointer = useWindowPointer();
  const animated = active && !reduced;

  const { color, highlight, particleCount } = useMemo(() => {
    const base = new THREE.Color(accent);
    const light = base.clone().lerp(new THREE.Color(theme === 'dark' ? '#ffffff' : '#000000'), 0.18);
    const small = typeof window !== 'undefined' && window.innerWidth < 768;
    return { color: base, highlight: light, particleCount: small ? 500 : 900 };
  }, [accent, theme]);

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop={animated ? 'always' : 'demand'}
      aria-hidden="true"
    >
      <AdaptiveDpr pixelated={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} />
      <pointLight position={[-4, -2, 3]} intensity={30} color={color} />
      <Sphere color={color} highlight={highlight} animated={animated} pointer={pointer} />
      <Particles count={particleCount} color={highlight} animated={animated} />
    </Canvas>
  );
}
