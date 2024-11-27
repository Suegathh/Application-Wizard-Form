import React from 'react';

const ReviewSubmit = ({ data }) => {
  const handleSubmit = () => {
    console.log('Submitted Data:', data);
    alert('Form Submitted Successfully!');
  };

  return (
    <div>
      <h2>Review Your Information</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
        Submit
      </button>
    </div>
  );
};

export default ReviewSubmit;
