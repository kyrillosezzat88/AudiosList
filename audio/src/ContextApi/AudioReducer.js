// Raducer 
export default (state , action) => {
    switch (action.type) {
        // Case To store data came from api
        case "FETHC_API":
            console.log(action.data)
            return{
                ...state,
                Audios:action.data
            }
        // case to add new track to list of tracks 
        case "ADD_NEW_TRACK":
            return{
                ...state,
                Audios:[...state.Audios , action.data]
            }
        //To Remoev Track depend on url of track should depend on uniqe id but there is no ids came from api
        case "REMOVE_TRACK":
            return{
                ...state,
                Audios:state.Audios.filter(audio => audio.url !== action.url)
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