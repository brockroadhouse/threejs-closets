import { Edges } from "@react-three/drei";
import React from "react";

export default function Gable(props: JSX.IntrinsicElements["mesh"]) {
  const thickness = props.thickness ?? 0.75;
  const defaultDimension = [props.width ?? 24, thickness, props.depth ?? 12];
  const dimension = props.dimensions ?? defaultDimension;
  const position = [
      props.x ?? 0,
      props.y ?? 0,
      props.z ?? 0
  ];
  position[0] += dimension[0] / 2;
  position[1] += dimension[1] / 2;
  position[2] += dimension[2] / 2;

  return (
    <mesh position={position} rotation={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={dimension} />
      <meshLambertMaterial attach="material" color={0x999999} />
      <Edges color={0x787878} />
    </mesh>
  );
}
