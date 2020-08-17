import React, { Fragment } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import { Layout } from 'antd';
//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
//const { Header, Footer, Content } = Layout;

function App() {
    return (
        <Router>
            <div>
                <div className="container">
                    <header>
                        <h1>WELCOME TO MY KILLER APP!!</h1>
                    </header>
                    <div>
                        <Switch>
                            <Route path="/form">
                                <InputTodo />
                            </Route>
                            <Route path="/list">
                                <ListTodos />
                                <Link to="/form">CREATE</Link>
                            </Route>
                            <Route exact path="/">
                                <div>I'm the homepage
                           <Link to="/form">The Form</Link>
                                    <Link to="/list">The List</Link>
                                </div>
                            </Route>
                            <Route path="*">
                                <div>woops we couldn't find that page</div>
                            </Route>
                        </Switch>
                    </div>
                    <div>I'm the footer</div>
                </div>
            </div>
        </Router>
    );
}

export default App;
