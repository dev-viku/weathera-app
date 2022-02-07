/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';
import { Sidebar } from '../../components/common/Sidebar';
import './styles.scss';

export const Dashboard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-body-section">
                <div className="sidebar-section">
                    <Sidebar />
                </div>
                <div className="main-content">{children}</div>
            </div>
        </div>
    );
};
