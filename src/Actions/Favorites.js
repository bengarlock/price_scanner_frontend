import { GET_FAVORITES } from "./Types";
import { SET_FAVORITE } from "./Types";
import { SET_FAVORITES } from "./Types";
import { RENDER_FORM } from "./Types"
import { RENDER_OVERLAY } from "./Types"
import { CHANGE_FORM } from "./Types"
import { ADD_FAVORITE } from "./Types"

//GET FAVORITES
export const getFavorites = () => {
    return async (dispatch) => {

        const response = await fetch("https://bengarlock.com/api/v1/price_scanner/favorites/")
        let favorites = await response.json()

        const formatDate = (date) => {
            date = new Date(date)
            return date.getMonth() + 1 + '/' + date.getDate() + "/" + date.getFullYear()
        }

        const getWords = (str) => {
            return str.split(/\s+/).slice(0,5).join(" ");
        }

        favorites.forEach(favorite => favorite.created_at = formatDate(favorite.created_at))
        favorites.forEach(favorite => favorite.name = getWords(favorite.name))


        dispatch({
            type: GET_FAVORITES,
            payload: favorites
        })
    };
}


//RENDER_OVERLAY
export const renderOverlay = (status) => {
    return (dispatch) => {
        dispatch({
            type: RENDER_OVERLAY,
            payload: status,
        })
    }
}

//RENDER_FORM
export const renderForm = (status) => {
    return (dispatch) => {
        dispatch({
            type: RENDER_FORM,
            payload: status,
        })
    }
}

//SET_FAVORITE
export const setFavorite = (favorite) => {
    return (dispatch) => {
        dispatch({
            type: SET_FAVORITE,
            payload: favorite,
        })
    }
}

//CHANGE_FORM
export const changeForm = (form) => {
    return(dispatch) => {
        dispatch({
            type: CHANGE_FORM,
            payload: form
        })
    }
}

//ADD_FAVORITE
export const addFavorite = (form) => {
    return async (dispatch) => {
        const packet = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify({
                url: form.url,
                image: "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
            })
        }
        const response = await fetch("https://bengarlock.com/api/v1/price_scanner/favorites/", packet)
        const favorite = await response.json()

        dispatch({
            type: ADD_FAVORITE,
            payload: favorite
        })
    }
}

//SET_FAVORITES
export const setFavorites = (favorites) => {
    return(dispatch) => {
        dispatch({
            type: SET_FAVORITES,
            payload: favorites
        })
    }
}
