import {withRouter} from 'react-router-dom';
import Recommend from '../../components/home/Recommend'
import { connect } from 'react-redux'
import * as GetDate from "../../actions/getDate"
const mapStateToProps = (state,ownProps) => {
    return {
        BannerDate:state.Recommend.BannerDate
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBannerList: () => dispatch(GetDate.getBannerList())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Recommend))