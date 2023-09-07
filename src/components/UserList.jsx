import User from "./User";

function UserList({ users }) {
  if (users.length === 0) {
    return (
      <div className="bg-orange-100 text-2xl text-slate-700 font-bold flex justify-center items-center h-[500px]">
        <span>⛔ No user available</span>
      </div>
    );
  }

  return (
    <div className="order-1 space-y-4 flex flex-col items-center py-12 h-[500px] overflow-y-scroll custom-scrollbar">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
