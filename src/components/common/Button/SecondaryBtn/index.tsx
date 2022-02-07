/* eslint-disable prettier/prettier */
import React from 'react';
import '../styles.scss';

export interface BtnProps {
    width?: string;
    btnText?: string;
    disabled?: boolean;
}

const SecondaryBtn: React.FC<BtnProps> = ({ width, btnText, disabled }) => {
    const btnStyle = disabled ? 'sec-btn-wrapper disable-btn' : 'sec-btn-wrapper';
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

export default SecondaryBtn;
