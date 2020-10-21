import React , {useContext , useState} from 'react';
import {AudiosContext} from '../ContextApi/AudioContext';
const AddNewTrack = () => {
    // conect component with contextApi
    const {dispatch} = useContext(AudiosContext);
    //define NewTrack
    const [NewTrack , setNewTrack] = useState({});
    //State For simple vildate bec i have no time to advanced validat form :) :D
    const [Errors ,setErrors] = useState(null);
    //create state for switch add new track form
    const [AddNewTrack , setAddNewTrack] = useState(false)
    // Define Function to Dispatch an action to add newTrack to Track List 
    const AddTrack = (e) => {
        e.preventDefault();
        if(Object.keys(NewTrack).length === 4){
            // dispatch action with data of newtrack with generated id by math.random this not best way to generate id we can use uuid lib but i used this way to make it simple without any liberaries 
            dispatch({type:'ADD_NEW_TRACK' , data:{...NewTrack , id:Math.floor(Math.random() * 105)}});
            setErrors(null);
        } else{
            setErrors('All Fileds Required');
        }
    }
    return(
        <div className="NewTrack">
            {/* Add Button to Switch Add new track From  */}
            <button onClick={() => setAddNewTrack(!AddNewTrack)}>{AddNewTrack ? "CANCEL" : "ADD NEW TRACK"}</button>
            {/* Create From for new track */}
            {AddNewTrack ? (
                <form onSubmit={AddTrack}>
                    <input type="text" placeholder='Enter Name of Track ' onChange={(e) => setNewTrack({...NewTrack , name:e.target.value})} required />
                    <input type="text" placeholder='Enter length of Track' onChange={(e) => setNewTrack({...NewTrack , length:e.target.value})} required/>
                    <input type="text" placeholder='Enter Artist of Track ' onChange={(e) => setNewTrack({...NewTrack , artist:e.target.value})} required />
                    <input type="text" placeholder='Enter url of Track ' onChange={(e) => setNewTrack({...NewTrack , url:e.target.value})} required />
                    <p className='error'>{Errors}</p>
                    <button>ADD</button>
                </form>
            ) : null}
        </div>
    )
}
export default AddNewTrack;
