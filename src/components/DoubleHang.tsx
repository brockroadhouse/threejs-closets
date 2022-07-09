
import Gable from './Gable';
import Shelf from './Shelf';
import Rod from './Rod';

export default function DoubleHang() {
    return (
        <>
            <Gable />
            <Shelf width={24} y={23.625} />
            <Shelf width={24} y={-17.625} />
            <Rod width={24} y={20} z={4.5} />
            <Rod width={24} y={-20} z={4.5} />
            <Gable position={[24.375, 0, 0]} />
        </>
    );
}