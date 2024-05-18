import React, { useState } from 'react';
import NavigationController from './components/NavigationController';
import UploadDocumentComponent from './components/UploadDocumentComponent';
import UploadImageController from './components/UploadImageController';
import TakePictureComponent from './components/TakePictureComponent';
import FinishProcessComponent from './components/FinishProcessComponent';
import FilesContext from './components/context/FilesContext';

/* 
  - Create FilesContext to handle files 
  - Renders NavigationController
  - Renders next steps
    + UploadDocumentComponent
    + UploadImageController
    + TakePictureComponent
      + WebCamCaptureController
    + FinishProcessComponent
*/

const App = () => {
  const filesDefaultValue = { // Giving default value to files status
    documento:{file:null, url:null},
    imagen:{file:null, url:null},
    foto:{file:null, url:null}
  }
  const [files, setFiles] = useState(filesDefaultValue);
  const [step, setStep] = useState(1);
  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return <UploadDocumentComponent />;
      case 2:
        return <UploadImageController />;
      case 3:
        return <TakePictureComponent />;
      case 4:
        return <FinishProcessComponent setStep={setStep} />; // Pass setStep to go back to step 1 when restart
      default:
        return <UploadDocumentComponent />;
    }
  };
  const updateFiles = (files) => {
    if(files === null){
      setFiles(filesDefaultValue);
    }else{
      setFiles(files);
    }
  };
  const StepCounter = ()=>{
    return <h2 className="text-center">{step} de 4</h2>
  } 
  return (   
    <div className="bg-white px-3 py-6 md:p-6 w-full h-[100svh]">
      <StepCounter/>
      <FilesContext.Provider value={{ files,updateFiles }}>
        <NavigationController step={step} nextStep={nextStep} prevStep={prevStep} />
        {renderStep()}
      </FilesContext.Provider>
    </div>
   
  );
};

export default App;