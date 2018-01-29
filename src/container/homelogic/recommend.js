import {Route,withRouter,Redirect} from 'react-router-dom';
import Recommend from '../../components/home/Recommend'
import { connect } from 'react-redux'
// import * as GetDate from "../../actions/index"
import * as GetDate from "../../actions/getDate"
const mapStateToProps = (state,ownProps) => {
    console.log(state)
    // console.log(ownProps)
    // return state;
    return {
        BannerDate:state.Recommend.BannerDate
    }
}
// console.log(GetDate)
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBannerList: () => dispatch(GetDate.getBannerList())
    }
}

// VisibleTodoList.contextTypes = {
//     store: React.PropTypes.object
//   }
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Recommend))