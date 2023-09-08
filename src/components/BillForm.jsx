import { useState } from "react";

function BillForm({ updateBalance, selectedUser, setSelectedUser, counter }) {
  const [bill, setBill] = useState(0);
  const [myExpanse, setMyExpanse] = useState(0);
  const [selectorValue, setSelectorValue] = useState("You");

  const handleSubmit = (e) => {
    e.preventDefault();
    let balance;
    if (selectorValue.toLowerCase() === "you") {
      balance = -(bill - myExpanse);
    } else {
      balance = parseInt(myExpanse);
    }
    updateBalance(selectedUser.id, balance);
    setSelectedUser(null);
  };

  return (
    <>
      {selectedUser && counter % 2 !== 0 ? (
        <div className="bg-orange-100 px-4 py-12 lg:py-16 lg:px-12 xl:px-24 rounded-lg space-y-8 order-3 lg:order-2">
          <h1 className="text-3xl font-bold text-slate-700  uppercase">
            split a bill with {selectedUser ? selectedUser.name : "FRIEND"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-between items-center">
              <label className="font-bold text-slate-600 text-2xl">
                🔔 Bill value
              </label>
              <input
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="h-12 w-36 rounded-md text-center text-slate-700 text-lg border border-orange-200"
                type="number"
                min={0}
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="font-bold text-slate-600 text-2xl">
                ⏳ Your expanse
              </label>
              <input
                value={myExpanse}
                onChange={(e) => setMyExpanse(e.target.value)}
                className="h-12 w-36 rounded-md text-center text-slate-700 text-lg border border-orange-200"
                type="number"
                min={0}
                max={bill}
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="font-bold text-slate-600 text-2xl">
                🍔 {selectedUser.name}'s expense
              </label>
              <input
                value={bill - myExpanse}
                className="h-12 w-36 rounded-md text-center text-slate-700 text-lg border border-orange-200"
                type="number"
                disabled={true}
                min={0}
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="font-bold text-slate-600 text-2xl">
                🤑 Who is paying ?
              </label>
              <select
                value={selectorValue}
                onChange={(e) => setSelectorValue(e.target.value)}
                className="h-12 w-36 rounded-md text-slate-700 text-lg border border-orange-200 text-center"
              >
                <option value="you">You</option>
                {selectedUser && (
                  <option value={selectedUser.name}>{selectedUser.name}</option>
                )}
              </select>
            </div>
            <div className="text-end">
              <button
                className="text-slate-700 text-lg font-bold bg-orange-400 px-3 py-1 rounded-md
        hover:bg-orange-500 active:bg-orange-400"
              >
                Split bill
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-orange-100 flex justify-center items-center text-2xl text-slate-700 font-bold order-3 lg:order-2 rounded-lg">
          <span>💢 Please select a friend </span>
        </div>
      )}
    </>
  );
}

export default BillForm;
