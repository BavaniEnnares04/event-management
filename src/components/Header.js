import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Event Management Application</h1>
      <h2>Find My Events</h2>
      <hr />
      <div className="links">
      <NavLink to="/home" className="link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/eventList" className="link" activeClassName="active" exact>
          Event List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Events
        </NavLink>
        <NavLink to="/about" className="link" activeClassName="active">
          About
        </NavLink>
      </div>
    </header>
  );
};

export default Header;