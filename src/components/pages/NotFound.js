import React from "react";

function NotFound() {
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404 Page not Found</span>
      </h1>
      <p className="lead">
        Sorry, the page you are looking for does not exist!{" "}
      </p>
    </div>
  );
}

export default NotFound;
