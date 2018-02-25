/**
 * Created by 0easy-23 on 2017/9/15.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import Play from '../../components/play/Play'
import { getMusicInfo,controlMusic,setCurMusicIndex} from '../../actions/getDate'

const mapStateToProps = (state) => {
    return {
        musicProgress:state.Play.updateMusicProgress,
        currentPlayIndex:state.Play.currentPlayIndex,
        musicList:state.Play.musicList,
        control:state.Play.control
    };
};
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        musicInfo: bindActionCreators(getMusicInfo, dispatch),
        setCurMusicIndex: bindActionCreators(setCurMusicIndex, dispatch),
        controlMusic:bindActionCreators(controlMusic, dispatch)
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));