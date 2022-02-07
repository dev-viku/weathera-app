import React from "react";
import CrossIcon from "../../shared/icons/CrossIcon";
import "./styles.scss";
import PrimaryBtn from "../Button/PrimaryBtn";
import SecondaryBtn from "../Button/SecondaryBtn";

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
}

const Modal: React.FC<ModalProps> = ({
  width,
  handleClose,
  show = false,
  children,
  title,
  subTitle = "",
  primaryBtn,
  secondaryBtn,
  primaryCTAHandler,
  secondaryCTAHandler,
  showYellowBackground = true,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  let setWidth;
  if (width === "sm") {
    setWidth = "30%";
  } else if (width === "md") {
    setWidth = "65%";
  } else if (width === "lg") {
    setWidth = "80%";
  }
  const showHeader = showYellowBackground
    ? "display-yellow"
    : "display-transparent";

  const handleOutsideClick = (e) => {
    e.preventDefault();
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main" style={{ width: setWidth }}>
        <div className={`header ${showHeader}`}>
          <div className="title">{title}</div>
          <div className="icon-container" onClick={handleClose}>
            <CrossIcon />
          </div>
        </div>
        <div className="content">{children}</div>
        <div className="footer">
          {secondaryBtn && (
            <div className="sec-btn-container" onClick={secondaryCTAHandler}>
              <SecondaryBtn btnText={secondaryBtn} />
            </div>
          )}
          {primaryBtn && (
            <div className="pri-btn-container" onClick={primaryCTAHandler}>
              <PrimaryBtn btnText={primaryBtn} disabled={true} />
            </div>
          )}
        </div>
      </section>
      <section className="bg" onClick={handleOutsideClick} />
    </div>
  );
};

export default Modal;
