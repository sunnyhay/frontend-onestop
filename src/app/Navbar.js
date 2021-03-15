import React from "react";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>College Match Search</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Colleges</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
