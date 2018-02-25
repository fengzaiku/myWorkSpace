import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from "react-router-dom"
// import * as musicInfoAction from '../../actions/music';
import Player from '../../components/play/Player';
import { getMusicInfo,controlMusic,setCurMusicIndex,updateMusicProgress} from '../../actions/getDate'

const mapStateToProps = (state) => {
    return {
        currentPlayIndex:state.Play.currentPlayIndex,
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
        updateMusicProgress: bindActionCreators(updateMusicProgress, dispatch),
        setCurMusicIndex: bindActionCreators(setCurMusicIndex, dispatch),
        musicInfo: bindActionCreators(getMusicInfo, dispatch),
        controlMusic:bindActionCreators(controlMusic, dispatch)
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));