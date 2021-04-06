import React, { Component, Fragment } from "react";
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
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './layout/Alerts';
import PrivateRoute from './common/PrivateRoute';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

const { Sider, Content, Footer } = Layout;

const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

function App () {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
             
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/dashboard">
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
                  </PrivateRoute>
                  <Route exact path="/register" component={SignUp} />
                  <Route exact path="/" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    )      
}
export default App

const app_container = document.getElementById("app");
render(<App />, app_container);
