import {Route,withRouter,Redirect} from 'react-router-dom';
import Home from '../../components/home/index'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as MusicDispatch from '../../actions/getDate';


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        MusicInfo:bindActionCreators(MusicDispatch,dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))




