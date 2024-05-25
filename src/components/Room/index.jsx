import './style.css';
export const Room = ({ /* name, price, src */ room, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(room)}>
      <img className="card__image" src={room.image} />
      <div className="card__title">{room.name}</div>
      <div className="card__body">{room.price} Kč na osobu</div>
    </div>
  );
};
