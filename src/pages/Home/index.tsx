/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CitiesData } from '../../helpers/helper';
import './styles.scss';
import favoriteIcon from './../../components/shared/icons/favorite-star.svg';
import AddCityModal from '../AddCityModal';
import { removeFavoriteAction } from '../../store/actions/favourites';

export const Home = () => {
    const [showAddCityModal, setShowAddCityModal] = useState(false);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const favoriteCities = state.favouriteReducer;

    const handleFavorite = (city: CitiesData) => {
        dispatch(removeFavoriteAction(city));
    };

    return (
        <div className="home-wrapper">
            <div className="header-container">
                <div className="header-text">My Favorite cities</div>
                <div className="button-container">
                    <button onClick={() => setShowAddCityModal(true)}>Add New City</button>
                </div>
            </div>
            <div className="body-container">
                {favoriteCities && favoriteCities.length > 0 ? (
                    favoriteCities.map((city: CitiesData) => {
                        return (
                            <div className="cities-container" key={city.id}>
                                <div className="cities-header">
                                    <div className="city-title">{city?.name}</div>
                                    <div className="favorite-icon" onClick={() => handleFavorite(city)}>
                                        <img src={favoriteIcon} alt="" />
                                    </div>
                                </div>
                                <div className="cities-body">
                                    <div className="desc-container">{city?.desc}</div>
                                    <div>
                                        <span>Temperature: </span>
                                        {city?.temp}
                                    </div>
                                    <div>
                                        <span>Humidity: </span>
                                        {city?.humidity}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>You have not selected any city as a favorite yet.</div>
                )}
            </div>
            {showAddCityModal && (
                <AddCityModal show={showAddCityModal} handleClose={() => setShowAddCityModal(false)} />
            )}
        </div>
    );
};
