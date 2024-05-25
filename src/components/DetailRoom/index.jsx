import { useState } from 'react';
import './style.css';
export const DetailRoom = ({ room }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [numberPersons, setNumberPersons] = useState('');
  const [catering, setCatering] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let totalDemand = '';
  return (
    <>
      <h2>
        Pokoj {room.name}, {room.cena} Kč na osobu za noc
      </h2>
      <div className="columns-2">
        <div className="column">
          <img src={room.image} />
          <p>{room.popis}</p>
        </div>
        <form>
          <div className="form-fields">
            <label htmlFor="field1" className="field-label">
              Od
            </label>
            <input id="field1" className="field-input" type="text" />

            <label htmlFor="field2" className="field-label">
              Do
            </label>
            <input id="field2" className="field-input" type="text" />

            <label htmlFor="select" className="field-label">
              Select:
            </label>
            <select id="select" className="field-input">
              <option>Žádné</option>
              <option>Snídaně</option>
              <option>Polopenze</option>
              <option>Plná penze</option>
            </select>

            <label htmlFor="check1" className="field-label">
              Domácí mazlíček:
            </label>
            <input id="check1" className="field-input" type="checkbox" />
            <label htmlFor="check1" className="field-label">
              Přistýlka pro dítě:
            </label>
            <input id="check1" className="field-input" type="checkbox" />
            <label htmlFor="check1" className="field-label">
              Bezbariérový přístup:
            </label>
            <input id="check1" className="field-input" type="checkbox" />
            <label htmlFor="field1" className="field-label">
              E-mail:
            </label>
            <input id="field2" className="field-input" type="text" />

            <label htmlFor="field1" className="field-label">
              Telefon:
            </label>
            <input id="field2" className="field-input" type="text" />
          </div>
          <button className="wide">Submit</button>
        </form>
      </div>
    </>
  );
};
