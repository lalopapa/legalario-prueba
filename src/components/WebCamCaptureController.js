import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const WebCamCaptureController = ({setShowCamera, setPicture}) => {
    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);

    const capturePicture = useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setPicture(imageSrc);
        setShowCamera(false)
    }, [webcamRef]);

    const videoConstraints = {
        //width: 540,
        facingMode: { exact: "user" }
    };
    return (
        <div className='flex flex-col gap-4 items-center'>
            <div className='relative rounded-[50%] h-[300px] w-64 sm:h-[200px] overflow-hidden border'>
                <Webcam
                    ref={webcamRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    audio={false}
                    
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                >
                </Webcam>
            </div>
            <div>
                <button className='rounded-full border h-[40px] w-[40px]' onClick={capturePicture}></button>
                {/*<button onClick={() => setUrl(null)}>Refresh</button>
                {url && (
                    <div>
                    <img src={url} alt="Screenshot" />
                    </div>
                )}*/}
            </div>
        </div>
        
    );
};

export default WebCamCaptureController;