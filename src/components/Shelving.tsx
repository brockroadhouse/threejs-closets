
import Gable from './Gable';
import Shelf from './Shelf';


export interface ShelvingProps {
    width: any;
    height: number;
    depth: number;
    shelves: number;
  }

export default function Shelving(props: ShelvingProps) {
    const { width, height, depth, shelves } = props;
    if (shelves < 2 || height < 1 || width < 1 || depth < 1) {
        return (
            <>
            </>
        )
    }
    const shelving = [];
    const spacing = (height - 0.75) / (shelves - 1);

    for (let i = 0; i < props.shelves; i++) {
        shelving.push(<Shelf key={i} width={width} depth={depth} y={spacing * i} />)
    }

    return (
        <>
            <Gable
                height={height}
                depth={depth} />
            {shelving}
            <Gable
                height={height}
                depth={depth}
                position={[(parseFloat(width) + 0.375), 0, 0]} />
        </>
    );
}