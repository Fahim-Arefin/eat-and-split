import { useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import BillForm from "./components/BillForm";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-24">
      <UserList users={users} />
      <BillForm />
      <AddUser addUser={addUser} />
    </div>
  );
}

export default App;
