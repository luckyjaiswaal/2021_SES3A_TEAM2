import React, { Component } from 'react';
import { getData } from "./utils"
import { TypeChooser } from "react-stockcharts/lib/helper";
import Chart from './Chart';
class ChartComponent extends Component{
    componentDidMount(){
        getData().then(data => {
			this.setState({ data })
		})
    }
    render(){
        if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
    }
}

export default ChartComponent;