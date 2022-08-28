const initialState = [] ;

function packag(state = initialState, action){
    switch(action.type){
        
        case 'ADD_PACKAGE' : 
            state = action.data;
            return state;
           

        default : return state;
    }

}

export default packag;