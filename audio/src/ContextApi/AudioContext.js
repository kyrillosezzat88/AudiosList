import React , {createContext , useReducer} from 'react';
import Withoutyou from '../Assets/audios/withoutu.mp3'
import Skyfall from '../Assets/audios/skyfall.mp3'
import AudioReducer from './AudioReducer';
const initState = {
    Audios:[ 
        {id:1,Name:'Without You' , Length:'3:28' , Artist:'Avicii ' , Path:`${Withoutyou}`},
        {id:2,Name:'SkayFall' , Length:'4:29' , Artist:'Adele' , Path:`${Skyfall}`},
    ],//to store Audios which should come from api (so your api dosnt work so i created two tracks to show as default in page  )
    SearchResult :[] // to store Search Result 
};
export const AudiosContext = createContext(initState);

const AudioProvider = (props) => {
    //setup a reducer 
    const [Audios , dispatch] = useReducer(AudioReducer , initState)
    return(
        <AudiosContext.Provider value={{Audios , dispatch}}>
            {props.children}
        </AudiosContext.Provider>
    )
}

export default AudioProvider;