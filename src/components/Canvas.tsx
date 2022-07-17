import React from 'react';
import '../styles/canvas.scss'

const Canvas = () => {
    return (
        <div className='canvas'>
            <canvas width={700} height={500}></canvas>
        </div>
    );
};

export default Canvas;