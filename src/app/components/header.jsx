import React from 'react'
import '../../App.css';
import ButtonCustom from './button.jsx';
import InputCustom from './input';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            participant:0,
            url: 'https://cdn10.bigcommerce.com/s-k9r94cx2is/products/377/images/614/1263__11624.1471463242.1280.1280.jpg?c=2',
            status: true,
            color: 'red',
            fetch: [{
                id:1,
                name: 'Arum'
            }, {
                id:2,
                name: 'Victor'
            }]
        }
    }

    
    ganti_warna() {
        if (this.state.status === false){
            this.setState({
                url: 'https://cdn10.bigcommerce.com/s-k9r94cx2is/products/377/images/614/1263__11624.1471463242.1280.1280.jpg?c=2',
                status: true
            })
        } else {
            this.setState({
                url: 'https://i.pinimg.com/originals/e0/87/5a/e0875a2d0d40626ed759125859bbd17a.jpg',
                status: false
            })
        }
    }

    tambah(){
        let now = this.state.participant;
        this.setState({
            participant: now + 1
        })
    }

    kurang(){
        let now = this.state.participant
        if (now > 0) {
            this.setState({
                participant: now - 1
            })
        } else {
            alert('ups')
        }
    }

    render() {
        return (
            <div class="flex-container">
                <div className="header">
                    <img src={this.state.url} />
                </div>
                <div>
                <div onClick={() => this.ganti_warna()} className='header-title'>Hacktiv8 Meetup</div>
                    <h2> Location : Japan<br />
                    Members : {this.state.participant}<br />
                    Organizers : Maruko Chan</h2>
                    <ButtonCustom
                            onClick={() => this.tambah()}
                            color='white'
                            value='Tambah'
                    />
                    <br />
                    <ButtonCustom
                            onClick={() => this.kurang()}
                            color='white'
                            value='Kurang'
                    /> <br />
                    <div className='input-position'>
                    <p color='white'>Filter partisipan :  </p>
                    <InputCustom
                        value_attr={'INI VALUE BARU'}
                        name_attr={'akbar'}
                        defaultValue='HEHE'
                        props_input={(e) => this.props.props_input_main(e)}
                    ></InputCustom>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header;