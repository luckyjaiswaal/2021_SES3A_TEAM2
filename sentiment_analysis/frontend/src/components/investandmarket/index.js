import React, { Component } from 'react';
import './investandmarket.css'

export default class InvestAndMarket extends Component {
    render(){
        let {invest,marketreturn} = this.props
        console.log(this.props.marketreturn)
        
        return(
            <div id='view1' className='pane'>
                <div className='header'>Invest and Market</div>
                <div id='content'>
                    <div>Invested by you</div>
                    <div>{invest}$</div>
                    <div>Market Returns</div>
                    <div>{marketreturn}$</div>
                </div>
            </div>
        )
    }
}