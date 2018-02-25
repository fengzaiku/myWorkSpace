import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchHeadSty from '../../assets/styleSheet/home/SearchHeader'



class SearchHeader extends Component {
	constructor(props){
        super(props);
        
    }
	render(){
		return(
			<article className={SearchHeadSty.article}>
				<header className={SearchHeadSty.login}> <Link to="/login"><i className={SearchHeadSty.loginIcon}>&#xe630;</i> </Link></header>
                <section className={SearchHeadSty.searchBar}>
                    <input type="text" />
                </section>
                <aside className={SearchHeadSty.searchBut}> <i>&#xe6ae;</i></aside>
			</article>
		)
	}
}
export default SearchHeader







