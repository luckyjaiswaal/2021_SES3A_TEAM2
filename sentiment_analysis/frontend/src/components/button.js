import React from 'react'
import { useHistory } from 'react-router-dom';
import './button.css'

function Button() {
    const history = useHistory();
    const gotoLogin = () => history.push('/login');
    return (
        <div>
            <button type="submit" className="logout-btn" onClick={gotoLogin}>Logout</button>
        </div>
    )
}

export default Button
