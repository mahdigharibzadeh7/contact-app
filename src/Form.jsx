function Form() {
  return (
    <form className="grid grid-cols-12 justify-items-center border-2 border-white rounded-xl mt-10 mx-64 px-10 py-5 shadow-2xl">
      <input
        className="col-span-6 border-2 my-2 w-[28rem] px-4 py-1 rounded-md focus:outline-blue-700 text-blue-700"
        type="text"
        placeholder="Name"
      />
      <input
        className="col-span-6 border-2 my-2 w-[28rem] px-4 py-1 rounded-md focus:outline-blue-700 text-blue-700"
        type="text"
        placeholder="Last Name"
      />
      <input
        className="col-span-6 border-2 my-2 w-[28rem] px-4 py-1 rounded-md focus:outline-blue-700 text-blue-700"
        type="email"
        placeholder="Email"
      />
      <input
        className="col-span-6 border-2 my-2 w-[28rem] px-4 py-1 rounded-md focus:outline-blue-700 text-blue-700"
        type="text"
        placeholder="Phone"
      />
      <div className="col-span-12 w-full px-3 my-5">
        <button
          className="bg-blue-700 text-white w-full py-2 border-2 border-blue-700 rounded-lg hover:text-blue-700 hover:bg-white"
          type="submit"
        >
          Add Contact
        </button>
      </div>
    </form>
  );
}

export default Form;
