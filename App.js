import React from "react";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavPage from "./Components/NavPage";
import NavBar from "./Components/NavBar";
import "./style.css";


function App() {

  return (
    <div>
      <Router>
        <Switch>


          <Route exact path="/" component= {NavBar} />
          <Route exact path="/navpage" component={NavPage} />



        </Switch>
      </Router>
    </div>

  );
}
export default App;


