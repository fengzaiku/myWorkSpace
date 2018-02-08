import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import ArtistSinger from "../../components/artist/ArtistSinger"
import { getSingerList } from "../../actions/getDate";

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        singerListinfo:bindActionCreators(getSingerList,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSinger)


