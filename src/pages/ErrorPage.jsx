import React from "react";

import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className=" text-center h-screen flex  items-center flex-col">
      <h1 className=" font-bold text-4xl mt-20">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <span>
        <Link to="/">Go to main Page</Link>
      </span>
    </div>
  );
}

export default ErrorPage;
