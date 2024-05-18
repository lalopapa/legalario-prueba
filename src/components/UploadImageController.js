import React, {useRef, useState} from "react";

export default function UploadImageController({ nextStep, prevStep }){
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [error, setError] = useState('');
    function handleUploadFile(){
        if(imagePreview !== null){
            setImagePreview(null)
        }
        fileInputRef.current.value = null;
        fileInputRef.current.click();
      }
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setError('');
        };
        reader.readAsDataURL(file);
        } else {
        setError('El archivo debe ser PNG o JPEG.');
        }
    };
    return(
        <div className="w-full">
            <h2 className="text-center">2 de 4</h2>
            <div className="flex justify-between">
                <div>
                    <span>Atras</span>
                </div>
                <div className=''>
                        <button disabled={imagePreview === null} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 w-[120px] disabled:bg-[#ccc]" onClick={nextStep}>Siguiente</button>
                </div>
            </div>
            <h2 className="font-bold">Subir imagen png o jpeg</h2>
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
                    {imagePreview && (
                        <div className="mt-4">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="rounded shadow-md"
                            style={{ maxWidth: '100%', maxHeight: '300px' }}
                        />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}