import React from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './Product';


export default (props) => (
	<div>
		<ul>
			<li>
				<Link to={`${props.match.url}/product1`}>Sweet William - Hot Pink</Link>
			</li>
			<li>
				<Link to={`${props.match.url}/product2`}>BloomIQ - Violet</Link>
			</li>
			<li>
				<Link to={`${props.match.url}/product3`}>Geranium - Princess</Link>
			</li>
		</ul>
		<Route path={`${props.match.url}/:productId`} component={Product}/>
		
	</div>
);