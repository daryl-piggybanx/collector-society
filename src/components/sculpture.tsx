'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { easing } from 'maath'
import { Group, SpotLight, Mesh } from 'three'
import Link from 'next/link'
import Annotation from './annotation'

const navItems = [
  { name: "Drop Site", image: "/assets/landing_hover_black-white_1.jpg", link: "#" },
  { name: "Collector Applications", image: "/assets/landing_hover_black-white_2.jpg", link: "#" },
  { name: "Club House", image: "/assets/landing_hover_black-white_3.jpg", link: "#" },
  { name: "What is PiggyBanx", image: "/assets/landing_hover_black-white_4.jpg", link: "#" },
  { name: "How to Collect", image: "/assets/landing_hover_black-white_1.jpg", link: "#" },
  { name: "What are the Knights", image: "/assets/landing_hover_black-white_2.jpg", link: "#" },
  { name: "General Guidelines", image: "/assets/landing_hover_black-white_3.jpg", link: "#" },
]

// Define props interface that includes position and rotation
type SculptureProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function Sculpture(props: SculptureProps) {
  const group = useRef<Group>(null!)
  const light = useRef<SpotLight>(null!)
  const { nodes } = useGLTF('/assets/BoltLogo_Limestone.glb')
  
  useFrame((state, delta) => {
    if (group.current && light.current) {
      easing.dampE(group.current.rotation, [0, -state.pointer.x * (Math.PI / 10), 0], 1.5, delta)
      easing.damp3(group.current.position, [0, -5.5, 1 - Math.abs(state.pointer.x)], 1, delta)
      easing.damp3(light.current.position, [state.pointer.x * 12, 0, 8 + state.pointer.y * 4], 0.2, delta)
    }
  })
  
  return (
    <group ref={group} {...props}>
      {nodes.Node_3 && (
        <mesh castShadow receiveShadow geometry={(nodes.Node_3 as Mesh).geometry} rotation={[-Math.PI / 2, 0, 0]} scale={0.2} dispose={null}>
          <meshLambertMaterial color="#404044" />
        </mesh>
      )}
      <Annotation position={[1.75, 3, 2.5]} href={navItems[0].link}>
        {navItems[0].name}
      </Annotation>
      <Annotation position={[-4.5, 3.6, -3]} href={navItems[1].link}>
        {navItems[1].name}
      </Annotation>
      <Annotation position={[1.5, 8, -3]} href={navItems[2].link}>
        {navItems[2].name}
      </Annotation>
      <Annotation position={[2.5, -2, 1]} href={navItems[3].link}>
        {navItems[3].name}
      </Annotation>
      <Annotation position={[-3, -1, 2]} href={navItems[4].link}>
        {navItems[4].name}
      </Annotation>
      <Annotation position={[0, 5, -2]} href={navItems[5].link}>
        {navItems[5].name}
      </Annotation>
      <Annotation position={[-1.5, 1, 3]} href={navItems[6].link}>
        {navItems[6].name}
      </Annotation>
      <spotLight angle={0.5} penumbra={0.5} ref={light} castShadow intensity={10} shadow-mapSize={1024} shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </spotLight>
    </group>
  )
}
