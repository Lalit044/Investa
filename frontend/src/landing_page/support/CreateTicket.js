import React from "react";

// Define different sets of topics for each column
const topics = [
  ["Account Opening", "Online Account Opening", "Offline Account Opening", "Company, Partnership and HUF Account Opening"],
  ["NRI Account Opening", "Charges at Investa", "Investa IDFC FIRST Bank 3-in-1 Account", "Getting Started"],
  ["Track Account Opening", "Track Segment Activation", "Intraday Margins", "Kite User Manual"]
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {/* Generate the columns dynamically */}
        {topics.map((topicList, index) => (
          <div className="col-4 p-5 mt-2 mb-2" key={index}>
            <h4>
              <i className="fa fa-plus-circle" aria-hidden="true"></i> {`Category ${index + 1}`}
            </h4>
            {topicList.map((topic, idx) => (
              <a
                href=""
                key={idx}
                style={{ textDecoration: "none", lineHeight: "2.5" }}
              >
                {topic}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
