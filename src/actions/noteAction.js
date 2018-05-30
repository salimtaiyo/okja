import { GET_NOTES } from '../actionTypes';
import { DB_CONFIG } from '../firebase';

export function getNotes(){
   return dispatch => {
        DB_CONFIG.on('value', snapshot => {
            dispatch({
                type: GET_NOTES,
                payload: snapshot.val()
            })
        })
   }
}

export function saveNote(note){
   return dispatch => DB_CONFIG.push(note) 
}