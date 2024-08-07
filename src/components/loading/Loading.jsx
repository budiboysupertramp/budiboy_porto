import React from 'react'
import ClipLoader from "react-spinners/ClimbingBoxLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-neutral-900'>
      <ClipLoader
        color={"#fff"}
        loading={true}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading