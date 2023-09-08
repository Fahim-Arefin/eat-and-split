import { useEffect, useRef, useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import BillForm from "./components/BillForm";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [counter, setCounter] = useState(0);
  const mountCount = useRef(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setUsers([...data]);
    }
  }, []);

  useEffect(() => {
    // initially when mount or when reload, "users" will be empty
    // so mount and unmount time users will be empty
    // then we do not want to set localstorage, if set then prev data will be lost
    if (mountCount.current > 0) {
      localStorage.setItem("user", JSON.stringify(users));
    }
  }, [users]);

  const handleSelectedUser = (user) => {
    // weak logic
    setCounter(counter + 1);
    if (selectedUser?.id !== user.id) {
      setCounter((currentCounter) => {
        return currentCounter - 1;
      });
    }
    setSelectedUser(user);
  };

  const addUser = (user) => {
    setUsers([...users, user]);
    mountCount.current = 1;
  };

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers([...newUsers]);

    mountCount.current = 1;
  };

  const updateBalance = (id, balance) => {
    // const targetUser = users.find((user) => user.id === id);
    // targetUser.balance = targetUser.balance + balance;
    const updatedUser = users.map((user) => {
      if (user.id === id) {
        user.balance = user.balance + balance;
      }
      return user;
    });

    setUsers([...updatedUser]);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-24">
      <UserList
        users={users}
        deleteUser={deleteUser}
        selectedUser={selectedUser}
        handleSelectedUser={handleSelectedUser}
        counter={counter}
      />
      <BillForm
        // this key will reset the state of this component as it will mount newly
        key={Math.floor(Math.random() * 10000)}
        updateBalance={updateBalance}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        counter={counter}
        setCounter={setCounter}
      />
      <AddUser addUser={addUser} />
    </div>
  );
}

export default App;
