import React from 'react';

const FormLayout = ({ children }) => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="border p-4 rounded">{children}</div>
    </div>
  );
};

export default FormLayout;
