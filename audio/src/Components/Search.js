import React , {useContext} from 'react'
import { AudiosContext } from '../ContextApi/AudioContext'

export default function Search() {
    //Conect component to contextApi 
    const {Audios , dispatch} = useContext(AudiosContext);
    //Search Function 
    const SearchResults = (SearchWord) =>{// function to filter audis depend on name of tracks 
        let Results = Audios.Audios.filter(audio => audio.Name.toLowerCase().includes(SearchWord.toLowerCase()));
        dispatch({type:"SEARCH_RESULT" , data:Results.length ? Results : "Opps! Track Not Found" }) // dispatch and action and if there is audios will store it in SearchREsult arr if not will send string with message  
    }
    return (
        <div className='Search'>
            <h3>Search</h3>
            <input placeholder='Search by track name' onChange={(e) => SearchResults(e.target.value)} /> {/* SearchResult function take paramter which is search word  */}
        </div>
    )
}
