import React from 'react';
import ProductItem from './ProductItem';
import ReactDOM from 'react-dom';
import { getProducts } from '../repository';
import { searchFunction1} from '../repository';
import { Link } from 'react-router-dom';
import "../customcss/menu.css"
import ReactSearchBox from 'react-search-box'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";


export default class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			search:'',

			value: {
				min: 5,
				max: 10,
			  }
		}
		this.handleInputChange =this.handleInputChange.bind(this);
		this.searchFunction=this.searchFunction.bind(this);
	}
	handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }

	componentWillMount() {
		getProducts().then((products) => {
			this.setState({ products });
		});
	}

	searchFunction()
	{console.log("search button")
	console.log(this.state.search)
	console.log(this.state.value.max)
	searchFunction1().then((products) => {
		this.setState({ products });
	});
}

	render() {
		const { products } = this.state;
		return (
			<div className=" container">

				<hr />
				<div id="outer">

			


				</div>





				<div className="row">
					{

						products.map((product, index) => <ProductItem product={product} key={index} />)
					}</div>
				<hr />
				<Link to="/checkout"><button className="btn btn-success float-right">Checkout</button></Link>
				<Link to="/cart"><button className="btn btn-primary float-right" style={{ marginRight: "10px" }}>View Cart</button></Link>
				<br /><br /><br />
			</div>
		);
	}
}
