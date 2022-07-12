import { Edges } from "@react-three/drei";
import React from "react";

export default function Gable(props: JSX.IntrinsicElements['mesh']) {
    const thickness = 0.75
    const height = props.height ?? 48
    const depth = props.depth ?? 12

    const defaultDimension = [thickness, height, depth];
    const defaultPosition = [0, 0, 0];
    const position = props.position ?? defaultPosition;
    const dimensions = props.dimensions ?? defaultDimension;
    position[0] += dimensions[0] / 2
    position[1] += dimensions[1] / 2
    position[2] += dimensions[2] / 2

    return <mesh
        position={ position }
        rotation={[0, 0, 0]}
     >
    <boxBufferGeometry
        attach="geometry"
        args={dimensions} />
        <meshLambertMaterial attach="material"
            color={0xCFCFCF} />
        <Edges color={0x787878}/>
    </mesh>
}