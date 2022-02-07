/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import SmModal from '../../components/common/Modal/Small/index';
import './styles.scss';
import { Input, message } from 'antd';
import 'antd/dist/antd.css';
import { Cities, CitiesData } from '../../helpers/helper';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCityListAction } from '../../store/actions/favourites';

export interface AddCityModalProps {
    handleClose?: () => void;
    show?: boolean;
}

const AddCityModal: React.FC<AddCityModalProps> = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [allCities, setAllCities] = useState<CitiesData[]>([]);
    const [currentCities, setCurrentCities] = useState<CitiesData[]>([]);
    const [searchText, setSearchText] = useState('');

    const state = useSelector((state) => state);
    const selectedCities = state.selectedCitiesReducer;

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    useEffect(() => {
        updateMedia();
        handleAllCity();
    }, []);

    const handleAllCity = () => {
        let filteredCities = Cities;
        if (selectedCities.length > 0) {
            const myArrayFiltered = [];
            for (const i_city in filteredCities) {
                let exist = false;
                for (const s_city in selectedCities) {
                    if (filteredCities[i_city].id === selectedCities[s_city].id) {
                        exist = true;
                        break;
                    }
                }
                if (!exist) {
                    myArrayFiltered.push(filteredCities[i_city]);
                }
            }
            filteredCities = myArrayFiltered;
        }
        setCurrentCities(filteredCities);
        setAllCities(filteredCities);
    };

    const updateMedia = () => {
        if (window.innerWidth <= 768) {
            setIsMobileDevice(true);
        } else {
            setIsMobileDevice(false);
        }
    };

    const debounce = (func: (e: any) => void, delay: number) => {
        let timer: any;
        return (e: any) => {
            console.log(e.target.value);
            clearTimeout(timer);
            setTimeout(() => {
                func(e);
            }, delay);
        };
    };

    const handleCitySearch = (e: any) => {
        const searchTxt = e.target.value;
        setSearchText(searchTxt);
        if (searchTxt.length === 0) {
            handleAllCity();
            return;
        }
        const filteredCities = currentCities.filter((city) =>
            city.name.toLowerCase().includes(searchTxt.toLowerCase()),
        );
        setAllCities(filteredCities);
    };

    const searchCity = debounce(handleCitySearch, 500);

    const handleAddCity = (city: CitiesData) => {
        const found = selectedCities.some((selectedCity: CitiesData) => selectedCity.id === city.id);
        if (!found) {
            const filterCities = allCities.filter((f_city) => f_city.id !== city.id);
            setAllCities(filterCities);
            success();
            dispatch(selectedCityListAction(city));
        }
    };

    const success = () => {
        message.success('city added');
    };

    const handleChildren = () => {
        return (
            <div className="void-approval-container">
                <div className="row-1-approval">
                    <Input placeholder="search city" style={{ width: 300 }} onChange={searchCity} />
                </div>
                <div className="row-2-approval">
                    {allCities.map((city) => {
                        return (
                            <div key={city.id} className="city-row-container">
                                <div>{city?.name}</div>
                                <div className="add-btn" onClick={() => handleAddCity(city)}>
                                    <PlusCircleOutlined />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="add-delete-user-wrapper">
            <SmModal
                width={'sm'}
                show={show}
                handleClose={handleClose}
                title={'Add City Modal'}
                showYellowBackground={true}
                primaryBtn={'Void'}
                showFooter={false}
            >
                {handleChildren()}
            </SmModal>
        </div>
    );
};

export default AddCityModal;
