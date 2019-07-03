import React from 'react';
import '../App.css';
import Header from './components/header.jsx';
import NavBar from './components/navbar.jsx';
import Container from './components/container/container.jsx';
import About from './components/container/about.jsx';
import Members from './components/container/member.jsx';
import Contents from './components/container/content.jsx';
import Footer from './components/footer.jsx';


const Main = () => {
  return (
    <div className="Main">
        <NavBar />
        <Header />
        <Container />
        <About />
        <Members />
        <Contents />
        <Footer />
    </div>
  );
}

export default Main;
