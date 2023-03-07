import React from 'react'

export default function SearchForm() {
  return (
    <main>
      <h1 className='text-3xl text-center mt-6 font-bold'>
        Discover Your Luxe Living Space
      </h1>
      <br></br>
      <form>
        <p className='text-lg mt-6 inline px-4 font-semibold'>
          Area of Interest
        </p>
        <input
          type='text'
          id='name'
          placeholder='Enter location'
          maxLength='32'
          minLength='10'
          required
          className='w-mid px-7 py-4 text-md text-gray-700 bg-white border border-black-300 rounded transition duration-150 ease-in-out '
        ></input>
      </form>
    </main>
  );
}
