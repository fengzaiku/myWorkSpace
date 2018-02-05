import React,{Component} from "react"
import ArtistSty from '../../assets/styleSheet/artist/artist'


class Artist extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        !this.props.ArtistDate.loaded && this.props.getArtist()
    }
    handleClick(id){
        this.props.history.push("/artist/"+id)
    }
    render(){
        const artistItems=this.props.ArtistDate.artists;
        let $this=this;
        if(artistItems.length>0){
            return (
                <ul className={ArtistSty.listBox}>
                    {
                        artistItems.map(function(item,index){
                            return(
                                <li key={index} className={ArtistSty.list} onClick={$this.handleClick.bind($this,item.classid)}>
                                    <figure className={ArtistSty.figure}>
                                        <img  src={item.imgurl}/>
                                        <figcaption>{item.classname}</figcaption>
                                    </figure>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }else{
            return(
                <div>歌手</div>
            )
        }
       
    }
}

export default Artist


