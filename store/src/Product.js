import React, { Component } from 'react';
import Image from './Image';
import './Media.css';

class Product extends Component {
	render(){
		let pid = '';
		pid = this.props.match.params.productId;
		if(pid === 'product1'){
			return (
				<div className="flex-media_container">
					<Image className="flex-media_item" src={'http://mybeadingstudio.com/assets/garden-profile-0.jpg'} alt={'garden-profile-0.jpg'} />
				</div>
			);
		}
		if(pid === 'product2'){
			return (
				<div className="flex-media_container">
					<Image className="flex-media_item" src={'http://mybeadingstudio.com/assets/garden-profile-2.jpg'} alt={'garden-profile-2.jpg'} />
				</div>
			);
		}
		if(pid === 'product3'){
			return (
				<div className="flex-media_container">
					<Image className="flex-media_item" src={'http://mybeadingstudio.com/assets/garden-profile-3.jpg'} alt={'garden-profile-3.jpg'} />
				</div>
			);
		}
	}
}
export default Product;
