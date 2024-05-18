import { useContext } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import FilesContext from "./context/FilesContext";

export default function NavigationController({step, nextStep, prevStep}){
    const { files } = useContext(FilesContext);
    const filesKey = Object.keys(files) // Return the keys of files [document,imagen,...]
    /*Default key, when there's a step (component) that does't work with files */
    /*Last step dont upload files, but it could fetch the data */
    const defaultKey = filesKey[0]; 
    const keyCurrentStep = filesKey[step-1] || defaultKey;
    /*When last step (4), keyCurrentStep is defaultKey */
    const isSiguenteEnabled = files[keyCurrentStep].file !== null; 
    /* Always check for the defaultKey and when step is grater than 1; so in the fist step is never visible */
    const isAtrasVisible = step > 1 && files[defaultKey].file !== null;
    const isSiguienteVisible = step < 4 ? true:false;
    
    return(
        <div className="flex justify-between min-h-[24px]"> {/* Set to 24px to always occupy a space regardless visible or not */}
            <div className='w-[102px] '>
                {isAtrasVisible  && <button onClick={prevStep} className="flex gap-x-1 justify-center items-center text-blue-500 disabled:text-[#ccc] font-bold rounded ">
                    <ArrowLeftIcon className="size-6 " />
                    <span className="">Atras</span>
                </button> }
            </div>
            <div className='w-[102px]'>
                {isSiguienteVisible  && <button disabled={!isSiguenteEnabled} onClick={nextStep} className="flex gap-x-1 justify-center items-center text-blue-500 disabled:text-[#ccc] disabled:cursor-not-allowed font-bold rounded ">
                    <span className="">Siguiente</span>
                    <ArrowRightIcon className="size-6 " />
                </button> }
            </div>
        </div>
    )
}