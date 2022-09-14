import React from "react";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <img
              style={{ width: 190, marginTop: -35, marginBottom: -25 }}
              src={require("../proLogo.png")}
              alt="My Awesome"
            />
            {/* <span className='navbar-brand'>Prescripty</span> */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
