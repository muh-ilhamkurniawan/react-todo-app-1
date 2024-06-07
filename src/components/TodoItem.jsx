import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div className="border-2 h-16 border-gray-200 text-lg flex justify-center items-center px-5 my-3 bg-white shadow-lg rounded-lg">
      <p>{todo.title}</p>
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
  },
};

export default TodoItem;
