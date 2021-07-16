//reducers evaluate actions and return state based off that action.

import { GET_FAVORITES, SET_FAVORITE } from "../Actions/Types";

const initialState = {
    favorites: [],
    selected_favorite: {},
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
            }
        case SET_FAVORITE:
            return {
                ...state,
                selected_favorite: action.payload
            }

        default:
            return state
    }
}