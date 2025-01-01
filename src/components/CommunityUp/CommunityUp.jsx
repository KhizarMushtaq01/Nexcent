import React from "react";
import "./CommunityUp.css";

const CommunityUp = () => {
  return (
    <>
      <div className="communityUp">
        <div className="communityup-h">Caring is the new marketing</div>
        <div className="communityup-para">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </div>
        <div className="communityup-imgs">
          <img
            className="communityup-img"
            src="./public/icons/communityup1.png"
            alt=""
          />
          <img
            className="communityup-img"
            src="./public/icons/communityup2.png"
            alt=""
          />
          <img
            className="communityup-img"
            src="./public/icons/communityup3.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CommunityUp;
