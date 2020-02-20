import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'


// export const ProductContext =createContext()
// export const CartContext =createContext()

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		// add the given item to the cart
		console.log('Cliecked on the add Item')
		console.log(item)
		setCart([...cart, item])
	};
	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
			<Navigation cart={cart} />
<CartContext.Provider value={cart}>
			{/* Routes */}
			<Route exact path="/" component={Products} />

			<Route exact path="/" component={ShoppingCart} />
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
