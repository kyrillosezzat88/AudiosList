import React , {useContext , useState} from 'react';
import {AudiosContext} from '../ContextApi/AudioContext';
const AddNewTrack = () => {
    // conect component with contextApi
    const {dispatch} = useContext(AudiosContext);
    //define NewTrack
    const [NewTrack , setNewTrack] = useState({});
    //create state for switch add new track form
    const [AddNewTrack , setAddNewTrack] = useState(false)
    // Define Function to Dispatch an action to add newTrack to Track List 
    const AddTrack = (e) => {
        e.preventDefault();
        // dispatch action with data of newtrack with generated id by math.random this not best way to generate id we can use uuid lib but i used this way to make it simple without any liberaries 
        dispatch({type:'ADD_NEW_TRACK' , data:{...NewTrack , id:Math.floor(Math.random() * 105)}});
    }
    return(
        <div className="NewTrack">
            {/* Add Button to Switch Add new track From  */}
            <button onClick={() => setAddNewTrack(!AddNewTrack)}>{AddNewTrack ? "CANCEL" : "ADD NEW TRACK"}</button>
            {/* Create From for new track */}
            {AddNewTrack ? (
                <form onSubmit={AddTrack}>
                    <input type="text" placeholder='Enter Name of Track ' onChange={(e) => setNewTrack({...NewTrack , Name:e.target.value})} required />
                    <input type="text" placeholder='Enter length of Track' onChange={(e) => setNewTrack({...NewTrack , Length:e.target.value})} required/>
                    <input type="text" placeholder='Enter Artist of Track ' onChange={(e) => setNewTrack({...NewTrack , Artist:e.target.value})} required />
                    <input type="file" placeholder='Enter Path of Track ' onChange={(e) => {setNewTrack({...NewTrack , Path:URL.createObjectURL(e.target.files[0])}); console.log(URL.createObjectURL(e.target.files[0]))}} required />
                    <button>ADD</button>
                </form>
            ) : null}
        </div>
    )
}
export default AddNewTrack;
