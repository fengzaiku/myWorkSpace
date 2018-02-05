import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import Artist from "../../components/artist/Artist"
import {bindActionCreators} from "redux"
import {getArtist} from "../../actions/getDate"

const mapStateToProps = (state, ownProps) => {
    return {
        ArtistDate: state.Rank.artistDate
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getArtist:bindActionCreators(getArtist,dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Artist))