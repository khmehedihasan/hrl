const initialState = [] ;

function addSlider(state = initialState, action){
    switch(action.type){
        
        case 'ADD_SLIDER' : 
            state = action.data;
            return state;
           

        default : return state;
    }

}

export default addSlider;