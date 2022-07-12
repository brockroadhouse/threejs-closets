
import Gable from './Gable';
import Shelf from './Shelf';
import Rod from './Rod';

export default function LongHang(props: any) {
    const pos = props.posX ?? 0;
    const posY = props.posY ?? 0;
    const width = 24;
    const height = 24;
    const depth = 12;
    const thickness = 0.75;
    const gablePos = pos;
    const shelfPos = props.trans ? pos : pos + thickness;
    const lastPos = props.trans ? pos + width : pos + width + thickness;
    
    return (
        <>
            {props.trans == false
                ? <Gable position={[gablePos, posY, 0]} height={height} depth={depth} />
                : ''}
            <Shelf width={width} depth={depth} x={shelfPos} y={(height+5)/2-thickness} />
            <Shelf width={width} depth={depth} x={shelfPos} y={posY+height-thickness} />
            <Shelf width={width} depth={depth} x={shelfPos} y={posY+5} />
            <Rod width={width} x={shelfPos} y={posY+2} z={depth-2} />
            <Gable position={[lastPos, posY, 0]} height={height} depth={depth} />
        </>
    );
}