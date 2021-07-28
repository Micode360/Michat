



const authReducer = (state, action) => {

    switch(action.type){
        case 'REGISTER_USER': 
        localStorage.setItem('payload',  JSON.stringify(action.state[0]));
        return[...state, action.state];
        default:
            return state;
    }
}


export default authReducer
