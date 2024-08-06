import { data } from "../mocks/data.json";
import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="mb-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
      >
        {enableMultiSelection ? "Disable" : "Enable"} MultiSelection
      </button>
      <div className="flex flex-col w-full max-w-2xl space-y-4">
        {data.map((dataItem) => (
          <div
            key={dataItem.id}
            className="p-4 bg-white shadow-md rounded-lg"
          >
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className="cursor-pointer flex items-center justify-between px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
              <h3 className="font-bold">{dataItem.question}</h3>
              <span className="text-lg">{selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? "-" : "+"}</span>
            </div>
            {(selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1) && (
              <div className="mt-2 px-4 py-2 bg-gray-50 rounded-md">
                {dataItem.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
