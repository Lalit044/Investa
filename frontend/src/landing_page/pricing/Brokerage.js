import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* Left Section: Brokerage Calculator */}
        <div className="col-md-6 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2", fontSize: "14px" }}
            className="text-muted"
          >
            <li>
              <strong>Call & Trade / RMS Auto Square-off:</strong> ₹50 + GST per order.
            </li>
            <li>
              <strong>Digital Contract Notes:</strong> Sent via email at no cost.
            </li>
            <li>
              <strong>Physical Contract Notes:</strong> ₹20 per note + courier charges (if requested).
            </li>
            <li>
              <strong>NRI Account (Non-PIS):</strong> 0.5% or ₹100 per executed equity order (whichever is lower).
            </li>
            <li>
              <strong>NRI Account (PIS):</strong> 0.5% or ₹200 per executed equity order (whichever is lower).
            </li>
            <li>
              <strong>Debit Balance Orders:</strong> ₹40 per executed order (instead of ₹20).
            </li>
          </ul>
        </div>

        {/* Right Section: List of Charges */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center align-items-center">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
          <p className="text-muted mt-3" style={{ fontSize: "14px", maxWidth: "90%" }}>
            View the complete breakdown of all applicable charges including taxes, regulatory fees, and platform usage costs.
          </p>
          <a href="#" className="btn btn-outline-primary mt-2">View Details</a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
