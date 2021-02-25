// import action types here
const { } = require('./../actions/actionTypes')

const func = function(state = {}, action){
    // match to action type and return the state
    switch(action.type){
        case 'type1': 
            return{
                ...state, data: action.data
            }
        case 'type2':
            return { }
        default:
            return state;
    }
}

export default func
