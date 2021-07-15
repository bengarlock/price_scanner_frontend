import { GET_FAVORITES } from "./Types";


//GET FAVORITES
export const getFavorites = () => {
    return async (dispatch) => {

        const response = await fetch("https://bengarlock.com/api/v1/price_scanner/favorites/")
        let favorites = await response.json()

        const formatDate = (date) => {
            date = new Date(date)
            return date.getMonth() + 1 + '/' + date.getDate() + "/" + date.getFullYear()
        }

        favorites.forEach(favorite => favorite.created_at = formatDate(favorite.created_at))
        dispatch({
            type: GET_FAVORITES,
            payload: favorites
        })
    };
}