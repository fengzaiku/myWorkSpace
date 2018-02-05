import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import ArtistSinger from "../../components/artist/ArtistSinger"

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // dispatch:bindActionCreators(,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSinger)


