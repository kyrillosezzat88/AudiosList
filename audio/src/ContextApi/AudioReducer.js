// Raducer 
export default (state , action) => {
    switch (action.type) {
        // case to add new track to list of tracks 
        case "ADD_NEW_TRACK":
            return{
                ...state,
                Audios:[...state.Audios , action.data]
            }
        //To Remoev Track
        case "REMOVE_TRACK":
            return{
                ...state,
                Audios:state.Audios.filter(audio => audio.id !== action.id)
            }
        //To Search Result 
        case "SEARCH_RESULT":
            return{
                ...state,
                SearchResult:action.data
            }
        default:
            return state
    }
}