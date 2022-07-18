import React from 'react';
import '../styles/toolbar.scss'

const Toolbar = () => {
    return (
        <div className='toolbar'>
            <button className='toolbar__button brush'></button>
            <button className='toolbar__button rectangle'></button>
            <button className='toolbar__button eraser'></button>
        </div>
    );
};

export default Toolbar;