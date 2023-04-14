import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./CssFiles/Profil.css";
import { ProfilContext } from './Profilcontext';

function Profil() {
  const profil = React.useContext(ProfilContext);
  return (
    <DropdownButton id="dropdown-basic-button" title={profil.Profil}>
      <Dropdown.Item href="/Subscribe/LogIn/Menu/Myprofil">My profil</Dropdown.Item>
      <Dropdown.Item href="#/action-2">My Orders</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Register card</Dropdown.Item>
    </DropdownButton>
  );
}

export default Profil;