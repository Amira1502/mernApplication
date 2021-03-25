// import types
import {GET_CONTACTS,LOAD_CONTACT,FAIL_CONTACT,GET_CONTACT} from '../actionsTypes/contact'
// initial State
const initialState = {
    contactList:[],
    loadContact: false,
    error: null,
    contact:{},
}

// pure function
const contactReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_CONTACT:
            return {...state,loadContact: true};
        case GET_CONTACTS:
           return {...state, contactList: payload.listContact, loadContact:false }
        case FAIL_CONTACT:
            return {...state, loadContact:false, error:payload}
        case GET_CONTACT:
                return {...state, contact: payload }
        default:
            return state;
    }
}
// export
export default contactReducer