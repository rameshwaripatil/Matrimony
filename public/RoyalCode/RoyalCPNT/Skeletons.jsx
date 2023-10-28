import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Skeletons() {
  return (
    <>
      <div className="card skeleton">
        <Skeleton height={400} width={"100%"} />
      </div>
    </>
  );
}

export default Skeletons;
