import React from "react";

import logo from "../../components/images/Logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* <h2>Knowledge Cafe</h2> */}

      <nav className="header">
  <img src={logo} alt="" />

  <div>
    <a href="/shop">shop</a>
    <a href="/order">order</a>
    <a href="/login">login</a>
    <a href="/inventory">inventory</a>
    <a href="/login">
      <img src="https://cdn-icons-png.flaticon.com/512/905/905809.png?w=826&t=st=1680221214~exp=1680221814~hmac=d7a9a737a4c0b99b15c9044a109b61aeb85d543a41adeb66819b8509c7d504f9" alt="User" style={{  width: '30px', height: '30px', borderRadius: '50%', marginTop: '5px' }} />
    </a>
    <img src="/images/pie-chart.png" alt="" />
  </div>
</nav>


    </div>
  );
};
export default Header;
