import React from 'react';
import '../styles/toolbar.scss'
import ToolState from '../store/toolState'


const SettingBar = () => {
    return (
        <div className='toolbar setting-bar'>
            <label htmlFor="line-width">Толщина линии</label>
            <input
                onChange={e => ToolState.setLineWidth(e.target.value)}
                type="number"
                id='line-width'
                style={{margin: '0 10px'}}
                defaultValue={1}
                min={1}
                max={50}
            />
        </div>
    );
};

export default SettingBar;