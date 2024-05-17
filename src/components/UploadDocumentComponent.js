import React, { useState, useRef } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

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
            console.log(e.target.result)
            
            setFilePreview(e.target.result); // e.target.result contains the data URL
        };

        reader.readAsDataURL(selectedFile);

        
    }
    const docs = [
        { uri: filePreview }, // Local File
    ];
    return(
        <div className="w-full">
            <h2 className="text-center">1 de 4</h2>
            <h2 className="font-bold">Subir documento PDF</h2>
            <div className="flex flex-col h-[calc(100svh-72px)] justify-center items-center">
                {filePreview !== null && <div className="flex w-full">
                    <iframe width={600} src={filePreview} title='SOME_TITLE' />
                </div>}
                
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
                    <div className=''>
                        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 w-[150px] disabled:bg-[#ccc]" onClick={nextStep}>Siguiente</button>
                    </div>
                </div>
            </div>    
        </div>
    )
}