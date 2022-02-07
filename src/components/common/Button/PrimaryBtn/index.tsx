/* eslint-disable prettier/prettier */
import React from 'react';
import '../styles.scss';

export interface BtnProps {
    width?: string;
    btnText?: string;
    disabled?: boolean;
}

const PrimaryBtn: React.FC<BtnProps> = ({ width, btnText, disabled }) => {
    const btnStyle = disabled ? 'pri-btn-wrapper disable-btn' : 'pri-btn-wrapper';
    return (
        <div className="btn-container">
            {width ? (
                <button className={btnStyle} style={{ width: width + 'px' }}>
                    {btnText}
                </button>
            ) : (
                <button className={btnStyle}>{btnText}</button>
            )}
        </div>
    );
};

export default PrimaryBtn;
