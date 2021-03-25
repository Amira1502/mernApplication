//import typeaction
import {TOGGLE_ADD, TOGGLE_EDIT} from "../actionsTypes/edit"
//Initial state
const initialState = {
    edit : false,

}
// pure function
const EditReducer = (state= initialState, {type}) => {
 switch (type) {
     case TOGGLE_ADD:
         return {...state, edit:false}
         
         case TOGGLE_EDIT:
         return {...state, edit:true}
 
     default:
         return state;
 }
}

// export
export default EditReducer;