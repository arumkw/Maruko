import React from 'react';
import '../../App.css';

const ButtonCustom = ({onClick, color, value}) => {
    return (
        <div onClick={onClick} style={{backgroundColor:color}} className='header-button'>
            {value}
        </div>
    )
}

export default ButtonCustom;