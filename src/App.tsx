import './App.css'

import { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Backdrop, OrbitControls, Plane, Stars } from '@react-three/drei';

import Box from './components/Box';
import Sphere from './components/AnimatedSphere';
import ShelfNumber from './components/ShelfNumber';
import DoubleHang from './components/DoubleHang';
import Shelving from './components/Shelving';

function App() {

  const [params, setParams] = useState({
    shelves: 7,
    height: 48,
    width: 20,
    depth: 12
  });

  const handleChange = (e: any) => {
    setParams({
      ...params,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="app">
      <Canvas className="canvas" camera={{ position: [15,0,50]}}>
        <ambientLight intesity={0.8} color="#FFFFFF" />
        {/* <directionalLight position={[-50, 5, 50]} color="#00ABAB" intensity={2} /> */}
        <OrbitControls enableZoom={true} enablePan={true} />
        {/* <DoubleHang /> */}
        <Shelving
          width={params.width}
          height={params.height}
          depth={params.depth}
          shelves={params.shelves} />
      </Canvas>
      <ShelfNumber params={params} handleChange={handleChange} />
    </div>
  )
}

export default App
