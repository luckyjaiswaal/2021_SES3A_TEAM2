import React, { Component } from 'react';
import { Avatar } from 'antd';
import './userprofile.css';

export default class userProfile extends Component {
    render(){
        let {name} = this.props
        
        return(
            <div id='view1' className='pane'>
                <div className='header'>User Profile</div>
                <div>
                    <div className={'avatar-view'}>
                        <Avatar shape="square" size={120} icon="user" />
                    </div>
                    <div className={'info-view'}>
                        <div>name: {name}</div>               
                    </div>
                </div>
            </div>
        )
    }
}