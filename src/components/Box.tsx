import React from "react";

export default function Box(props: JSX.IntrinsicElements['mesh']) {
    return <mesh {...props} rotation={[90, 0, 3]}>
        <boxBufferGeometry attach="geometry" args={[2,2,2]}/>
        <meshLambertMaterial attach="material" color="blue" />
    </mesh>
}