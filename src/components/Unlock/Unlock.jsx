import React from "react";
import "./Unlock.css";

const Unlock = () => {
  return (
    <>
      <div className="unlock">
        
        <div className="img-unlock">
          <img className="unlock-img" src="./public/icons/unlock.png" alt="" />
        </div>
        
        <div className="unlock-text">
          <div className="unseen">
          <div >The unseen of spending three</div>
          <div>years at Pixelgrade</div>
          </div>
          
          <div className="unlock-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </div>
          <div>
          <button className="unlock-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unlock;
