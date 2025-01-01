import React from "react";
import "./Customers.css";

const Customers = () => {
  return (
    <>
      <div className="customers">
        <div className="cust-img">
          <img
            className="customers-img"
            src="./public/icons/customers.png"
            alt=""
          />
        </div>
        <div className="customers-txt">
          <div className="customers-para">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </div>
          <div className="tim">Tim Smith</div>
          <div className="cust-line">
            British Dragon Boat Racing Association
          </div>
          <div className="cust-logos">
            <img
              className="cust-logo cust-logo1"
              src="./public/icons/cust1.png"
              alt=""
            />
            <img
              className="cust-logo cust-logo2"
              src="./public/icons/cust2.png"
              alt=""
            />
            <img
              className="cust-logo cust-logo3"
              src="./public/icons/cust3.png"
              alt=""
            />
            <img className="cust-logo" src="./public/icons/cust4.png" alt="" />
            <img
              className="cust-logo cust-logo5"
              src="./public/icons/cust5.png"
              alt=""
            />
            <img className="cust-logo" src="./public/icons/cust6.png" alt="" />
            <div className="cust-meet">
              Meet all customers
              <img src="./public/icons/green-arrow.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
