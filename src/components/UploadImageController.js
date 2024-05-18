import {useRef, useState, useContext} from "react";
import FilesContext from "./context/FilesContext";

export default function UploadImageController(){
    const { files, updateFiles} = useContext(FilesContext); // imagen
    const fileInputRef = useRef(null);
    const [error, setError] = useState('');
    function handleUploadFile(){
        // If there's a image's file, clean the state
        if(files.imagen.file !== null){
            updateFiles({
                ...files, 
                imagen:{
                    file:null,
                    url:null
                }
            });
        }
        fileInputRef.current.value = null;
        fileInputRef.current.click();
      }
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateFiles({
                    ...files, 
                    imagen:{
                        file:file,
                        url:reader.result
                    }
                });
                setError('');
            };
            reader.readAsDataURL(file);
        } else {
            setError('El archivo debe ser PNG o JPEG.');
        }
    };
    return(
        <div className="w-full">
            <h2 className="font-bold text-center">Subir imagen png o jpeg</h2>
            <div className="flex flex-col h-[calc(100svh-72px)]  items-center">
                <div className='flex flex-col items-center p-4 gap-4'>
                    <div className=''>
                        <button onClick={handleUploadFile} className=' hover:bg-[#ccc] text-[#ccc] hover:text-[#fff] border font-bold rounded p-2 w-[120px]'>Subir archivo</button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className='hidden'
                            onChange={handleFileChange}
                        />
                    </div>
                    {error && <div>
                        <span className="font-bold">
                            {error}
                        </span>
                    </div>}
                </div>
                <div>
                    {files.imagen.file && (
                        <div className="mt-4">
                            <img
                                src={files.imagen.url}
                                alt="Preview"
                                className="rounded max-w-full max-h-[300px]"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}