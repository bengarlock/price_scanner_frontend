//reducers evaluate actions and return state based off that action.

import {CHANGE_FORM, GET_FAVORITES, RENDER_FORM, RENDER_OVERLAY, SET_FAVORITE, SET_FAVORITES} from "../Actions/Types";

const initialState = {
    favorites: [],
    selected_favorite: {},
    render_overlay: false,
    render_form: false,
    form: {
        url: ''
    }
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

        case CHANGE_FORM:
            return {
                ...state,
                form: action.payload
            }

        case SET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }

        default:
            return state
    }
}