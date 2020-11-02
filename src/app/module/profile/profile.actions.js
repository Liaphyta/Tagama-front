export const GET_MAIN_USER_REQUEST = "GET_MAIN_USER_REQUEST";
export const GET_MAIN_USER_SUCCESS = "GET_MAIN_USER_SUCCESS";
export const GET_MAIN_USER_FAIL = "GET_MAIN_USER_FAIL";

export function fetchMainUserData(){
    return {
        type: GET_MAIN_USER_REQUEST,
        payload: undefined
    };
}
