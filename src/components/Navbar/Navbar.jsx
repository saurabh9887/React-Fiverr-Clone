import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setactive] = useState(false);
  const [Open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setactive(true) : setactive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Saurabh Ghodke",
    isSeller: true,
  };
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="Link">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!Open)}>
              <img src="./sg_img.jpeg" alt="" />
              <span>{currentUser?.username}</span>
              {Open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="Link" to="/mygigs" id="ops">
                        Gigs
                      </Link>
                      <Link className="Link" to="/add" id="ops">
                        Add new Gig
                      </Link>
                    </>
                  )}
                  <Link className="Link" to="/orders" id="ops">
                    Orders
                  </Link>
                  <Link className="Link" to="/messages" id="ops">
                    Messages
                  </Link>
                  <Link className="Link" to="" id="ops">
                    Log out
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="Link" to="/">
              Graphic & Design
            </Link>
            <Link className="Link" to="/">
              Video & Animation
            </Link>
            <Link className="Link" to="/">
              Writting & Translation
            </Link>
            <Link className="Link" to="/">
              AI Services
            </Link>
            <Link className="Link" to="/">
              Digital Marketing
            </Link>
            <Link className="Link" to="/">
              Music & Audio
            </Link>
            <Link className="Link" to="/">
              Programming & Tech
            </Link>
            <Link className="Link" to="/">
              Business
            </Link>
            <Link className="Link" to="/">
              LifeStyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
