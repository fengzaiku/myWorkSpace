import {withRouter} from 'react-router-dom';
import Login from '../../components/login/Login'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"


const mapStateToProps = (state, ownProps) => {
    return state;
}


export default withRouter(connect(mapStateToProps)(Login))