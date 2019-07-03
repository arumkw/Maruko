import React from 'react'
import '../../../App.css';
import Lists from './lists.jsx'


const Content = () => {
    return (
        <div>
            <h1>Past Meetups<a href="">See all</a></h1>
            <div class="row">
                <div class="column">
                    <Lists /> 
                </div>
                <div class="column">
                    <Lists /> 
                </div>
                <div class="column">
                    <Lists /> 
                </div>
            </div>
        </div>
    )
}

export default Content;