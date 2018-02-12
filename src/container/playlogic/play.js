/**
 * Created by 0easy-23 on 2017/9/15.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
// import * as musicInfoAction from '../../actions/music';
import Play from '../../components/play/Play'
import { getMusicInfo,controlMusic } from '../../actions/getDate'
// import * as musicActions from '../../actions/getDate'

const mapStateToProps = (state) => {
    console.log(state)
    // return state;
    // console.log(state)
    return {
        musicList:state.Play.musicList,
        control:state.Play.control
    };
};
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        // musicInfoAction: bindActionCreators(musicActions, dispatch)
        musicInfo: bindActionCreators(getMusicInfo, dispatch),
        controlMusic:bindActionCreators(controlMusic, dispatch)
    }
};
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch(actionCreator)
//         }
//     }
// }
export default withRouter(withRouter(connect(mapStateToProps, mapDispatchToProps)(Play)));