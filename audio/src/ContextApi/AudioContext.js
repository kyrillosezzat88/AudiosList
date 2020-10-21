import React , {createContext , useReducer, useEffect} from 'react';
import AudioReducer from './AudioReducer';
const initState = {
    Audios:[ ],//to store Audios which should come from api
    SearchResult :[] // to store Search Result 
};
export const AudiosContext = createContext(initState);

const AudioProvider = (props) => {
    //setup a reducer 
    const [Audios , dispatch] = useReducer(AudioReducer , initState)
    // get Data From api and store it in our arry audios 
    useEffect(() => {
        fetch('https://api.jsonbin.io/b/5f69e387302a837e956b59b5')
        .then(res => res.json()) // tracks came without any ids 
        .then(data => dispatch({type:"FETHC_API" , data:data.tracks}))
    },[])
    return(
        <AudiosContext.Provider value={{Audios , dispatch}}>
            {props.children}
        </AudiosContext.Provider>
    )
}

export default AudioProvider;