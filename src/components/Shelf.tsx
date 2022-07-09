import { Edges } from "@react-three/drei";
import React from "react";

export default function Gable(props: JSX.IntrinsicElements['mesh']) {
    const thickness = 0.75
    const defaultDimension = [
        props.width,
        thickness,
        props.depth ?? 12
    ];
    const position = [
        props.x ?? props.width / 2,
        props.y ?? -props.thickness / 2,
        props.z ?? 0
    ];
    position[1] += thickness/2

    return <mesh
        position={position}
        rotation={[0, 0, 0]}
    >
    <boxBufferGeometry
        attach="geometry"
        args={props.dimensions ?? defaultDimension} />
        <meshLambertMaterial attach="material"
            color={0x999999} />
        <Edges color={0x787878} />
    </mesh>
}