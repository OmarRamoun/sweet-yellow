import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:steve@mail.com">contact@omarramoun.com</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
