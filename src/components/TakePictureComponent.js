import React, { useState, useContext } from 'react';
import WebCamCaptureController from './webcam/WebCamCaptureController';
import FilesContext from "./context/FilesContext";

const TakePictureComponent = () => {
    const { files, updateFiles } = useContext(FilesContext); // foto
    const [showCamera, setShowCamera] = useState(false)
  
  return (
    <div className='w-full'>
        <h2 className="font-bold text-center">Tomar fotografía</h2>
        <div className='h-[calc(100svh-120px)] flex flex-col  items-center pb-4'>
        { !showCamera ? 
            <div className='flex flex-col  items-center'>
                <div className='p-4 flex flex-col gap-4'>
                    <div className=''>
                        <button onClick={()=>setShowCamera(!showCamera)} className='hover:bg-[#ccc] text-[#ccc] hover:text-[#fff] border font-bold rounded p-2 min-w-[150px]'>Tomar foto</button>
                    </div>
                </div>
                <div>
                    {files.foto.file && (
                        <div className='relative rounded-[50%] h-[300px] w-[200px] overflow-hidden border'>
                        <img src={files.foto.file} className="absolute top-0 left-0 w-full h-full object-cover" alt="Screenshot" />
                        </div>
                    )}
                </div>
            </div>
            :
            <WebCamCaptureController setShowCamera={setShowCamera} updateFiles={updateFiles}/> 
        }
        </div>
    </div>
  );
};

export default TakePictureComponent;