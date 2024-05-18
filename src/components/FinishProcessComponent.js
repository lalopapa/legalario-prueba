import {useState,useContext} from "react";
import FilesContext from "./context/FilesContext";

export default function FinishProcessComponent(){
    const { updateFiles} = useContext(FilesContext);
    const [saved, setSaved] = useState(false);
    const handleFinishRoutine = ()=>{
        setSaved(!saved)
        updateFiles(null)
    }
    return(
        <div className="w-full">
            
            <div className="flex h-[calc(100svh-24px)] justify-center ">
                {!saved ? <div className="p-4">
                    <button onClick={handleFinishRoutine} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 w-[120px" >Finalizar</button>
                </div>:
                <div className="p-4">
                    <span>Se subieron exitosamente los documentos.</span>
                </div>}
            </div>
        </div>
    )
}