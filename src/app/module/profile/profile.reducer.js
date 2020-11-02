import { User } from "../../model/user.model";
import { GET_MAIN_USER_SUCCESS } from "./profile.actions";

export function profileReducer(currentState = {}, action) {
    switch (action.type) {  
        case GET_MAIN_USER_SUCCESS:
            return {
                ...currentState,
                singleuser: action.payload.data
            };
        
        default:
            return {
                currentState
            }; 
    }
}