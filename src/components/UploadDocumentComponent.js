import React, { useState, useRef } from "react";
//import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import FileViewer from 'react-file-viewer';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

export default function UploadDocumentComponent({ nextStep }){
    const fileInputRef = useRef(null);
    const [error, setError] = useState('')
    const [filePreview, setFilePreview] = useState(null)
    const handleUploadFile = ()=>{
        fileInputRef.current.click();
    }
    const handleFileChange = (event)=>{
        const selectedFile = event.target.files[0];
        //const typeIndex = selectedFile.lastIndexOf('.');
        const typeArray = selectedFile.name.split(".");
        const type = typeArray.pop();
        //setUploadedFile({ type:type, file: })
        //console.log(selectedFile)

        //const selectedFile = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            //console.log(e.target.result)
            
            setFilePreview({type, file:e.target.result }); // e.target.result contains the data URL
        };

        reader.readAsDataURL(selectedFile);
        
    }
    const docs = [
        { uri: filePreview }, // Local File
    ];
    return(
        <div className="w-full">
            <h2 className="text-center">1 de 4</h2>
            <div className="flex justify-between">
                <div>
                    <span>Atras</span>
                </div>
                <div className=''>
                    <ArrowRightCircleIcon className="size-6 text-blue-500" />
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 w-[150px] disabled:bg-[#ccc]" onClick={nextStep}>Siguiente</button>
                </div>
            </div>
            <h2 className="font-bold text-center">Subir documento</h2>

            <div className="flex flex-col h-[calc(100svh-72px)] justify-center items-center">
                <div className='flex flex-col items-center p-4 gap-4'>
                    {error && <div>
                        <span className="font-bold">
                            {error}
                        </span>
                    </div>}
                    <div className=''>
                        <button onClick={handleUploadFile} className=' hover:bg-[#ccc] text-[#ccc] hover:text-[#fff] border font-bold rounded p-2 w-[150px]'>Subir documento</button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className='hidden'
                            onChange={handleFileChange}
                        />
                    </div>
                    
                </div>

                {filePreview !== null && <div className="self-center h-[500px] w-[400px] border">
                    <FileViewer
                        key={1}
                        fileType={filePreview.type}
                        filePath={filePreview.file}
                        //errorComponent={CustomErrorComponent}
                        onError={(e)=>{console.log(e, 'error in file-viewer')}}
                        />
                </div>}
                
                
            </div>    
        </div>
    )
}