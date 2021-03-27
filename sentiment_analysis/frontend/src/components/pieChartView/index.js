import React, { Component } from 'react';
import './view2.css';
import PieChart from '../charts/pieChart/index';

export default class PieChartView extends Component {
    render() {
        return (
            <div id='view2' className='pane'>
                <PieChart />
            </div>
        )
    }
}