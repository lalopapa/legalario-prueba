import { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const WebCamCaptureController = ({setShowCamera, updateFiles}) => {
    const webcamRef = useRef(null);
    const capturePicture = useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        updateFiles((files)=>{
            return {
                ...files, 
                foto:{
                    file:imageSrc,
                    url:imageSrc
                }
            }
        });
        setShowCamera(false)
    }, [webcamRef]);

    const videoConstraints = {
        facingMode: { exact: "user" }
    };
    return (
        <div className='flex flex-col gap-4 items-center '>
            <div className="py-4"><span className='font-bold '>Ajusta tu cara dentro del ovalo.</span></div>
            <div className='relative rounded-[50%] h-[300px] w-[200px] overflow-hidden border'>
                <Webcam
                    ref={webcamRef}
                    forceScreenshotSourceSize
                    className="absolute top-0 left-0 w-[200px] h-[300px] object-cover"
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                >
                </Webcam>
            </div>
            <div>
                <button className='rounded-full border h-[40px] w-[40px]' onClick={capturePicture}></button>
            </div>
        </div>
    );
};

export default WebCamCaptureController;