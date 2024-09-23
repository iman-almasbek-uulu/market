// import React from "react";
import { useState } from "react";
import "../../App.scss";
import { NavLink } from "react-router-dom";

function Header() {

  const [burger,setBurger] = useState(false);

  const showBurger = () => {
    setBurger(!burger);
  }

  return (
    <div className="header">
      <NavLink to="/main" className="logo">
        <img src="/images/logo1.png" alt="Logo" />
        <img src="/images/logo2.png" alt="Logo" />
      </NavLink>
      <nav className={burger ? "" : "show"}>
        <ul className="header-list">
          <li className="header-list__item">
            <NavLink to="/market" className="header-list__link" href="">
              Marketplace
            </NavLink>
          </li>
          <li className="header-list__item">
            <NavLink to="/rank" className="header-list__link" >
              Rankings
            </NavLink>
          </li>
          <li className="header-list__item">
            <NavLink to="/connect" className="header-list__link" href="">
              Connect a wallet
            </NavLink>
          </li>
          <li className="header-list__item">
            <NavLink to="create" className="header-list__link active" href="">
              <img src="/images/User.png" alt="" />
              <span>Sign Up</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {burger ? <div className="burger close" onClick={() => showBurger() }><img src="/images/close.png" alt="" /></div> : <div className="burger" onClick={() => showBurger() }><img src="images/burger.png" alt="" /></div>} 
    </div>
  );
}

export default Header;
