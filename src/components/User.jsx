function User({ user }) {
  return (
    <div
      className="flex items-center space-x-12 hover:bg-orange-100 cursor-pointer 
    py-4 px-8 rounded-md transition-all duration-150"
    >
      <div>
        <img
          className="h-12 w-12 rounded-full"
          src="https://i.pravatar.cc/300"
          alt="avatar"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-slate-700 text-xl font-bold">{user.name}</span>
        <span className="text-[#252422] text-lg">You owe naim 20$</span>
      </div>
      <div>
        <button
          className="text-slate-700 text-lg font-bold bg-orange-400 px-3 py-1 rounded-md
            hover:bg-orange-500 active:bg-orange-400"
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default User;
