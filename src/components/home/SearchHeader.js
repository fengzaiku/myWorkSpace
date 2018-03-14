import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchHeadSty from '../../assets/styleSheet/home/SearchHeader'



class SearchHeader extends Component {
	constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)
		this.inputHandleClick=this.inputHandleClick.bind(this)
		this.jumpPage=this.jumpPage.bind(this)
		this.handleKeyUp=this.handleKeyUp.bind(this)
	}
	jumpPage(){
		if(this.props.searchState.searchState){
			this.props.SetSearchState(false)
			this.props.history.goBack();
		}else{
			this.props.history.push("/login")
		}
	}
	handleClick(){
		if(this.props.searchState.searchState){
			this.props.history.push({"pathname":"/searchresult",state:{"searchValue":this.searchInput.value}})
		}else{
			const musicList = this.props.musicList;
			if(musicList.length > 0){
				this.props.history.push("/play/"+musicList[this.props.currentPlayIndex.playIndex].song.hash)	
			}				
		}
	}
	handleKeyUp(ev){
		if(ev.keyCode == 13 && this.searchInput.value.length > 0){
			this.props.history.push({"pathname":"/searchresult",state:{"searchValue":this.searchInput.value}})
		}
	}
	inputHandleClick(){
		if(!(this.props.match.path == '/search')){
			this.props.SetSearchState(true)
			this.props.history.push('/search');
		}	
	}
	componentDidMount(){
		if(this.props.searchState.searchState){
			this.searchInput.focus()
		}
	}
	render(){
		return(
			<article className={SearchHeadSty.article}>
				<header className={SearchHeadSty.login} onClick={this.jumpPage}><i className={`${this.props.searchState.searchState ? 'icon-zuojiantou' : 'icon-touxiang'} ${SearchHeadSty.loginIcon}`}></i></header>
                <section className={SearchHeadSty.searchBar}>
                    <input type="text" placeholder="请输入搜索关键词" onClick={this.inputHandleClick} ref={(input)=>{ this.searchInput=input}} onKeyUp={this.handleKeyUp}/>
                </section>
                <aside className={SearchHeadSty.searchBut} onClick={this.handleClick}> <i className={`${ (!this.props.searchState.searchState && this.props.control.playing) ? SearchHeadSty.playing : ' '} ${this.props.searchState.searchState ? 'icon-sousuo' : 'icon-yinlemusic217'}`}></i></aside>
			</article>
		)
	}
}
export default SearchHeader







