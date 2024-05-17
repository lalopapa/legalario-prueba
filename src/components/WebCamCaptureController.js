import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const WebCamCaptureController = () => {
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
        <div className='rounded-full relative h-[480px] w-full sm:w-[200px] sm:h-[200px] overflow-hidden border'>
            <div className='absolute top-4'>
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    height={500}
                    width={400}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                >
                </Webcam>
            </div>
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

export default WebCamCaptureController;