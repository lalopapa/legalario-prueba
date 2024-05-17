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
            <div className='rounded-[50%] h-[300px] w-[200px] sm:h-[200px] overflow-hidden border'>
                <div className='relative w-[400px]'>
                    <div className='absolute -left-[52%]'>
                        <Webcam
                            ref={webcamRef}
                            audio={false}
                            height={450}
                            width={600}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                        >
                        </Webcam>
                    </div>
                </div>
                
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