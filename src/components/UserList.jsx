import User from "./User";

function UserList({ users }) {
  return (
    <div
      className=" space-y-4 flex flex-col items-center py-12 h-[500px] overflow-y-scroll custom-scrollbar
      "
    >
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
