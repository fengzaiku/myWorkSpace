import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import MusicList from '../../components/play/MusicList'
import {getMusicInfo, removeMusic,clearMusic ,setCurMusicIndex} from '../../actions/getDate'

const mapStateToProps = (state) => {
    return {
        currentPlayIndex:state.Play.currentPlayIndex,
        musicList:state.Play.musicList
    };
};
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        setCurMusicIndex: bindActionCreators(setCurMusicIndex, dispatch),
        musicInfo: bindActionCreators(getMusicInfo, dispatch),
        removeMusic: bindActionCreators(removeMusic, dispatch),
        clearMusic:bindActionCreators(clearMusic, dispatch)
    }
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MusicList))



