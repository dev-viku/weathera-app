import React from "react";
import CrossIcon from "../../../shared/icons/CrossIcon";
import "./styles.scss";
import PrimaryBtn from "../../Button/PrimaryBtn";
import SecondaryBtn from "../../Button/SecondaryBtn";

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
  titleIcon?: any;
  closeIcon?: any;
  showFooter?: boolean;
}

const MdModal: React.FC<ModalProps> = ({
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
  titleIcon,
  closeIcon = <CrossIcon />,
  showFooter = false,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
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
      <section className="modal-main-md">
        <div className={`header ${showHeader}`}>
          <div className="modal-title">
            {titleIcon}
            <span
              className={titleIcon ? "icon-text-space" : "icon-text-no-space"}
            >
              &nbsp;&nbsp;
            </span>
            {title}
          </div>
          <div className="icon-container" onClick={handleClose}>
            {closeIcon}
          </div>
        </div>
        <div className="content">{children}</div>
        {showFooter && (
          <div className={showFooter ? "footer" : "footer mobile-footer"}>
            {secondaryBtn && (
              <div className="sec-btn-container" onClick={secondaryCTAHandler}>
                <SecondaryBtn btnText={secondaryBtn} width={"80"} />
              </div>
            )}
            {primaryBtn && (
              <div className="pri-btn-container" onClick={primaryCTAHandler}>
                <PrimaryBtn
                  btnText={primaryBtn}
                  disabled={false}
                  width={"123"}
                />
              </div>
            )}
          </div>
        )}
      </section>
      <section className="bg" onClick={handleOutsideClick} />
    </div>
  );
};

export default MdModal;
