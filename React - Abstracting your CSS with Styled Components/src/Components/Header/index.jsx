import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="image-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundary" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primary" href="https://google.com">
          Sair
        </a>
      </div>
    </div>
  );
};

export default Header;
