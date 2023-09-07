function AddUser() {
  return (
    <div className="bg-orange-100 p-4 md:px-6 md:py-4 lg:px-10 lg:py-6 rounded-md w-[90%] md:w-[80%] xl:w-[65%] mx-auto mt-12">
      <form className="space-y-6">
        <div className="flex justify-between items-center">
          <label className="text-xl text-slate-700">Friend name :</label>
          <input type="text" className="w-52 h-10 p-4 text-slate-700" />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-xl text-slate-700">img url :</label>
          <input type="text" className="w-52 h-10 p-4 text-slate-700" />
        </div>
        <div className="text-end">
          <button
            className="text-slate-700 text-lg font-bold bg-orange-400 px-3 py-1 rounded-md
            hover:bg-orange-500 active:bg-orange-400"
          >
            Add user
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
