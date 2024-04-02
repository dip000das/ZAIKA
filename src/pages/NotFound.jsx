import React from "react";
import error404 from "../../public/images/error404.svg";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const { error, status, statusText } = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-5 pt-16 mt-10">
      <img className="w-1/4" src={error404} alt="Error 404 page not found" />
      <h3 className="text-3xl font-semibold">Oops!! Something went wrong...</h3>
      <h3 className="text-2xl">{status + ": " + statusText}</h3>
      <h3 className="text-2xl">{error.message}</h3>
    </div>
  );
};
export default NotFound;
