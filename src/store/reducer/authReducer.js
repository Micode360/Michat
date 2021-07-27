



const authReducer = (state, action) => {

    switch(action.type){
        case 'REGISTER_USER': 
        console.log(state, 'reducer');
        return [...action.state];
        default:
            return state;
    }
}


export default authReducer
