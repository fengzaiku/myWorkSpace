import {combineReducers} from 'redux';
export default combineReducers({
    albums:(state = {}, action) => {
        switch (action.type) {
            case actionTypes.MUSIC_UPDATE:
                return action.data;
                break;
            default:
                return state
        }
    }
})