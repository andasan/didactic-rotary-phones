import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls, OrbitControls, Image } from '@react-three/drei'

import { dataSet } from './data'

function Word({ children, setRotate, position2, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const imageRef = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true), setRotate(false))
  const out = () => (setHovered(false), setRotate(true))
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    imageRef.current.quaternion.copy(camera.quaternion)
    imageRef.current.material.zoom = 5
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })

  // console.log(props)
  return (
    <>
      <Image scale={5} ref={imageRef} url={children[1]} position={position2} />
      <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children[0]} />
    </>
  )
}

const names = [
  'Atena',
  'Ayaka',
  'Daiki',
  'Gyunay',
  'Hana',
  'Haruka',
  'Haru',
  'Joe',
  'Jun',
  'Kazuki',
  'Kota',
  'Masashi',
  'Mathias',
  'Paulo',
  'Ron',
  'Vivian',
  'Yuno',
  'Yuya'
]

function Cloud({ count = 4, radius = 20, setRotate }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count - 9)
    const thetaSpan = Math.PI * 2 * (count + 10)
    // for (let i = 1; i < count + 1; i++)
    // for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), names[i]])
    for (let j = 0; j < count; j++)
      temp.push([
        new THREE.Vector3().setFromSpherical(spherical.set(radius + 5, phiSpan * j, thetaSpan * j)),
        new THREE.Vector3().setFromSpherical(spherical.set(radius + 3, phiSpan * j + 1.4, thetaSpan * j)),
        dataSet[j].name ?? 'Hoge',
        dataSet[j].thumb ?? '',
        dataSet[j].url ?? ''
      ])
    return temp
  }, [count, radius])
  return words.map(([pos, pos2, ...rest], index) => <Word key={index} position={pos} position2={pos2} children={rest} setRotate={setRotate} />)
}

export default function App() {
  const [rotate, setRotate] = useState(true)
  return (
    <Suspense fallback={<>Loading....</>}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={['#202025', 0, 80]} />
        <Cloud count={names.length} radius={20} setRotate={setRotate} />
        <TrackballControls />
        <OrbitControls autoRotate={rotate} />
      </Canvas>
    </Suspense>
  )
}
