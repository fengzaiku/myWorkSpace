import {Route,withRouter} from 'react-router-dom';
import RecommenList from '../../components/home/RecommenList'
import { connect } from 'react-redux'
import * as GetDate from "../../actions/getDate"


const mapStateToProps = (state, ownProps) => {
    return {
        RecommendDate:state.Recommend.recommendDate
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        getSongList: () =>dispatch(GetDate.getSongList())
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RecommenList))


