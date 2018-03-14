import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import SearchPage from "../../components/search/Search";
import {bindActionCreators} from "redux"
import {fetchSearchHot} from "../../actions/getDate"

const mapStateToProps = (state, ownProps) => {
    return {
        searchHot:state.Search.searchHot
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getSearchHot:bindActionCreators(fetchSearchHot,dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage))







