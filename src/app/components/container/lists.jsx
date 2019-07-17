import React from 'react'
import ButtonCustom from '../button.jsx';

const Lists = ({maping}) => {
    if (maping.length == 0){
        return (
            <div className='loading'>
                <img className='loading-gif' src='https://media.giphy.com/media/PMzdWre1REXWo/giphy.gif' />
            </div>
        )
    }
    return (
        <div className='lists-card'>
            {maping.map((item, idx) => {
                return (
                    <div key={idx} className='list-card'>
                        <div>Name : {item.name}</div>
                        <hr />
                        <div>Gender : {item.gender}<br /><br /></div>
                        <div>Eye Color : {item.eye_color}<br /><br /></div>
                        <ButtonCustom
                            color='#801336'
                            value={'View'}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Lists;