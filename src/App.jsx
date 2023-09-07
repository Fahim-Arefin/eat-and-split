import { useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import BillForm from "./components/BillForm";

function App() {
  const [users, setUsers] = useState([
    { name: "Fahim", id: 0 },
    { name: "naim", id: 2 },
    { name: "Sagor", id: 3 },
    { name: "Abeer", id: 4 },
    { name: "Abeer", id: 4 },
    { name: "Abeer", id: 4 },
    { name: "Abeer", id: 4 },
    { name: "Abeer", id: 4 },
    { name: "Abeer", id: 4 },
    { name: "Abeer", id: 4 },
    { name: "Abeer", id: 4 },
    { name: "Abeer", id: 4 },
  ]);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-24">
      <UserList users={users} />
      <BillForm />
      <AddUser />
    </div>
  );
}

export default App;
