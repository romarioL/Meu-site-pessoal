import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Contato from './components/Contato'
import Experimentos from './components/Experimentos'
import Navbar from './components/Navbar'
import Projetos from './components/Projetos'
import Textos from './components/Textos'
class App extends Component {
  render() {
    return (
       <Router>
        <div>
        <Navbar />
         <Route exact path="/" component= {Home} />
         <Route  path="/contato" component= {Contato} />
         <Route  path="/experimentos" component= {Experimentos} />
         <Route  path="/projetos" component= {Projetos} />
         <Route  path="/textos" component= {Textos} />
         </div>
       </Router>
    );
  }
}

export default App;
