import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
		<Router>
		  <div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>React Route Parameters</h2>
			</div>
			<div>
				<ul className="flex-container">
					<li className="flex-item"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
					<li className="flex-item"><Link to="/products" style={{ textDecoration: 'none' }}>Products</Link></li>
				</ul>
				<Route exact path="/" component={Home} />
				<Route path="/products" component={Products} />
			</div>
		  </div>
		</Router>
    );
  }
}

export default App;
