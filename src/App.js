import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import NotFound from "./component/not_found/NotFound";
import Content from "./component/content/Content";
import Notes from "./component/users/Notes";

function App() {
    return (
        <Router>
            <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}} className="App">
                <Header/>

                <Switch>
                    <Route exact path="/" component={Content}/>
                    <Route path="/notes" component={Notes}/>
                    {/*<Route path="/contact" component={Contact}/>*/}
                    <Route component={NotFound}/>
                </Switch>

                <Footer/>
            </div>
        </Router>

    );
}

export default App;
