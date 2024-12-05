import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function Debounce() {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedInput) {
      console.log(`Fetching data for: ${debouncedInput}`);
      //We can Add API call or other logic here
    }
  }, [debouncedInput]);

  return (
    <div className="p-5 px-[20%]">
      <h1 className="my-7  text-[30px]"> useDebounce Custom Hook</h1>
      <input
        type="text"
        value={input}
        class="block w-full mb-10 p-2 ps-4 outline-none text-[25px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type to search..."
      />
      <p>Debounced Value: {debouncedInput}</p>
    </div>
  );
}

export default Debounce;
