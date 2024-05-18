import { useState, useRef,useContext } from "react";
import FileViewer from 'react-file-viewer';
import FilesContext from "./context/FilesContext";

export default function UploadDocumentComponent(){
    const { files, updateFiles} = useContext(FilesContext); // documento
    const fileInputRef = useRef(null);
    const [error, setError] = useState('')
    const handleUploadFile = ()=>{
        if(files.documento.file !== null){
            updateFiles({
                ...files, 
                documento:{
                    file:null,
                    url:null
                }
            });
        }
        fileInputRef.current.value = null;
        fileInputRef.current.click();
    }
    const handleFileChange = (event)=>{
        const selectedFile = event.target.files[0];
        const reader = new FileReader();
        if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')){
            reader.onloadend = (e) => {  // e.target.result contains the data URL
                updateFiles({
                    ...files, 
                    documento:{
                        file:selectedFile,
                        url:e.target.result
                    }
                });
                setError('');
            };
            reader.readAsDataURL(selectedFile);
        }else{
            setError('El archivo debe ser PDF o docx.');
        }
        
    }
    const getTypeFile = (file)=>{
        const typeArray = file.name.split("."); // splits string
        const type = typeArray.pop(); // Substract last element in the array
        return type
    }
    const CustomErrorComponent = ()=>{
        return(
            <div>
                <span className="font-bold text-red-500">Error. Intentalo de nuevo.</span>
            </div>
        )
    }
    return(
        <div className="w-full">
            <h2 className="font-bold text-center">Subir documento pdf o docx</h2>
            <div className="flex flex-col h-[calc(100svh-120px)] items-center">
                <div className='flex flex-col items-center p-4 gap-4'>
                    {error && <div>
                        <span className="font-bold text-red-500">
                            {error}
                        </span>
                    </div>}
                    <div >
                        <button onClick={handleUploadFile} className=' hover:bg-[#ccc] text-[#ccc] hover:text-[#fff] border font-bold rounded p-2 min-w-[150px]'>Subir documento</button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className='hidden'
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
                {files.documento.file && <div className="self-center h-[500px] max-w-[600px] w-full border pb-4 ">
                    <FileViewer
                        fileType={getTypeFile(files.documento.file)}
                        filePath={files.documento.url}
                        errorComponent={CustomErrorComponent}
                        onError={(e)=>{console.log(e, 'error in file-viewer')}}
                        />
                </div>}
            </div>    
        </div>
    )
}