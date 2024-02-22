import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderBread = () => {
  let location = useLocation();

  const regex = /\/([^\/]+)\/?/;

  // Execute the regex pattern on the URL
  const match = location.pathname.match(regex);

  let extractedPaths = [];

  if (match) {
    extractedPaths = match[0].split("/").filter((path) => path !== ""); // Split and filter out empty paths
  } else {
    console.log("Substring not found");
  }

  // Exclude the current page location and IDs from the breadcrumb links
  const paths = extractedPaths.filter(
    (path) => path !== location.pathname && !path.match(/^\d+$/)
  );

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: 300 }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Our Shop
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to={"/"}>Home</Link>
            </p>
            {paths.map((path, index) => (
              <React.Fragment key={index}>
                <p className="m-0 px-2">-</p>
                <p className="m-0">
                  {index === paths.length - 1 ? (
                    <span>{path}</span>
                  ) : (
                    <Link to={`/${path}`}>{path}</Link>
                  )}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default HeaderBread;
