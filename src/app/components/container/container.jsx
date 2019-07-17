import React from 'react'
import '../../../App.css';

class Container extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            color:'#2d132c'
        }
    }

    ganti_warna() {
        if (this.state.color ==='#2d132c'){
            
            this.setState({
                color:'maroon'
            })
        } else {
            this.setState({
                color:'#2d132c'
            })
        }
    }

    render(){
        return (
            <div>
                <h1>Next Meetup</h1>
                <div style={{backgroundColor: this.state.color}} className="Container">
                    <div onClick={() => this.ganti_warna()} className="Container-text">
                    <b>Awesome Meetup and Event !! </b> (Click to change the color)
                    <h5 style={{color: 'gray'}}>25 January 2019</h5>
                    <h6>
                        Hello, JavaScript & Node.js Ninjas! <br />
                        Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2019! <br />
                        The meetup format will contain some short stories and technical talks. <br />
                        If you have a short announcement you'd like to share with the audiance,
                        you may do so during open mic announcements. <br /> <br />
                        Remember to bring a photo ID to get through buiding security. <br /> <br />
                        ----- <br /> <br />
                        See you there!
                        <br /> <br />
                        Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers.
                    </h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;