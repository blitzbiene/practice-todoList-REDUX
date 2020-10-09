export const addItem = (item)=>{
    return {
        type:'ADD_ITEM',
        payload: item
    }
};
export const clearList = ()=>{
    return {
        type:'CLEAR_LIST'
    }
}
export const selectItem = (item)=>{
    return {
        type:'SELECT_ITEM',
        payload: item
    }
}
export const deleteitem = (item)=>{
    return {
        type:'DELETE_ITEM',
        payload:item
    }
}