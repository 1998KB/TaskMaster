import React from "react";
import "./Header.css";
import Logo from "../../images/logo.png";

export const Header = () => {
  return (
    <div className="header-block">
      <div className="header-container">
        <div className="header-logo-container">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="header-hamburger-menu">
          <input type="checkbox" id="active" />
          <label htmlFor="active" className="menu-btn">
            <span></span>
          </label>
          <label htmlFor="active" className="close"></label>
          <div className="wrapper">
            <ul className="link-burger-container">
              <li>
                <a className="link-burger">Features</a>
              </li>
              <li>
                <a className="link-burger">Solutions</a>
              </li>
              <li>
                <a className="link-burger">Plans</a>
              </li>
              <li>
                <a className="link-burger">Resources</a>
              </li>
              <button className="btn-standard-signin burger">
                Create project
              </button>
              <button className="btn-standard-login burger">Log in </button>
            </ul>
            <div className="btn-burger-header-container"></div>
          </div>
        </div>
        <div className="header-links-container">
          <div className="link">
            Features{" "}
            <svg
              fill="currentColor"
              height="8"
              viewBox="0 0 13 8"
              width="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path>
            </svg>
          </div>
          <div className="link">
            Solutions
            <svg
              fill="currentColor"
              height="8"
              viewBox="0 0 13 8"
              width="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path>
            </svg>
          </div>
          <div className="link">
            Plans
            <svg
              fill="currentColor"
              height="8"
              viewBox="0 0 13 8"
              width="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path>
            </svg>
          </div>
          <div className="link">Pricing</div>
          <div className="link">
            Resources
            <svg
              fill="currentColor"
              height="8"
              viewBox="0 0 13 8"
              width="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path>
            </svg>
          </div>
        </div>
        <div className="btn-header-container">
          <button className="btn-standard-login">Log in </button>
          <button className="btn-standard-signin">Create project</button>
        </div>
      </div>
    </div>
  );
};
