import React from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/toolbar.scss'
import Brush from '../tools/Brush';
import Eraser from '../tools/Eraser';
import Rectangle from '../tools/Rectangle';

const Toolbar = () => {
    return (
        <div className='toolbar'>
            <button className='toolbar__button brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas))}></button>
            <button className='toolbar__button rectangle' onClick={() => toolState.setTool(new Rectangle(canvasState.canvas))}></button>
            <button className='toolbar__button eraser' onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}></button>
        </div>
    );
};

export default Toolbar;