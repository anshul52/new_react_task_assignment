import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ToDoList from "./pages/ToDoList";
import Debounce from "./pages/Debounce";
import DynamicForm from "./pages/DynamicForm";

function App() {
  return (
    <>
      <div className="text-gray-300">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/task1" />} />
            <Route path="/task1" element={<ToDoList />} />
            <Route path="/task2" element={<Debounce />} />
            <Route path="/task3" element={<DynamicForm />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
