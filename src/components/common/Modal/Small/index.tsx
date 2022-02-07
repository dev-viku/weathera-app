/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React from 'react';
import CrossIcon from '../../../shared/icons/CrossIconNoBackground';
import './style.scss';
import PrimaryBtn from '../../Button/PrimaryBtn';
import SecondaryBtn from '../../Button/SecondaryBtn';
import { Button } from 'antd';

export interface ModalProps {
    width?: any;
    handleClose?: any;
    show?: boolean;
    children?: any;
    title?: string;
    subTitle?: string;
    primaryBtn?: string;
    secondaryBtn?: string;
    primaryCTAHandler?: any;
    secondaryCTAHandler?: any;
    showYellowBackground?: boolean;
    showFooter?: boolean;
    customBtn?: any;
    titleIcon?: any;
    closeIcon?: any;
}

const SmModal: React.FC<ModalProps> = ({
    width,
    handleClose,
    show = false,
    children,
    title,
    subTitle = '',
    primaryBtn,
    secondaryBtn,
    primaryCTAHandler,
    secondaryCTAHandler,
    customBtn,
    showFooter = true,
    showYellowBackground = true,
    titleIcon,
    closeIcon = <CrossIcon />,
}) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    const showHeader = showYellowBackground ? 'display-yellow' : 'display-transparent';

    const handleOutsideClick = (e) => {
        e.preventDefault();
        if (handleClose) {
            handleClose();
        }
    };

    return (
        <div className={showHideClassName}>
            <section className="modal-main-sm">
                <div className={`header ${showHeader}`}>
                    <div className="modal-title">
                        <span className="icon-title-container">
                            {titleIcon}
                            <span className={titleIcon ? 'icon-text-space' : 'icon-text-no-space'}>&nbsp;&nbsp;</span>
                            {title}
                        </span>
                        {subTitle && <span className="subtitle-text">{subTitle}</span>}
                    </div>
                    <div className="icon-container" onClick={handleClose}>
                        {closeIcon}
                    </div>
                </div>
                <div className="content">{children}</div>
                {showFooter && (
                    <div className={showFooter ? 'footer' : 'footer mobile-footer'}>
                        {secondaryBtn && (
                            <div className="sec-btn-container" onClick={secondaryCTAHandler}>
                                <PrimaryBtn btnText={secondaryBtn} width={'109'} />
                            </div>
                        )}
                        {customBtn && <div className="custom-btn-container">{customBtn}</div>}
                        {primaryBtn && (
                            <div className="pri-btn-container" onClick={primaryCTAHandler}>
                                <PrimaryBtn btnText={primaryBtn} width={'98'} />
                            </div>
                        )}
                    </div>
                )}
            </section>
            <section className="bg" onClick={handleOutsideClick} />
        </div>
    );
};

export default SmModal;
