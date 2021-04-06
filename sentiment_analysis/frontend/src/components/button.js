import React from 'react'
import { Link , Redirect} from 'react-router-dom';
import './button.css'
import { logout } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Button extends React.Component{
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired ,
      };

    render(){
      if (this.props.isAuthenticated){
        return <Redirect to="/" />;
      }
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
          <Link to="/" onClick={this.props.logout} className="logout-btn">Logout</Link>
        )
        const guestLinks = (
          <Link to="/" className="logout-btn">Login</Link>
         
        );
        return(
          <div>
            {isAuthenticated ? authLinks : guestLinks}
            {isAuthenticated ? <Redirect to="/dashboard" />:<Redirect to="/" />}
          </div>
        
          
        )}
}
const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  export default connect(mapStateToProps, { logout })(Button);