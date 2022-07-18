import React, {useEffect, useRef} from 'react';
import '../styles/canvas.scss'
import canvasState from "../store/canvasState";

const Canvas = () => {
    const canvasRef = useRef()

    useEffect(() => {
        canvasState.setCanvas(canvasRef)
    }, [])


    return (
        <div className='canvas'>
            <canvas ref={canvasRef.current} width={700} height={500}></canvas>
        </div>
    );
};

export default Canvas;