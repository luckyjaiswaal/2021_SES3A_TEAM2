import React, { Component } from "react";
import { render } from "react-dom";
import './dashboard.css';
import UserProfile from './userProfile/index';
import {Layout} from 'antd'
import PieChartView from '../components/pieChartView/index'
import InvestAndMarket from '../components/investandmarket/index'

const { Sider, Content, Footer } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Layout style={{ height: 700 }}>
          <Sider width={300} style={{backgroundColor:'#eee'}}>
            <Content style={{ height: 200 }}>
                <UserProfile name={'tom'}/>
            </Content>
            <Content style={{ height: 200 }}>
                <InvestAndMarket marketreturn={11111} invest={1111}/>          
            </Content>
            <Content style={{ height: 300 }}>
                <div className="status" >Market Status:CLOSED</div>         
            </Content>
          </Sider>
          {/* <Layout>
            <Content style={{ height: 300 }}>
              <UserProfile name={'tom'}/>
            </Content>
          </Layout> */}
        </Layout>
      
      </div>
    )
  }
}

export default App;

const app_container = document.getElementById("app");
render(<App />, app_container);
