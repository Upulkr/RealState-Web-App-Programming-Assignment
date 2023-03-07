import React from "react";
import { useState } from "react";
import image from './images/home.jpg'

export default function SearchForm() {
  const initialValues = {
    areaOfInterest: "",
    minimumPrice: "",
    maximumPrice: "",
    propertyType: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  function handleChange(e) {
    setFormValues((prevSate) => ({
      ...prevSate,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValues);
    if (formValues) {
      alert("Form was submitted successfully");
    }
    setFormValues(initialValues);
  }

  return (
    <div class='flex flex-col md:flex-row transition-x-10 item justify-center min-h-screen transition-y-1 bg-gradient-to-r from-cyan-500 bg-slate-600'>
      <div class='h-32 md:h-auto md:w-1/2'>
        <img class='object-cover w-full h-full' src={image} alt='img' />
      </div>
      <main className='max-w-md px-2 mx-auto  '>
        <h1 className='text-3xl text-center mt-6 font-light text-white-800 font-serif hover:subpixel-antialiased'>
          Discover Your Luxe Living Space
        </h1>
        <br></br>
        <form onSubmit={handleSubmit}>
          <p className='text-lg mt-6 font-semibold '>Area of Interest</p>
          <input
            type='text'
            name='areaOfInterest'
            placeholder='Enter location'
            onChange={handleChange}
            required
            value={formValues.areaOfInterest}
            className='w-mid px-4 py-2 text-xl text-gray-700 zinc-500 border zinc-500 rounded transition duration-150 ease-in-out focus:text-gray-700bg-slate-600 focus:border-slate-600 mb-6'
          ></input>
          <div className=''>
            <div>
              <p className='text-lg mt-6 font-semibold'>Minimum Price $</p>
              <div className=' '>
                <input
                  type='number'
                  name='minimumPrice'
                  min='50'
                  required
                  value={formValues.minimumPrice}
                  onChange={handleChange}
                  className='w-mid px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
                ></input>
              </div>
              <div>
                <p className='text-lg mt-6 font-semibold'>Maximum Price $</p>
                <div className='  '>
                  <input
                    type='number'
                    name='maximumPrice'
                    max='4000000000'
                    required
                    value={formValues.maximumPrice}
                    onChange={handleChange}
                    className='w-mid px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
                  ></input>
                </div>
              </div>
              <div>
                <p className='text-lg mt-6 font-semibold'>Property Type</p>
                <select
                  required
                  name='propertyType'
                  placeholder='House,Apartment,Condo'
                  value={formValues.propertyType}
                  onChange={handleChange}
                  className='w-mid px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
                >
                  <>
                    <option className=''></option>
                    <option className=''>House</option>
                    <option className=''>Apartment</option>
                    <option className=''>Condo</option>
                  </>
                </select>
              </div>
              <button className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
