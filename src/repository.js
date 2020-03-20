import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function getProducts() {
	console.log("test grt products")
	return axios.get(`${BASE_URL}/api/products`)
		.then(response => {
			console.log(response.data);
			 return response.data});
}

export function getCartProducts(cart) {
	console.log("test cart products")
	return axios.post(`${BASE_URL}/api/products`, {cart})
		.then(response => response.data);
}

export function login (data) {
	return axios.post(`${BASE_URL}/api/auth/login`, { email: data.name, password: data.password })
		.then(response =>response)
		.catch(err => console.log(err.response.data.errors));
}

export function adminLog (data) {
	return axios.post(`${BASE_URL}/api/auth/adminLog`, { email: data.name, password: data.password })
		.then(response =>response)
		.catch(err => console.log(err.response.data.errors));
}

export function storeCart (userid,objectarray) {
	return axios.post(`${BASE_URL}/api/storeCart`, { id: userid, cart: objectarray })
		.then(response =>response)
		.catch(err => console.log(err.response.data.errors));
}
export function searchFunction1 () {
	var testname1="surainsearch"
	return axios.get(`${BASE_URL}/api/test`, {
		params: {
		  testname: testname1
		}
	  })
		.then(response =>response.data)
		.catch(err => console.log(err.response.data.errors));
}



//	return axios.post(`${BASE_URL}/api/auth/Register`, { name: data.name, password: data.password,email:data.email,rpassword:data.rpassword })
export function register(data) {
	// console.log("password=")
	// console.log(data.rpassword)
	return axios.post(`${BASE_URL}/api/auth/Register`, { name: data.name, password: data.password,rpassword:data.rpassword,email:data.email })
		.then(response=> response).catch(err => console.log(err.response.data.errors));
}
export function isAuthenticated(){
	return localStorage.getItem('x-access-token') && localStorage.getItem('x-access-token-expiration') > Date.now()
}


// export function register(data) {
// 	console.log("password=")
// 	console.log(data.rpassword)
// 	return axios.post(`${BASE_URL}/api/auth/Register`, { name: data.name, password: data.password,rpassword:data.rpassword,email:data.email })
// 		.then((response) => {
// 			console.log(response);
// 			console.log("success response")
// 			return response
		
// 		  },
// 	   (error) => {
// 			console.log(error.response.data);
// 			return error
			
// 		  }
// 		  ).catch(err => Promise.reject('Authentication Failed!'));
// }