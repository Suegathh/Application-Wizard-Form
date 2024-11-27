import React, { useState } from 'react';

const UploadDocuments = ({ onNext }) => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePicker = () => {
    
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onNext({ file });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Upload Document</label>
        <input type="file" onChange={handleFileUpload} />
      </div>
      <div>
        <button type="button" onClick={handlePicker} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Select from Google Drive
        </button>
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Next</button>
    </form>
  );
};

export default UploadDocuments;
