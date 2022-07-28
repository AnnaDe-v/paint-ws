import React from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/toolbar.scss'
import Brush from '../tools/Brush';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';
import Rectangle from '../tools/Rectangle';

const Toolbar = () => {
    return (
        <div className='toolbar'>
            <button className='toolbar__button brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas)) || console.log('brush')}></button>
            <button className='toolbar__button rectangle' onClick={() => toolState.setTool(new Rectangle(canvasState.canvas)) || console.log('rectangle')}></button>
            <button className='toolbar__button eraser' onClick={() => toolState.setTool(new Eraser(canvasState.canvas)) || console.log('eraser')}></button>
            <button className='toolbar__button line' onClick={() => toolState.setTool(new Line(canvasState.canvas)) || console.log('line')}></button>
        </div>
    );
};

export default Toolbar;