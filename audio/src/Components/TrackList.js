import React , {useContext , useState} from 'react'
import {AudiosContext} from '../ContextApi/AudioContext';
const TrackList = () => {
    //Conect Component with contextapi
    const {Audios ,dispatch} = useContext(AudiosContext);
    //state to store track path to pass it to audio 
    const [Track ,setTrack] = useState(''); // by default we set first song on list 
    //function to remove track from track lists 
    const RemoveTrack = (url) => {
        //dispatch an action to remove track using id 
        dispatch({type:"REMOVE_TRACK" , url})
    }
    return(
        <div className="Track">
            {Audios.Audios.length > 0 ? (
                <div>
                {/* Audio  */}
                    <audio
                        controls
                        src={Track}>
                    </audio>
                    {/* List of Availabel audios  */}
                    <ul>
                        {/* Check if there is search result or not to render it  */}
                        {Audios.SearchResult.length ? 
                            typeof Audios.SearchResult  === 'string' ? ( //check type of Search result of String that mean there is no result found if false thats mean there is reslt found and render it 
                                <h3>Opps! Track Not Found</h3>
                                ) : 
                                Audios.SearchResult.map(audio => (
                                    <li className={Track === audio.url ? 'active' : ''} key={audio.id} >
                                        <div onClick={() => setTrack(audio.url)}>
                                            <span className='NameofTrack'>{audio.name}</span>
                                            <span>{audio.length}</span>
                                        </div>
                                        <span onClick={() => {RemoveTrack(audio.id);setTrack('')}}>x</span>
                                    </li>
                                ))
                            :
                            Audios.Audios.map(audio => ( // render audios if there is no search result (empty) 
                                <li className={Track === audio.url ? 'active' : ''} key={audio.id} >
                                    <div onClick={() => setTrack(audio.url)}> {/* To set current of clicked track */}
                                        <span className='NameofTrack'>{audio.name}</span>
                                        <span>{audio.length}</span>
                                    </div>
                                    <span onClick={() => {RemoveTrack(audio.url);setTrack('')}}>x</span> {/* when click on X Button will dispatch and remove action to remove track from list nd remove it from current Audio if it selected  */}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            ) : (
                <h4>Loading...</h4> //if there is no any track on list
            )}
        </div>
    )
}
export default TrackList;