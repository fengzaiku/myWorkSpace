import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import ArtistList from "../../components/artist/ArtistList"
import { bindActionCreators } from "redux";
import { getArtistList } from "../../actions/getDate";

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        artistInfo:state.Rank.artistListDate
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        artistListInfo:bindActionCreators(getArtistList,dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ArtistList))









