import React, { Fragment } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { Layout, Button } from 'antd';
//components
import { PageHeader } from 'antd';
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import { Typography } from 'antd';

const { Title } = Typography;
const { Header, Footer, Content, Sider } = Layout;

function App() {
    return (
        <Router>
            <Layout>
                <Header>
                    <Title style={{ color: "#ffffff" }}>mark's killer app</Title>
                </Header>
                <Layout className="layout">

                    <Content style={{ padding: '50px 50px' }}>
                        <Switch>
                            <Route path="/form">
                                <InputTodo />
                            </Route>
                            <Route path="/list">
                                <ListTodos />
                                <Link to="/form">CREATE</Link>
                            </Route>
                            <Route exact path="/banana">
                                <Redirect to="/list" />
                            </Route>

                            <Route path="*">
                                <div>woops we couldn't find that page</div>
                            </Route>
                        </Switch>
                    </Content>
                    <Footer>
                        <div>I'm the footer</div>
                        <div>2020 mark industries</div>
                    </Footer>
                </Layout>
            </Layout>
        </Router>
    );
}

export default App;
