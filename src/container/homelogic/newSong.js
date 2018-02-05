
import {withRouter,} from "react-router-dom"
import {connect} from "react-redux";
import NewSong from "../../components/home/newSong"



const mapStateToProps = (state, ownProps) => {
    return {
        newSong: state.Recommend.NewSongDate
    }
}

export default withRouter(connect(mapStateToProps)(NewSong))





