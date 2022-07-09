import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
    return <mesh>
        <sphereBufferGeometry
            attach="geometry"
            args={[1, 20, 100]}
            scale={3}
        />
        <MeshDistortMaterial
            attach="material"
            color="hotpink"
            speed={5}
        />
    </mesh>
}