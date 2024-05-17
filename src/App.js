import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import WebCamCaptureController from './components/WebCamCaptureController';

const App = () => {
  const [picture, setPicture] = useState(null);
  const [showCamera, setShowCamera] = useState(false)
  return (
    <div className='h-[100svh] flex justify-center items-center'>
      { !showCamera ? 
        <div className='p-4 flex flex-col gap-4 border'>
          <div className=''>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 w-[120px]'>Subir archivo</button>
          </div>
          <div className=''>
            <button onClick={()=>setShowCamera(!showCamera)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 w-[120px]'>Tomar foto</button>
          </div>
        </div>
        :
        <WebCamCaptureController /> 
      }
    </div>
  );
};

export default App;