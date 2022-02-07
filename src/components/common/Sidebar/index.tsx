/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import './styles.scss';
import { SidebarItem, generateSidebarItems } from './SidebarItems';
import { useLocation, useNavigate } from 'react-router-dom';

export const Sidebar = () => {
    const location = useLocation();
    const [selectedSidebarTab, SetSelectedSidebarTab] = useState('home');
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/cities') {
            SetSelectedSidebarTab('cities');
        }
    }, [location.pathname]);

    const view = generateSidebarItems().map((tab: SidebarItem, index: number) => {
        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
                className={tab.title == selectedSidebarTab ? 'sidebar-active-tab' : 'sidebar-inactive-tab'}
                key={index}
                onClick={() => {
                    if (selectedSidebarTab === tab.title) {
                        return;
                    }
                    navigate(tab.route);
                    SetSelectedSidebarTab(tab.title);
                }}
            >
                <div>{tab.title == selectedSidebarTab ? tab.activeIcon : tab.inActiveIcon}</div>
                <div className="title">{tab.title}</div>
            </div>
        );
    });
    return <div className="sidebar-wrapper">{view}</div>;
};
