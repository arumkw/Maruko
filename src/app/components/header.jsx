import React from 'react'
import '../../App.css';

const Header = () => {
    return (
        <div class="flex-container">
            <div className="header">
                <img src="https://cdn10.bigcommerce.com/s-k9r94cx2is/products/377/images/614/1263__11624.1471463242.1280.1280.jpg?c=2" />
            </div>
            <div>
            <h1>Hacktiv8 Meetup</h1>
            <h2> Location : Japan<br />
             Members : 1096<br />
             Organizers : Maruko Chan</h2>
            </div>
        </div>
    )
}

export default Header;