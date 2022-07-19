import React, {MutableRefObject, useEffect, useRef} from 'react';
import '../styles/canvas.scss'
import canvasState from "../store/canvasState";
import toolState from '../store/toolState';
import Brush from '../tools/Brush';
import {
    LegacyRef
} from "../../../../Program Files/JetBrains/WebStorm 2021.3.1/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

const Canvas = () => {

    canvas: HTMLCanvasElement

    const canvasRef = useRef<any>()



    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])


    return (
        <div className='canvas'>
            <canvas ref={canvasRef} width={700} height={500}></canvas>
        </div>
    );
};

export default Canvas;