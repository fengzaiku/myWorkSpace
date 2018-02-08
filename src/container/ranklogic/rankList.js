import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import RankList from "../../components/rank/RankList"
import { getListRankDate } from "../../actions/getDate";

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        RankList: state.Rank.rankListDate
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        rankListinfo:bindActionCreators(getListRankDate,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankList)


