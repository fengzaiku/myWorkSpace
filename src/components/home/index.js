import React, {Component} from 'react';
import Header from '../../assets/SearchHeader.less';
import SearchHeader from './searchHeader'
console.log(Header)
export default class extends Component {
    componentDidMount() {
//      this.props.searchActions.fetchSearchHot();
    }

    render() {
        return (
            <div className={Header.container}>
                <SearchHeader/>
            </div>
        )
    }
}