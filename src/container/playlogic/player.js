import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from "react-router-dom"
// import * as musicInfoAction from '../../actions/music';
import Player from '../../components/play/Player';
import { getMusicInfo } from '../../actions/getDate'

const mapStateToProps = (state) => {
    return {
        musicList:state.Play.musicList,
        // music: state.music,
        control:state.Play.control,
        // progress:state.progress,
        // audio:state.audio,
        // lyricsUpdate:state.lyricsUpdate,
        // spin:state.spin,
        // volumeObj:state.volumeObj
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfo: bindActionCreators(getMusicInfo, dispatch)
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));