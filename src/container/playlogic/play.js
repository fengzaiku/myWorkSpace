/**
 * Created by 0easy-23 on 2017/9/15.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
// import * as musicInfoAction from '../../actions/music';
import Play from '../../components/play/Play'
import { getMusicInfo } from '../../actions/getDate';

const mapStateToProps = (state) => {
    console.log(state.Play.musicList)
    // return state;
    // console.log(state)
    return {
        musicList:state.Play.musicList
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfo: bindActionCreators(getMusicInfo, dispatch)
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play));