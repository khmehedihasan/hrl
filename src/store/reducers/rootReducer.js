import { combineReducers } from 'redux';
import info from './addInfo';
import slider from './addSlider';
import category from './category';
import packag from './package';


const rootReducer = combineReducers({
    info,
    slider,
    category,
    packag


});

export default rootReducer;