import './style.css';
export const Room = ({ name, price, src }) => {
  return (
    <div className="card">
      <img className="card__image" src={src} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price} Kč na osobu</div>
    </div>
  );
};
