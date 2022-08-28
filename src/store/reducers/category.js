const initialState = [] ;

function category(state = initialState, action){
    switch(action.type){
        
        case 'ADD_CATEGORY' : 
            state = action.data;
            return state;
           

        default : return state;
    }

}

export default category;