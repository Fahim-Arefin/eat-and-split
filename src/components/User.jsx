import { RxCross2 } from "react-icons/rx";

function User({ user, deleteUser, handleSelectedUser, selectedUser, counter }) {
  const handleClick = (user) => {
    handleSelectedUser(user);
  };

  return (
    <div
      className="relative flex items-center space-x-6 md:space-x-8 lg:space-x-10 hover:bg-orange-100 cursor-pointer 
    py-7 px-8 md:px-16 rounded-lg transition-all duration-150"
    >
      <div>
        <img
          className="h-12 w-12 rounded-full"
          src={user.imgUrl}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-slate-700 text-xl font-bold">{user.name}</span>
        <span
          className={`text-lg ${
            user.balance === 0
              ? ` text-[#252422] `
              : user.balance < 0
              ? ` text-green-400`
              : ` text-red-500`
          }`}
        >
          {user.balance === 0
            ? `You and ${user.name} is even`
            : user.balance > 0
            ? `You owe ${user.name} ${user.balance}`
            : `${user.name} owes you ${Math.abs(user.balance)}`}
        </span>
      </div>
      <div>
        <button
          onClick={() => handleClick(user)}
          className="text-slate-700 text-lg font-bold bg-orange-400 px-3 py-1 rounded-md
            hover:bg-orange-500 active:bg-orange-400"
        >
          {selectedUser
            ? selectedUser.id === user.id && counter % 2 !== 0
              ? "Close"
              : "Select"
            : "Select"}
        </button>
      </div>
      <div
        onClick={() => deleteUser(user.id)}
        className="absolute top-1 md:top-2 right-1 md:right-3 h-6 w-6 rounded-full bg-gray-200 flex justify-center items-center 
       hover:bg-gray-300 transition-all duration-100"
      >
        <RxCross2 />
      </div>
    </div>
  );
}

export default User;
