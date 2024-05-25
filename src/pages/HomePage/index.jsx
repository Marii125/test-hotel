import { useState, useEffect } from 'react';
import { Room } from '../../components/Room';
import './style.css';
import { DetailRoom } from '../../components/DetailRoom';

export const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/hotel');
      const data = await response.json();
      setRooms(data.data);
    };

    fetchRooms();
  }, []);

  return (
    <>
      <div className="banner">
        <div className="banner__stripe">
          <div className="container">
            <h1>Hotel stříbrava</h1>
            <p className="lead">
              Rodinný hotel v malebné krajině Českého středohoří
            </p>
          </div>
        </div>
      </div>
      <section className="dark">
        <div className="container">
          <h2>Naše pokoje</h2>
          <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
          <div className="cards-row">
            {rooms.map((room) => {
              console.log(room);
              return (
                <Room
                  key={room.id}
                  room={room}
                  /*  name={room.name}
                  price={room.cena}
                  src={room.image} */
                  onSelect={setSelected}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section class="light">
        <div class="container">
          <DetailRoom room={selected} />
        </div>
      </section>

      <section class="dark">
        <div class="container columns-2">
          <div class="columns">
            <h2>Kontakt</h2>
            <p>
              Hotel stříbravaKe
              <br /> Kamenné lávce 12<br></br> 317 24 nad Stříbravou
            </p>
            <a href="#">recepce@hotelstribrava.cz</a>
          </div>
          <img src="/pages/HomePage/img/mapa.png" />
        </div>
      </section>
    </>
  );
};
