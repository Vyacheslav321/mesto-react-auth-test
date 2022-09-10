function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_type_bigpicture ${card.link && "popup_opened"}`}
      onClick={onClose}
    >
      <div className="popup__container popup__container_type_picture">
        <button
          className="popup__close-button popup__close-button_type_picture"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img className="popup__picture" src={card.link} alt={card.name} />
        <p className="popup__text">{card.name}</p>
      </div>
    </section>
  );
}
export default ImagePopup;
