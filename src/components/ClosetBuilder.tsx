import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import ClosetForm from "./ClosetForm";
import LongHang from "./LongHang";
import DoubleHang from "./DoubleHang";
import Shelf from "./Shelf";
import Shelving from "./Shelving";

function ClosetBuilder() {
  const cameraParms = { fov: 90, position: [15, 45, 100] };
  const [params, setParams] = useState({
    type: "Shelves",
    shelves: 7,
    height: 76,
    width: 20,
    depth: 14,
  });
    const types = [
        'Long Hang',
        'Double Hang',
        'Shelves',
        'Corner'
    ];

  const handleChange = (e: any) => {
    setParams({
      ...params,
      [e.target.name]: e.target.value,
    });
    };
    

  return (
    <div className="app">
      <Canvas className="canvas" camera={cameraParms}>
        <ambientLight intesity={0.8} color="#FFFFFF" />
        <directionalLight
          position={[12, 50, 50]}
          color="#ABABAB"
          intensity={2}
        />
        <OrbitControls enableZoom={true} enablePan={true} />
        {renderCloset(params)}
      </Canvas>
          <ClosetForm params={params} types={types} handleChange={handleChange} />
    </div>
  );
}

export default ClosetBuilder;


export interface ClosetProps {
    type: string;
    width: any;
    height: number;
    depth: number;
    shelves: number;
  }

function renderCloset(closet: ClosetProps) {
    switch (closet.type) {
        case 'Shelves':
            return (<Shelving
            width={closet.width}
            height={closet.height}
            depth={closet.depth}
            shelves={closet.shelves}
            />)
        case 'Double Hang':
            return (
                <DoubleHang
                trans={false}
                // posX={params.width + 1.5}
                // posY={params.height - 48}
                />)
        case 'Long Hang':
            return (
                <LongHang
                trans={false}
                // posX={params.width + 1.5}
                // posY={params.height - 48}
                />)
        case 'Corner':
            return <Shelf width={closet.width} depth={closet.depth} />
        default:
            return <></>
    }
}