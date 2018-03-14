import {withRouter} from 'react-router-dom';
import SearchHeader from '../../components/home/SearchHeader'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {setSearchState} from '../../actions/getDate';

const mapStateToProps = (state) => {
    return {
        currentPlayIndex:state.Play.currentPlayIndex,
        musicList:state.Play.musicList,
        control:state.Play.control,
        searchState:state.Search.searchDate
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        SetSearchState: bindActionCreators(setSearchState,dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchHeader))