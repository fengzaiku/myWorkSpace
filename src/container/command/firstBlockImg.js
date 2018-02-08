import {withRouter} from "react-router-dom"
import {connect} from "react-redux" 
import FirstBlockImg from "../../components/comman/FirstBlockImg";

const mapStateToProps = (state, ownProps) => {
    return {
        // ownprop: ownProps
    }
}

export default connect(mapStateToProps)(FirstBlockImg)