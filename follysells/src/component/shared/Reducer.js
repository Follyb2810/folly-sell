const { useReducer } = require("react");

const INITIAL = {
    loading: false,
    error: false,
    blogs: {} // Changed 'blog' to 'blogs' to represent a collection of blogs
};

const follyReducer = (state, action) => {
    switch (action.type) {
        case "Start": {
            return {
                ...state, 
                loading: true,
                error: false,
                blogs: action.payload 
            };
        }
        case  "Succes":{
            return {
                ...state,
                loading:false,
                error:false,
                blogs:action.payload
            }
        }
        case  "Error":{
            return {
                ...state,
                loading:false,
                error:true,
                blogs:{ }
            }
        }
        
        default:
            return state; 
    }
};


const [state,dispatch]= useReducer(follyReducer,INITIAL)
