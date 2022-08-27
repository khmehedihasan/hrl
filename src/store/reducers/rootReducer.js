import { combineReducers } from 'redux';
import info from './addInfo';
import slider from './addSlider';


const rootReducer = combineReducers({
    info,
    slider

});

export default rootReducer;