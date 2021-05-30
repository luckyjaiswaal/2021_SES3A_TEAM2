import React from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h1 className="heading" >Dashboard</h1>
              <div className="dashboard">
            <div className="containers">
                <div className="box-1">
                    <h1>TESLA $TSLA</h1>
                    <h3>Price - $420 | $50</h3>
                    <h3>Sentiment 76/100 (This is meter)</h3>
                </div>
                <div className="box-1">
                    <h1>TESLA $TSLA</h1>
                    <h3>Price - $420 | $50</h3>
                    <h3>Sentiment 76/100 (This is meter)</h3>
                </div>
                <div className="box-1">
                    <h1>TESLA $TSLA</h1>
                    <h3>Price - $420 | $50</h3>
                    <h3>Sentiment 76/100 (This is meter)</h3>
                </div>
                
                <div className="box-1">
                   
                       <h1>TESLA $TSLA</h1>
                   
                    <h3>Price - $420 | $50</h3>
                    <h3>Sentiment 76/100 (This is meter)</h3>
                </div>
                
                
                
            </div>
            <div className="box-2">
                    <Link className="b" to="/indepth">In-Depth (Button)
                   </Link>
                </div>
                </div>
        </div>
      
            
       
    )
}

export default Dashboard
