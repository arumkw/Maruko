import React from 'react';
import '../../App.css';

const ButtonCustom = ({color, value}) => {
    return (
        <div style={{backgroundColor:color}} className='header-button'>
            {value}
        </div>
    )
}

export default ButtonCustom;