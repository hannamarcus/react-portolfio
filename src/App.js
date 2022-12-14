// import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer";
// import Footer from "./components/Footer";
// import Header from "./components/Header";


// const App = () => {
// return <div>
// <Header/>
// <div className="portfolio-container">
// <PortfolioContainer />
// </div>
// <Footer />
// </div>
// }
// export default App;


import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import portfolioData from './portfolioData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header portfolioData={portfolioData}/>
        <About portfolioData={portfolioData}/>
        <Resume portfolioData={portfolioData}/>
        <Portfolio portfolioData={portfolioData}/>
        <ContactMe portfolioData={portfolioData}/>
        <Footer portfolioData={portfolioData}/>
      </div>
    );
  }
}

export default App;