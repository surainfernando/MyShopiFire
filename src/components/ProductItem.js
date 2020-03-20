import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { storeCart } from '../repository';

export default class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	addToCart = () => {
		if(localStorage.userObject980)
        {	let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product._id;
		
		cart[id] = (cart[id] ? cart[id]: 0);
		//cart[100]=77
		let qty = cart[id] + parseInt(this.state.quantity);
		console.log("productid")
			console.log(id)
			console.log(parseInt(this.state.quantity))
		if (this.props.product.available_quantity < qty) {
			cart[id] = qty; 
			console.log("cart qty")
			console.log(cart[id])
		} else {
			cart[id] = qty
			console.log("cart qty2")
			console.log(cart[id])
			
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		this.addCartoDB(JSON.stringify(cart))
		

	}
	else{

		this.showAlert()
	}
	let id1 = this.props.product._id

	
	}

	showAlert = () => 
	{
	 // const r =window.alert("Do you really want to Sign Out?"); if(r == true){ }
	  confirmAlert({
		title: 'Error!',
		message: 'The cart cannot be used without signing in.\n Please sign in to your ShopiFire account',
		buttons: [
		  {
			label: 'Sign In',
			onClick: () =>  window.location = '/login'
		  },
		  {
			label: 'Sign Up',
			onClick: () =>  window.location = '/register'
		  },
		  {
			label: 'Cancel',
			onClick: () =>  {}
		  }
		  
		]
	  })//.showAlert();
	

	};

	addCartoDB(objectarray)
	{
		
		var retrievedObject = localStorage.getItem('userObject980');
		var z= JSON.parse(retrievedObject)
		var userid=z._id
		storeCart(userid,objectarray)

	}


	render(){
		const { product } = this.props;
		return (
			
			<div className="card" style={{ width: "16rem", marginRight: "15px", marginBottom: "15px"}}>
			<img class="card-img-top" src={product.img} alt="Card image cap" />
			
		
			  <div className="card-body">
			    <h4 className="card-title">{product.title}</h4>
			    <p className="card-text">{product.description}</p>
			    <h5 className="card-text"><small>price: </small>${product.price}</h5>
			    
			    
			  
			    	<div>
			    		<button className="btn btn-sm btn-warning float-right" onClick={this.addToCart}>Add to cart</button>
			    		<input type="number" value={this.state.quantity} name="quantity" onChange={this.handleInputChange} className="float-right" style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
			    	</div> : 
			    
			 	

			  </div>
			</div>
			
		)
	}
}
