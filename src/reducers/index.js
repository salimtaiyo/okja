import { combineReducers } from 'redux';
import notesReducer from './noteReducer';

const rootReducer = combineReducers({
   notes: notesReducer
});

export default rootReducer;

