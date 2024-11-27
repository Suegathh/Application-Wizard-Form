import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalInformation = ({ onNext, defaultValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <br />
        <input
          {...register("name", { required: true })}
          className="input"
        />
        {errors.name && <p className="error">This field is required</p>}
      </div>
      <div>
        <label>Email</label>
        <br />
        <input
          {...register("email", { required: true })}
          className="input"
        />
        {errors.email && <p className="error">This field is required</p>}
      </div>
      <div>
        <label>Phone</label>
        <br />
        <input
          {...register("phone", { required: true })}
          className="input"
        />
        {errors.phone && <p className="error">This field is required</p>}
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Next</button>
    </form>
  );
};

export default PersonalInformation;
