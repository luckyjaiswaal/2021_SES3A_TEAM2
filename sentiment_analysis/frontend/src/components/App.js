import React, { Component } from "react";
import { render } from "react-dom";
import './dashboard.css';
import UserProfile from './userProfile/index';
import NavBar from '../components/navbar/index';
import {Layout, Typography} from 'antd'
import PieChartView from '../components/pieChartView/index'
import InvestAndMarket from '../components/investandmarket/index'
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import TwitterFeedScroll from "./TwitterFeedScroll";
import { Accordion, Grid } from "@material-ui/core";

const { Sider, Content, Footer } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <NavBar></NavBar>
        <div className="flex">
          <div>
          <Grid>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a=content"
                id="panel1a-header"
              >
                <Typography> Tesla $TSLA
                  Price - $420 ^ $50
                  Sentiment 76/100 [--------|||||]
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Bruhh
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* <Layout style={{ height: 600 }}>
            <Sider width={300} style={{backgroundColor:'#eee'}}>
              <Content style={{ height: 200 }}>
                  <UserProfile name={'tom'}/>
              </Content>
              <Content style={{ height: 200 }}>
                  <InvestAndMarket marketreturn={11111} invest={1111}/>          
              </Content>
              <Content style={{ height: 250 }}>
                  <div className="status" >Market Status: CLOSED</div>         
              </Content>
            </Sider>
          </Layout> */}
          </div>
          <div>
            <div>
              <PieChartView />
            </div>
          </div>
            <TwitterFeedScroll/>
        </div>
      </>
    )
  }
}

export default App;

const app_container = document.getElementById("app");
render(<App />, app_container);
