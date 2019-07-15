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
                    Klik disini untuk ganti warna <br />
                    ... <br />
                    ...
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;