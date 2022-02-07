/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import { favouriteReducer,  selectedCitiesReducer, selectCityReducer} from './reducers/favouriteReducer';

const rootReducer = combineReducers({
    favouriteReducer, selectedCitiesReducer, selectCityReducer
  });
  
  export default rootReducer;
