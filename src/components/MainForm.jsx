import React, { useState, useEffect } from 'react';
import FormLayout from './Form';
import PersonalInformation from './PersonalInfo';
import Address from './Address';
import UploadDocuments from './UploadDocu';
import ReviewSubmit from './ReviewSubmit';

const MainForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleToggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const steps = [
    <PersonalInformation onNext={handleNext} />,
    <Address onNext={handleNext} />,
    <UploadDocuments onNext={handleNext} />,
    <ReviewSubmit data={formData} />
  ];

  return (
    <FormLayout>
      <button 
        onClick={handleToggleMode} 
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded">
    
      </button>
      {steps[step]}
    </FormLayout>
  );
};

export default MainForm;
