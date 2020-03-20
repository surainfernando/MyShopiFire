import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ItemList from "./components/item-list.component";
import EditItem from "./components/edit-item.component";
import CreateItem from "./components/create-item.component";

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
      <br/>
      <Route path="/" exact component={ItemList} />
      <Route path="/edit/:id" component={EditItem} />
      <Route path="/create" component={CreateItem} />
    </div>
    </Router>
  );
}

export default App;
