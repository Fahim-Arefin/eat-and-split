function BillForm() {
  return (
    <div className="bg-orange-100 px-4 py-12 lg:py-16 lg:px-12 xl:px-24 rounded-lg space-y-8 order-3 lg:order-2">
      <h1 className="text-3xl font-bold text-slate-700  uppercase">
        split a bill with abeer
      </h1>
      <form className="space-y-8">
        <div className="flex justify-between items-center">
          <label className="font-bold text-slate-600 text-2xl" htmlFor="bill">
            🔔 Bill value
          </label>
          <input
            className="h-12 w-36 rounded-md text-center text-slate-700 text-lg border border-orange-200"
            type="number"
            name="bill"
            id="bill"
            min={0}
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="font-bold text-slate-600 text-2xl" htmlFor="bill">
            ⏳ Your expanse
          </label>
          <input
            className="h-12 w-36 rounded-md text-center text-slate-700 text-lg border border-orange-200"
            type="number"
            name="bill"
            id="bill"
            min={0}
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="font-bold text-slate-600 text-2xl" htmlFor="bill">
            🍔 Sarah's expense
          </label>
          <input
            className="h-12 w-36 rounded-md text-center text-slate-700 text-lg border border-orange-200"
            type="number"
            name="bill"
            id="bill"
            placeholder="100"
            disabled={true}
            min={0}
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="font-bold text-slate-600 text-2xl" htmlFor="bill">
            🤑 Who is paying ?
          </label>
          <select
            className="h-12 w-36 rounded-md text-slate-700 text-lg border border-orange-200 text-center"
            name="bill"
            id="bill"
          >
            <option value="you">You</option>
            <option value="Sarah">Sarah</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default BillForm;
