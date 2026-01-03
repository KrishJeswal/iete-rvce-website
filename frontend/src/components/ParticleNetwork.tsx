import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
}

const Particles = ({ count = 200 }: ParticleFieldProps) => {
  const mesh = useRef<THREE.Points>(null);
  const linesMesh = useRef<THREE.LineSegments>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Cyan to purple gradient colors
      const t = Math.random();
      colors[i * 3] = t < 0.5 ? 0 : 0.8;     // R
      colors[i * 3 + 1] = t < 0.5 ? 0.85 : 0.2; // G
      colors[i * 3 + 2] = t < 0.5 ? 1 : 1;   // B
    }
    
    return { positions, colors };
  }, [count]);

  const lines = useMemo(() => {
    const positions: number[] = [];
    const threshold = 2.5;
    
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = particles.positions[i * 3] - particles.positions[j * 3];
        const dy = particles.positions[i * 3 + 1] - particles.positions[j * 3 + 1];
        const dz = particles.positions[i * 3 + 2] - particles.positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < threshold) {
          positions.push(
            particles.positions[i * 3],
            particles.positions[i * 3 + 1],
            particles.positions[i * 3 + 2],
            particles.positions[j * 3],
            particles.positions[j * 3 + 1],
            particles.positions[j * 3 + 2]
          );
        }
      }
    }
    
    return new Float32Array(positions);
  }, [particles.positions, count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
    if (linesMesh.current) {
      linesMesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      linesMesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles.positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particles.colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesMesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[lines, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </>
  );
};

const FloatingOrb = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

const ParticleNetwork = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={150} />
        <FloatingOrb position={[-5, 2, -3]} color="#00ffff" scale={1.5} />
        <FloatingOrb position={[4, -1, -2]} color="#ff00ff" scale={1.2} />
        <FloatingOrb position={[2, 3, -4]} color="#ffff00" scale={1} />
        <FloatingOrb position={[-3, -2, -3]} color="#00ff88" scale={0.8} />
        <FloatingOrb position={[5, 1, -5]} color="#ff6600" scale={1.3} />
      </Canvas>
    </div>
  );
};

export default ParticleNetwork;
