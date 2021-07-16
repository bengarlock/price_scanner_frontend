//reducers evaluate actions and return state based off that action.

import {GET_FAVORITES, RENDER_FORM, RENDER_OVERLAY, SET_FAVORITE} from "../Actions/Types";

const initialState = {
    favorites: [],
    selected_favorite: {},
    render_overlay: false,
    render_form: false,
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

        case RENDER_FORM:
            return {
                ...state,
                render_form: action.payload
            }
        case RENDER_OVERLAY:
            return {
                ...state,
                render_overlay: action.payload
            }

        default:
            return state
    }
}