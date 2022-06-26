import { useState } from "react";

function useTodoList() {
  const [isFetching] = useState(false);
  const [isError] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      completed: true,
      item: "Laundry",
    },
    {
      id: 2,
      completed: false,
      item: "Reading",
    },
    {
      id: 3,
      completed: false,
      item: "Drafting Blog Post",
    },
  ]);

  const handleItemClick = (item) => {
    const updatedTodoList = todoList.map((current) => {
      if (current.id === item.id) {
        current.completed = !current.completed;
      }
      return current;
    });

    setTodoList(updatedTodoList);
  };

  return {
    isFetching,
    isError,
    todoList,
    handleItemClick,
  };
}

export default useTodoList;
