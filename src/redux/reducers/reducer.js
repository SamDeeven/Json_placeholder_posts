const initial = {
    users :  []
};
export const userReducer = (state = initial, action) =>{
    const {type, payload} = action;
    switch(type){
        case "GET_USERS":
            return {...state, users:payload};
        
        default:
            return state;
            
    }
}



export const userInfoReducer = (state = {}, action) =>{
    const {type, payload} = action;
    switch(type){
        case "USER_INFO":
            return {...state, ...payload}; 
        default:
            return state;    
    }
}