import React, { Component } from "react";
import { render } from "react-dom";
import './dashboard.css';

import UserProfile from './userProfile/index';
import {Layout} from 'antd'
import PieChartView from '../components/pieChartView/index'
import InvestAndMarket from '../components/investandmarket/index'
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom'
import SignUp from './SignUp.js'
import Login from './Login.js'
import { useHistory } from 'react-router-dom';
import Button from './button.js'

const { Sider, Content, Footer } = Layout;

function App() {
    const history = useHistory();
    const gotoLogin = () => history.push('/login');
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div>
            <div className="flex">
            <Button/>
        <div>
        <div className="bar">
          <div className="title">sentX</div>
        </div>
        <Layout style={{ height: 600 }}>
          <Sider width={300} style={{backgroundColor:'#eee'}}>
            <Content style={{ height: 200 }}>
                <UserProfile name={'tom'}/>
            </Content>
            <Content style={{ height: 200 }}>
                <InvestAndMarket marketreturn={11111} invest={1111}/>          
            </Content>
            <Content style={{ height: 250 }}>
                <div className="status" >Market Status:CLOSED</div>         
            </Content>
          </Sider>
        </Layout>
        </div>
        <div>
          <div>
            <PieChartView />
          </div>
        </div>
      </div>
        </div>
        </Route>
        <Route path="/register" component={SignUp}/>
        <Route path="/login" component={Login}/>
            </Switch>
        </Router>
        
    )
}

export default App

const app_container = document.getElementById("app");
render(<App />, app_container);
