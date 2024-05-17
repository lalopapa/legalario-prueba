import React, { useRef, useState, useCallback } from 'react';
import UploadDocumentComponent from './components/UploadDocumentComponent';
import UploadImageController from './components/UploadImageController';
import TakePictureComponent from './components/TakePictureComponent';
import FinishProcessComponent from './components/FinishProcessComponent';
const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <UploadDocumentComponent nextStep={nextStep} />;
      case 2:
        return <UploadImageController nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <TakePictureComponent nextStep={nextStep} />;
      case 4:
          return <FinishProcessComponent />;
      default:
        return <UploadDocumentComponent nextStep={nextStep} />;
    }
  };

  return (   
    <div className="bg-white p-6 w-full h-[100svh]">
      {renderStep()}
    </div>
   
  );
};

export default App;