const reducer = (state, action) => {
    
    if (action.type === "home_update"){
        return { 
            ... state,
            name: action.payload.name,
            image: action.payload.image
        }
    }
    if (action.type === "about_update"){
        return {
            ... state,
            name: action.payload.name,
            image: action.payload.image
        }
    }
    if (action.type === "get_services"){
        return {
            ...state,
            services: action.payload
        }
    }
    
    return state
}
export default reducer;
