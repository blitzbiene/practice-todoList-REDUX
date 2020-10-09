import {combineReducers} from 'redux';

const selectedItem  = (state="",action)=>{
          
       switch(action.type)
       {
           case 'SELECT_ITEM':
               return action.payload;
            default: return state;
       }
}
const todoListReducer = (state=["first item"],action)=>{

    switch(action.type)
    {
        case 'CLEAR_LIST':
            const emptyList = [];
            return emptyList;
        case 'DELETE_ITEM':
           return state.filter(item=>item!==action.payload);
        case 'ADD_ITEM':
            return [...state,action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    editItem: selectedItem,
    todolist:todoListReducer
});