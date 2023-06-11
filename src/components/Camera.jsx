import React from "react";
import Webcam from "react-webcam";
import "../index.css";

const App = () => {
  const webcamRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = React.useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const retake = () => {
    setCapturedImage(null);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">React Camera App</h1>
      <div className="camera-container">
        {capturedImage ? (
          <img src={capturedImage} alt="Captured" className="captured-image" />
        ) : (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            mirrored={true} // Add this line to mirror the camera
            className="webcam"
          />
        )}
      </div>
      <div className="button-container">
        {!capturedImage && (
          <button onClick={capture} className="capture-button">
            Capture
          </button>
        )}
        {capturedImage && (
          <div>
            <button onClick={retake} className="retake-button">
              Retake
            </button>
            <a
              href={capturedImage}
              download="captured-image.jpg"
              className="download-link"
            >
              Download
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
