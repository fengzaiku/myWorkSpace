import React,{Component} from "react"
import SearchHeader from '../../container/homelogic/searchHeader'
import SearchSty from '../../assets/styleSheet/search/search'

class SearchPage extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    componentWillMount(){
        this.props.getSearchHot()
    }
    handleClick(val){
        this.props.history.push({"pathname":"/searchresult",state:{"searchValue":val}})
    }
    render(){
        const hotList=this.props.searchHot.data ? this.props.searchHot.data.info : [{}];
        return (
            <div>
                <SearchHeader/>
                <div className={SearchSty.searchResult}>
                    <ul className={SearchSty.hotListBox}>{
                            hotList.map((item,index)=>{
                                return(<li className={SearchSty.hotList} key={index} onClick={() => this.handleClick(item.keyword)}>{item.keyword}</li>)
                            })
                        } 
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchPage



















