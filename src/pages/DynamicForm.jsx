import React, { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([{ id: 1, value: "" }]);

  // Handle adding a new field
  const addField = () => {
    setFields([...fields, { id: fields.length + 1, value: "" }]);
  };

  // Handle removing a field
  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  // Handle updating field values
  const handleChange = (id, value) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", fields);
  };

  return (
    <div className="p-5 px-[20%]">
      <h1 className="my-7  text-[30px]">Dynamic Form</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              class="block w-full mb-10 p-2 ps-4 outline-none text-[25px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`Input Field `}
              value={field.value}
              onChange={(e) => handleChange(field.id, e.target.value)}
              style={{ marginRight: "10px" }}
            />
            <button
              type="button"
              onClick={() => removeField(field.id)}
              disabled={fields.length === 1}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={addField}
        >
          Add Field
        </button>
        <button
          class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          type="submit"
          style={{ marginLeft: "10px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
