import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, RoundedBox } from '@react-three/drei'

function Rig({ children, strength = 0.35 }) {
  const g = useRef()
  useFrame((state, dt) => {
    if (!g.current) return
    g.current.rotation.y += (state.pointer.x * strength - g.current.rotation.y) * Math.min(1, dt * 3)
    g.current.rotation.x += (-state.pointer.y * strength * 0.7 - g.current.rotation.x) * Math.min(1, dt * 3)
  })
  return <group ref={g}>{children}</group>
}

function Core() {
  const m = useRef()
  useFrame((_, dt) => { if (m.current) { m.current.rotation.y += dt * 0.25; m.current.rotation.z += dt * 0.08 } })
  return (
    <mesh ref={m}>
      <icosahedronGeometry args={[1.25, 12]} />
      <MeshDistortMaterial color="#9b7bff" emissive="#4c2bb8" emissiveIntensity={0.55} roughness={0.22} metalness={0.15} clearcoat={1} clearcoatRoughness={0.1} distort={0.32} speed={1.5} />
    </mesh>
  )
}

function Ring({ r, tilt, speed, color }) {
  const m = useRef()
  useFrame((_, dt) => { if (m.current) m.current.rotation.z += dt * speed })
  return (
    <mesh ref={m} rotation={[tilt[0], tilt[1], 0]}>
      <torusGeometry args={[r, 0.012, 16, 160]} />
      <meshBasicMaterial color={color} transparent opacity={0.7} />
    </mesh>
  )
}

function PlayPrism() {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={[1.7, 1.0, 0.6]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.32, 0.5, 3]} />
        <meshStandardMaterial color="#22d3ee" emissive="#0b7285" emissiveIntensity={0.8} metalness={0.6} roughness={0.2} />
      </mesh>
    </Float>
  )
}

function Panels() {
  const items = useMemo(() => [
    { p: [-1.9, 0.9, 0.4], r: [0.1, 0.5, 0.1], c: '#8b5cf6' },
    { p: [-1.6, -1.2, 0.8], r: [-0.1, 0.4, -0.1], c: '#22d3ee' },
    { p: [1.9, -1.0, 0.3], r: [0.1, -0.5, 0.1], c: '#a78bfa' },
  ], [])
  return items.map((it, i) => (
    <Float key={i} speed={1.4 + i * 0.3} floatIntensity={1.2} rotationIntensity={0.4}>
      <RoundedBox args={[0.9, 0.55, 0.06]} radius={0.05} position={it.p} rotation={it.r}>
        <meshPhysicalMaterial color={it.c} transparent opacity={0.45} roughness={0.1} metalness={0.2} transmission={0.2} />
      </RoundedBox>
    </Float>
  ))
}

export default function Scene3D({ active = true, variant = 'hero' }) {
  const hero = variant === 'hero'
  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, hero ? 7 : 7], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-label="Interactive 3D AI creative visual"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={3} color="#e0d4ff" />
      <pointLight position={[-4, -2, 3]} intensity={30} color="#22d3ee" />
      <Rig strength={hero ? 0.4 : 0.25}>
        <Float speed={1.6} floatIntensity={0.6} rotationIntensity={0.2}>
          {hero ? <Core /> : (
            <group>
              <mesh>
                <torusKnotGeometry args={[0.9, 0.28, 180, 24]} />
                <meshPhysicalMaterial color="#7c5cf0" metalness={0.8} roughness={0.15} clearcoat={1} emissive="#22106a" emissiveIntensity={0.6} />
              </mesh>
            </group>
          )}
        </Float>
        <Ring r={1.9} tilt={[1.2, 0.2]} speed={0.3} color="#8b5cf6" />
        <Ring r={2.35} tilt={[1.9, -0.3]} speed={-0.2} color="#22d3ee" />
        <PlayPrism />
        <Panels />
      </Rig>
      <Sparkles count={50} scale={[7, 5, 4]} size={2.5} speed={0.3} color="#a78bfa" opacity={0.8} />
    </Canvas>
  )
}
