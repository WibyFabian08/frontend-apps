import React from "react";
import { useHistory } from "react-router-dom";

import { ForbiddenIcon } from "../icons";

function Page404() {
  const history = useHistory();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ForbiddenIcon
        className="w-16 h-16 mt-8 text-primary-600"
      />
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-primary-400">
        404
      </h1>
      <p className="text-gray-700 dark:text-primary-600">
        Page not found. Check the address or{" "}
        <button
          onClick={() => history.goBack()}
          className="text-primary-600 hover:underline"
        >
          Go Back
        </button>

      </p>
    </div>
  );
}

export default Page404;
