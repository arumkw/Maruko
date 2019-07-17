import React from 'react';
import axios from 'axios';

import '../App.css';
import Header from './components/header.jsx';
import NavBar from './components/navbar.jsx';
import Container from './components/container/container.jsx';
import About from './components/container/about.jsx';
import Members from './components/container/member.jsx';
import Contents from './components/container/content.jsx';
import Footer from './components/footer.jsx';



class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      propsan_bro: "",
      result:[],
      next: "https://swapi.co/api/people/?page=1",
      previous: "",
      halaman: 1
    }
  }

  componentWillMount() {
    this.fetching();
    console.log('Aku will mount');
  }

  componentDidMount() {
    //fetch(this.fetching());
    console.log('Aku did mount')
  }

  fetching(){
    let opt={
      method:'GET',
      //url:this.state.next
      url:`https://swapi.co/api/people/?page=${this.state.halaman}`
    }
    console.log(`urlnya adalah : ${opt.url}`)
    axios(opt)
    .then(({data}) => {
      console.log(data)
      this.setState({
        result: data.results,
        next: data.next,
        previous: data.previous
      });
    })
    .catch(error => {
      console.log(error)
    })
  }

  setThePage(newPage){
    console.log(`newnya : ${newPage}`)
    console.log(typeof(newPage))
    console.log(typeof(this.state.halaman))
    this.setState({halaman:newPage});
    console.log(`pagenya1 : ${this.state.halaman}`)
    this.fetching()
    console.log('tesutoo oye')
    console.log(`pagenya2 : ${this.state.halaman}`)
  }

  render (){
    return (
      <div className="Main">
          <NavBar />
          <Header
            props_input_main={(e) => {this.setState({propsan_bro:e})
            console.log('tesutooooooo1');
          }}
          ></Header>
          <Container />
          <About />
          <Members />
          <Contents 
            props_list={this.state.propsan_bro}
            result={this.state.result}
            props_page_main={(e) => this.setThePage(e)}
          ></Contents>
          <Footer />
      </div>
    );
  }
}

export default Main;
