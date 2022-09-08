import React from "react";
import good from "../images/infiToolTip__Good.png"
import bad from "../images/infiToolTip__Bad.png";

function InfoToolTip({ isOpen, isReg, okText, errText, onClose}) {
  return (
    <div className={isOpen ? 'popup popup_opened' : 'popup'}>
      <div className="popup__container">
        <img
          className='popup__info-icon'
          src={isReg ? good : bad}
          alt='результат регистрации'
        />
        <p className='popup__info-text'>{isReg ? okText : errText}</p>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
      </div>
    </div>
  )
}

export default InfoToolTip;