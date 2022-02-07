/* eslint-disable prettier/prettier */
import { CitiesData } from '../../helpers/helper';
import {ADD_FAVOURITE, REMOVE_FAVORITE, SELECTED_CITY_LIST, SELECT_CITY} from '../types/favourers'
const defaultFavourites:CitiesData[] = [];
const selectedCityList:CitiesData[] = [
];
const defaultSelectCity: CitiesData = {};



export function favouriteReducer(state = defaultFavourites, action: any) {
    switch (action.type) {
        case ADD_FAVOURITE:
            return [
                ...state,
               action.payload
            ];
        case REMOVE_FAVORITE:
            const temp = state.filter((city:CitiesData) => city.id !== action.payload.id);
            return temp;
        default:
            return state;
    }
}

export function selectedCitiesReducer(state = selectedCityList, action: any) {
    switch (action.type) {
        case SELECTED_CITY_LIST:
            return [
                ...state,
               action.payload
            ];
        default:
            return state;
    }
}

export function selectCityReducer(state = defaultSelectCity, action: any) {
    switch (action.type) {
        case SELECT_CITY:
            return [
               action.payload
            ];
        default:
            return state;
    }
}
