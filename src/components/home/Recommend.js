import React,{Component} from "react"
import PropTypes from "prop-types"
import BannerSty from "../../assets/styleSheet/home/banner"
import RecommenList from "../../container/homelogic/recommentList"
import ReactSwipe from 'react-swipe'
class Recommend extends Component {
    constructor(props,context){
        super(props)
        this.store=context.store;
    }
    componentDidMount() {
       
      }    
    componentWillMount(){
        this.props.getBannerList()
    }
    render(){
        
        const BannerList=this.props.BannerDate;
        const swipeOptions={
            speed: 400,
            auto: 3000,
            continuous:true
        }
        if(BannerList.length){
           return(
               <section>
                   <ReactSwipe className={BannerSty.carousel} swipeOptions={swipeOptions}>
                        {
                            BannerList.map((item,index) => {
                                return(
                                    <div key={index} className={BannerSty.slide}>
                                        <img src={item.imgurl} title={item.title}/>
                                    </div>
                                )
                            })
                        }
                    </ReactSwipe>
                    <RecommenList/>
               </section>
           )
        }else{
            return(
                <div>大海</div>
            )
        }
    }
}
// const { store } = this.context;
// // http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html
// const state = store.getState();

Recommend.contextTypes = {
    store:PropTypes.object
  }
export default Recommend






