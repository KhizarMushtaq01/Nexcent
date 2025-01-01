import React from "react";
import "./Achievements.css";
const Achievements = () => {
  return (
    <>
      <div className="achievement">
        <div className="achievement-txt">
          <div className="helping">Helping a local</div>
          <div className="business">business reinvent itself</div>
          <div className="sml">
            We reached here with our hard work and dedication
          </div>
        </div>
        <div className="nmbrs">
          <div className="upper">
            <div className="one">
              <img
                className="achieve-img"
                src="./public/icons/one.png"
                alt=""
              />
              <div className="one-txt">
              <div className="name">2,245,341</div>
              <div className="numbers">Members</div>
              </div>
            </div>
            <div className="one">
              <img
                className="achieve-img"
                src="./public/icons/two.png"
                alt=""
              />
              <div className="one-txt">
              <div className="name">46,338</div>
              <div className="numbers">Clubs</div>
              </div>
            </div>
          </div>
          <div className="down">
            <div className="one">
              <img
                className="achieve-img"
                src="./public/icons/three.png"
                alt=""
              />
              <div className="one-txt">
              <div className="name">828,867</div>
              <div className="numbers">Event Bookings</div>
              </div>
            </div>
            <div className="one payments">
              <img
                className="achieve-img"
                src="./public/icons/four.png"
                alt=""
              />
              <div className="one-txt">
              <div className="name">1,926,436</div>
              <div className="numbers">Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
