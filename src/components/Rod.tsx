import React from "react";

export default function Rod(props: JSX.IntrinsicElements['mesh']) {
    const position = [
        props.x ?? props.width / 2,
        props.y ?? 0,
        props.z ?? 0
    ];

    return <mesh
        position={position}
        rotation={[0, 0, Math.PI / 2]}
    >
    <cylinderBufferGeometry
        attach="geometry"
        args={[0.75, 0.75, props.width, 10]} />
        <meshStandardMaterial attach="material"
            metalness={1.0}
            roughness={0.0}
            color={0xABABAB}
            emissive={0x868686} />
            
    </mesh>
}