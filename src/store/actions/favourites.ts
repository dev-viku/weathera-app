/* eslint-disable prettier/prettier */
import { CitiesData } from "../../helpers/helper"
import { ADD_FAVOURITE, REMOVE_FAVORITE, SELECTED_CITY_LIST, SELECT_CITY } from "../types/favourers"

export const addFavouriteAction = (payload: CitiesData) => {
    return {
        type: ADD_FAVOURITE,
        payload: payload
    }
}

export const removeFavoriteAction = (payload: CitiesData) => {
    return {
        type: REMOVE_FAVORITE,
        payload: payload
    }
}

export const selectedCityListAction = (payload: CitiesData) => {
    return {
        type: SELECTED_CITY_LIST,
        payload: payload
    }
}

export const selectCityAction = (payload: CitiesData) => {
    return {
        type: SELECT_CITY,
        payload: payload
    }
}