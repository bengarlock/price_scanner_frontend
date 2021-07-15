//reducers evaluate actions and return state based off that action.

import { GET_FAVORITES } from "../Actions/Types";

const initialState = {
    favorites: [],
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
            }

        default:
            return state
    }
}