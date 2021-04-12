import React, { Component } from "react";
import { render } from "react-dom";
import './dashboard.css';
import NavBar from '../components/navbar/index';
import {Layout, Typography} from 'antd'
import PieChartView from '../components/pieChartView/index'
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import TwitterFeedScroll from "./TwitterFeedScroll";
import { Accordion, Grid, withStyles } from "@material-ui/core";

const { Sider, Content, Footer } = Layout;

const styles = (theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const AccordionSummary = withStyles({
  root: {
    flexDirection: "column"
  },
  content: {
    marginBottom: 0
  },
  expandIcon: {
    marginRight: 0,
    paddingTop: 0
  }
})(MuiAccordionSummary);

const accordionData = [
  {
    id: 1,
    name: "Tesla - TSLA",
    price: "Price - $420 ↑ $50",
    sentimentscore: "Sentiment - 76/100 [--------|||||]",
    content: "Insert Graphs Here"
  },
  {
    id: 2,
    name: "Google - GOOGL",
    price: "Price - $660 ↓ $20",
    sentimentscore: "Sentiment - 50/100 [------|||||||]",
    content: "Insert Graphs Here"
  },
  {
    id: 3,
    name: "Facebook - FB",
    price: "Price - $540 ↓ $80",
    sentimentscore: "Sentiment - 23/100 [---||||||||||]",
    content: "Insert Graphs Here"
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: [],
    };
  }

  render() { 
    return(
      <>
        <NavBar></NavBar>
        <div className="flex">
          <div className="accordion">
            <Grid>
              {accordionData.map((item, index) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a=content"
                    id="panel1a-header"
                  >
                    <Typography>{item.name}</Typography>
                    <br/>
                    <Typography>{item.price}</Typography>
                    <br/>
                    <Typography>{item.sentimentscore}</Typography>  
                    
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.content}
                  </AccordionDetails>
                </Accordion>
                ))}
            </Grid>
          </div>
          <div>
            <div>
              {/* <PieChartView /> */}
            </div>
          </div>
            {/* <TwitterFeedScroll/> */}
        </div>
      </>
    )
  }
}

export default App;

const app_container = document.getElementById("app");
render(<App />, app_container);
