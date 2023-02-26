import React, { useRef } from "react";
import Webcam from "react-webcam";
import "../index.css";

const Camera = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  };

  return (
    <div className="container">
      <div className="camera">
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      </div>
      <button className="button" onClick={capture}>
        Capture photo
      </button>
    </div>
  );
};

export default Camera;
