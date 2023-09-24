import React, { useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/GigCard/GigCard";
import { catalogis } from "../../data";

const gigs = () => {
  const [sort, setsort] = useState("sales");
  const [Open, setOpen] = useState(false);

  const reSort = (type) => {
    setsort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadCrumbs">FIVERR > GRAPHICS & DESIGN ></span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By: </span>
            <span className="sortType" onClick={() => setOpen(!Open)}>
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="../../../Public/img/down.png"
              alt=""
              onClick={() => setOpen(!Open)}
            />
            {Open && (
              <div className="rightmenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("CreatedAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {catalogis.map(gig=>(
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default gigs;
