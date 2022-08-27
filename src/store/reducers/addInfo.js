const initialState = {} ;

function forHome(state = initialState, action){
    switch(action.type){
        
        case 'ADD_INFO' : 
            state = action.data;
            return state;
           

        default : return state;
    }

}

export default forHome;