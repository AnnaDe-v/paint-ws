import React from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/toolbar.scss'
import Brush from '../tools/Brush';

const Toolbar = () => {
    return (
        <div className='toolbar'>
            <button className='toolbar__button brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas))}></button>
            <button className='toolbar__button rectangle'></button>
            <button className='toolbar__button eraser'></button>
        </div>
    );
};

export default Toolbar;