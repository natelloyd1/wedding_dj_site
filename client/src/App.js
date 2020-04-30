import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer'; 
import Homepage from './Components/Homepage'; 
// import InstagramEmbed from 'react-instagram-embed';
import Listen from './Components/Listen/Listen'; 
import Review from './Components/Reviews/Review'; 
import Faq from './Components/faq'; 
import Contact from './Components/Contact'; 

const App = () => {
  return (
      <Router>
        <Header />
        <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/listen">
              <Listen /> 
            </Route>  
            <Route exact path="/reviews">
              <Review />
            </Route>  
            <Route exact path="/faq">
              <Faq />
            </Route>
            <Route exact path="/contact">
              <Contact /> 
            </Route> 
        </Switch>
        <Footer /> 
      </Router>
  )}

    export default App;
