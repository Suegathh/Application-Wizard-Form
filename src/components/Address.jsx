import React from 'react';
import { useForm } from 'react-hook-form';

const Address = ({ onNext, defaultValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Street</label>
        <br />
        <input
          {...register("street", { required: true })}
          className="input"
        />
        {errors.street && <p className="error">This field is required</p>}
      </div>
      <div>
        <label>City</label>
        <br />
        <input
          {...register("city", { required: true })}
          className="input"
        />
        {errors.city && <p className="error">This field is required</p>}
      </div>
      <div>
        <label>State</label>
        <br />
        <input
          {...register("state", { required: true })}
          className="input"
        />
        {errors.state && <p className="error">This field is required</p>}
      </div>
      <div>
        <label>Postal Code</label>
        <br />
        <input
          {...register("postalCode", { required: true })}
          className="input"
        />
        {errors.postalCode && <p className="error">This field is required</p>}
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Next</button>
    </form>
  );
};

export default Address;
