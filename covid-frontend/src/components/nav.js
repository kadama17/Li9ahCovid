import React from 'react';
import { NavLink } from 'react-router-dom';
const nav = () => {
    return (
        <div className='navigation'>
          <NavLink exact to="/accueil" activeClassName="nav-active">
              Accueil
            </NavLink>
            <NavLink exact to="/passvaccinal" activeClassName="nav-active">
              PassVaccinal
            </NavLink>
            <NavLink exact to="/accueil">
              Accueil
            </NavLink>
            <NavLink exact to="/accueil">
              Accueil
            </NavLink>
        </div>
    );
};

export default nav;