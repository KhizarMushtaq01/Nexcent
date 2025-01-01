import React from "react";
import "./Community.css";

const Community = () => {
  return (
    <>
      <div className="community">
        <div className="community-txt">
          <div className="entire">Manage your entire community</div>
          <div className="single">in a single system</div>
          <div className="suitable">Who is Nexcent suitable for?</div>
        </div>
        <div className="community-cards">
          <div className="community-card">
            <img className="community-img" src="./public/icons/membership.png" alt="" />
            <div className="card-h">
            <div >Membership</div>
            <div >Organisation</div>
            </div>
            
            <div className="card-para">
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>
          <div className="community-card">
            <img className="community-img" src="./public/icons/association.png" alt="" />
            <div className="card-h">
            <div >National </div>
            <div >Association</div>
            </div>
            
            <div className="card-para">
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>
          <div className="community-card">
            <img className="community-img" src="./public/icons/clubs.png" alt="" />
            <div className="card-h">
            <div >Clubs and</div>
            <div >Groups</div>
            </div>
            
            <div className="card-para">
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
