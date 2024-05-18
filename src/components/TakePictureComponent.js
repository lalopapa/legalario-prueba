import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import WebCamCaptureController from './webcam/WebCamCaptureController';

const TakePictureComponent = ({nextStep}) => {
  const [picture, setPicture] = useState(null);
  const [showCamera, setShowCamera] = useState(false)
  
  return (
    <div className='w-full'>
        <h2 className="text-center">3 de 4</h2>
        <h2 className="font-bold">Tomar fotografia</h2>
            
        <div className='h-[100svh] flex flex-col justify-center items-center'>
        
        { !showCamera ? 
            <div className='h-[100svh] flex flex-col  items-center'>
                
                <div className='p-4 flex flex-col gap-4'>
                    
                    <div className=''>
                        <button onClick={()=>setShowCamera(!showCamera)} className='hover:bg-[#ccc] text-[#ccc] hover:text-[#fff] border font-bold rounded p-2 w-[120px]'>Tomar foto</button>
                    </div>
                    <div className=''>
                        <button disabled={picture === null} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 w-[120px] disabled:bg-[#ccc]" onClick={nextStep}>Siguiente</button>
                    </div>
                </div>
                <div>
                    {picture && (
                        <div className='relative rounded-[50%] h-[300px] w-[200px] overflow-hidden border'>
                        <img src={picture} className="absolute top-0 left-0 w-full h-full object-cover" alt="Screenshot" />
                        </div>
                    )}
                </div>
            </div>
            :
            <WebCamCaptureController setShowCamera={setShowCamera} setPicture={setPicture}/> 
        }
        </div>
    </div>
  );
};

export default TakePictureComponent;