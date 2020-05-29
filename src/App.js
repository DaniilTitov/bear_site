import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import NotFound from "./component/not_found/NotFound";
import Content from "./component/content/Content";
import Users from "./component/users/Users";

function App() {
    return (
        <Router>
            <div className="App">

                <div className="container">
                    <Header/>

                    <Switch>
                        <Route exact path="/" component={Content}/>
                        <Route path="/users" component={Users}/>
                        {/*<Route path="/contact" component={Contact}/>*/}
                        <Route component={NotFound}/>
                    </Switch>
                </div>

                <Footer/>
            </div>
        </Router>

    );
}

export default App;
