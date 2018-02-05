
import {withRouter} from "react-router-dom"
import Rank from "../../components/rank/Rank";
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
// import * as GetDate from "../../actions/getDate"
import {getRankList} from "../../actions/getDate"
// getRankList bindActionCreators
//  console.log(GetDate)
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        RankList: state.Rank.rankDate
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
     return {
         RankInfo:bindActionCreators(getRankList,dispatch)
     }
 }


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Rank))





