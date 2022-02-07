/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import AddCityModal from '../AddCityModal';
import { useDispatch, useSelector } from 'react-redux';
import { CitiesData } from '../../helpers/helper';
import favoriteIcon from './../../components/shared/icons/favorite-star.svg';
import starIcon from './../../components/shared/icons/star.svg';
import { addFavouriteAction, removeFavoriteAction, selectCityAction } from '../../store/actions/favourites';
import './styles.scss';
import { message } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export const Cities = () => {
    const dispatch = useDispatch();

    const state = useSelector((state) => state);
    const selectedCities = state.selectedCitiesReducer;
    const selectedCity = state.selectCityReducer;
    const favoriteCities = state.favouriteReducer;

    const [showAddCityModal, setShowAddCityModal] = useState(false);
    const [selectCityInfo, setSelectCityInfo] = useState<CitiesData[]>();

    useEffect(() => {
        if (selectedCity && selectedCity.length === 1) {
            setSelectCityInfo(selectedCity);
        }
    }, []);

    const handleSelectCity = (city: CitiesData) => {
        const cityArr = [];
        cityArr.push(city);
        setSelectCityInfo(cityArr);
        dispatch(selectCityAction(city));
    };

    const handleFavorite = (city: CitiesData) => {
        const found = favoriteCities.some((selectedCity: CitiesData) => selectedCity.id === city.id);
        if (!found) {
            success();
            dispatch(addFavouriteAction(city));
        } else {
            dispatch(removeFavoriteAction(city));
        }
    };

    const success = () => {
        message.success('city added in favorite list');
    };

    const renderStarIcon = (id: string) => {
        const found = favoriteCities.some((selectedCity: CitiesData) => selectedCity.id === id);
        if (!found) {
            return <img src={starIcon} alt="" />;
        } else {
            return <img src={favoriteIcon} alt="" />;
        }
    };

    return (
        <div className="cities-wrapper">
            <div className="left-container">
                <div className="header-container">
                    <div>Cities</div>
                    <div className="add-btn" onClick={() => setShowAddCityModal(true)}>
                        <PlusCircleOutlined />
                    </div>
                </div>
                <div className="body-container">
                    {selectedCities && selectedCities.length > 0 ? (
                        selectedCities.map((city: CitiesData) => {
                            return (
                                <div
                                    className="city-details-row"
                                    key={city.id}
                                    onClick={() => handleSelectCity(city)}
                                    style={{
                                        background:
                                            selectCityInfo &&
                                            selectCityInfo.length === 1 &&
                                            selectCityInfo[0].id === city.id
                                                ? '#e5e5e5'
                                                : '',
                                    }}
                                >
                                    <div>{city.name}</div>
                                    <div className="temp-container">{city.temp}</div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="none-select-city-text">You have not selected any city.</div>
                    )}
                </div>
            </div>
            {selectCityInfo && (
                <div className="right-container">
                    <div className="header-container">
                        <div>{selectCityInfo[0].name}</div>
                        <div className="favorite-icon" onClick={() => handleFavorite(selectCityInfo[0])}>
                            {renderStarIcon(selectCityInfo[0].id)}
                        </div>
                    </div>
                    <div className="city-body-container">
                        <div className="desc-container">{selectCityInfo[0].desc}</div>
                        <div>
                            <span>Temperature: </span>
                            {selectCityInfo[0].temp}
                        </div>
                        <div>
                            <span>Humidity: </span>
                            {selectCityInfo[0].humidity}
                        </div>
                    </div>
                </div>
            )}

            {showAddCityModal && (
                <AddCityModal show={showAddCityModal} handleClose={() => setShowAddCityModal(false)} />
            )}
        </div>
    );
};
