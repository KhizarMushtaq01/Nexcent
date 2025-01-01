import React from 'react'
import "./ClientF.css"
const ClientF = () => {
  return (
    <>
    <div className="clients">
      <div className="client-combine">
      <div className="client-H">Our Clients</div>
      <div className="client-line">We have been working with some Fortune 500+ clients</div>
      </div>
      <div className="client-logos">
        <img className="client-logo" src="./public/icons/client1.png" alt="" />
        <img className="client-logo" src="./public/icons/client2.png" alt="" />
        <img className="client-logo client-logo3" src="./public/icons/client3.png" alt="" />
        <img className="client-logo" src="./public/icons/client4.png" alt="" />
        <img className="client-logo" src="./public/icons/client5.png" alt="" />
        <img className="client-logo" src="./public/icons/client6.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default ClientF

