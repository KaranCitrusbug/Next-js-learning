import React from "react";

import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center my-5">
      <ClipLoader size={50} color={"#ffffff"} loading={true} />
    </div>
  );
};

export default Loading;
