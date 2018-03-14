import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import SearchResult from "../../components/search/SearchResult";
import {bindActionCreators} from "redux"
import {fetchSearchResult} from "../../actions/getDate"

const mapStateToProps = (state, ownProps) => {
    return {
        // searchHot:state.Search.searchHot
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchActions:bindActionCreators(fetchSearchResult,dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResult))

