import { useState } from "react";

function AddUser({ addUser }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const imgUrl = "https://i.pravatar.cc/300";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please add a name");
    } else {
      setName("");
      setError("");
      addUser({
        name,
        imgUrl,
        id: Math.floor(Math.random() * 100000),
        balance: 0,
      });
    }
  };

  return (
    <div className="order-2 lg:order-3 bg-orange-100 p-4 md:px-6 md:py-4 lg:px-10 lg:py-6 rounded-md w-[90%] md:w-[80%] xl:w-[65%] mx-auto mt-12">
      {showForm ? (
        <div className="space-y-5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-xl text-slate-700">👭 Friend name :</label>
              <div className="flex flex-col items-center space-y-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-52 h-10 p-4 text-slate-700 rounded-md"
                />
                {error && <div className="text-sm text-red-600">{error}</div>}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <label className="text-xl text-slate-700">🔳 img url :</label>
              <input
                type="text"
                className="w-52 h-10 p-4 text-slate-700 rounded-md"
                value={imgUrl}
              />
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
          <div className="text-end">
            <button
              onClick={() => setShowForm(false)}
              className="text-slate-700 text-lg font-bold border border-orange-400 px-3 py-1 rounded-md
        hover:bg-orange-500 active:bg-orange-400"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-around text-lg text-slate-700 font-bold">
          <div>
            <span>Click to open the form</span>
          </div>
          <div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="text-slate-700 text-lg font-bold bg-orange-400 px-3 py-1 rounded-md
            hover:bg-orange-500 active:bg-orange-400"
            >
              Add user
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddUser;
