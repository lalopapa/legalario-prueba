import {useState,useContext} from "react";
import FilesContext from "./context/FilesContext";

export default function FinishProcessComponent({setStep}){
    const { updateFiles} = useContext(FilesContext);
    const [saved, setSaved] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const handleFinishRoutine = ()=>{
        setIsSaving(true); // set true to load spinner
        updateFiles(null); // Set files to default values; It can be rolled-back if there's an error saving
        setTimeout(() => {
            setIsSaving(false) // Hide spinner
            setSaved(!saved) // Hide button "Finalizar"
        }, 3000);
    }
    return(
        <div className="w-full">
            <h2 className="font-bold text-center">Enviar documentos</h2>
            <div className="flex h-[calc(100svh-120px)] justify-center ">
                {!saved ? <div className="p-4">
                    <button onClick={handleFinishRoutine} className="flex gap-1 justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 min-w-[150px" >
                        {isSaving && <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> }
                        {isSaving ? "Guardando":"Finalizar"}
                    </button>
                </div>:
                <div className="p-4">
                    <span>Se subieron exitosamente los documentos.</span>
                </div>}
            </div>
        </div>
    )
}