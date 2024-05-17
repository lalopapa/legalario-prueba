import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const App = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const videoConstraints = {
    //width: 540,
    facingMode: { exact: "user" }
  };
  return (
    <div>
      <h3>Camera Feed</h3>
      <Webcam
        ref={webcamRef}
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      >
       
      </Webcam>
      <button onClick={capturePhoto}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button>
      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
    </div>
  );
};

export default App;