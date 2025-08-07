'use client'

import { Canvas } from '@react-three/fiber'
import { SoftShadows, CameraControls } from '@react-three/drei'
import Sculpture from './sculpture'

export default function SculptureScene() {
  return (
    <div className="w-screen h-screen">
      <Canvas 
        shadows="basic" 
        camera={{ position: [0, 0, 20], fov: 45 }}
        className="bg-[#111111]"
      >
        <fog attach="fog" args={['black', 0, 20]} />
        <pointLight position={[10, -10, -20]} intensity={10} />
        <pointLight position={[-10, -10, -20]} intensity={10} />
        <Sculpture position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
        <SoftShadows samples={3} />
        <CameraControls 
          minPolarAngle={0} 
          maxPolarAngle={Math.PI} 
          minAzimuthAngle={-Math.PI} 
          maxAzimuthAngle={Math.PI} 
        />
      </Canvas>
    </div>
  )
} 