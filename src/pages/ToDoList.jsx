import React, { useState } from "react";

const ToDoList = () => {
  const [newTask, setnewTask] = useState("");
  const [list, setlist] = useState([]);

  const removeTask = (idx) => {
    setlist(list?.filter((_, i) => i !== idx));
  };

  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (newTask === "") return;
    if (newTask.trim()) {
      if (editIndex !== null) {
        // Update newTask if in edit mode
        const updatedTodos = list.map((todo, index) =>
          index === editIndex ? { ...todo, text: newTask } : todo
        );
        setlist(updatedTodos);
        setEditIndex(null);
      } else {
        // Add new newTask
        setlist([...list, { text: newTask, completed: false }]);
      }
      setnewTask("");
    }
  };

  const editTask = (index) => {
    setnewTask(list[index].text);
    setEditIndex(index);
  };

  const toggleComplete = (index) => {
    setlist(
      list.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="p-5 px-[20%]">
      {/* searchbox */}
      <form class="max-w-md mx-auto my-[50px]">
        <div class="relative">
          <input
            type="text"
            id="default-search"
            onChange={(e) => setnewTask(e.target.value)}
            class="block w-full p-2 ps-4 outline-none text-[25px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add new task"
            required
            value={newTask}
          />
          <button
            onClick={addTask}
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </form>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Task List
              </th>
              <th scope="col" class="px-6 py-3">
                Edit
              </th>
              <th scope="col" class="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item, idx) => {
              return (
                <>
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      onClick={() => toggleComplete(idx)}
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {idx + 1}.{") "}
                      {item.text}
                    </th>
                    <td
                      class="px-6 py-4 text-blue-500 cursor-pointer"
                      onClick={() => editTask(idx)}
                    >
                      Edit
                    </td>

                    <td class="px-6 py-4">
                      <a
                        onClick={() => removeTask(idx)}
                        href="#"
                        class="font-medium text-red-600 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDoList;
