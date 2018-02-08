import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import { getAlbumDate } from "../../actions/getDate";
import Album from "../../components/album/Album"

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        albumList: state.Rank.albumDate
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        albumInfo:bindActionCreators(getAlbumDate,dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Album))


