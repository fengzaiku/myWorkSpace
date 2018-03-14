import React,{Component} from "react"
import ComHeader from '../../container/command/comHeader'
import SearchResultSty from '../../assets/styleSheet/search/searchresult'
import NewSong from '../../container/homelogic/newSong'

class SearchResult extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.searchActions(this.props.location.state.searchValue);
    }
    render(){
        return (
            <div>
                <ComHeader title={this.props.location.state.searchValue}/>
                <NewSong />
            </div>
        )
    }
}

export default SearchResult

