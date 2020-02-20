import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {ProductContext} from '../App'


const Navigation = props => {
	// const { cart, products, addItem } = useContext(ProductContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
