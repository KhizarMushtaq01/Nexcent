import React from "react";
import "./How.css";

const How = () => {
  return (
    <>
      <div className="how">
        <div className="how-img">
          <img className="img-how" src="./public/icons/how.png" alt="" />
        </div>
        <div className="how-txt">
          <div className="design">
            How to design your site footer like 
          <div >we did</div>
          </div>
          <div className="how-para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis at
            quo dignissimos perspiciatis iure obcaecati nisi. At consequuntur
            dolore odit autem laudantium velit, nihil veritatis unde incidunt
            delectus reiciendis similique consectetur, architecto quidem
            blanditiis tempore, sequi officiis? Adipisci, inventore quisquam!
          </div>
          <div >
            <button className="how-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default How;
