import React from "react";

function AddTask({ tasklist, setTasklist, task, setTask }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page from refresh on button click
    if (task.id) {
      // call this when updating
      const date = new Date();
      const updatedTasklist = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updatedTasklist); // calling  the updates task function
      setTask({}); //clearimng tthe task in the input box
    } else {
      //call this on add of new task
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({}); //clearimng tthe task in the input box
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add task"
          name="task"
          autoComplete="off"
          maxLength="25"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}

export default AddTask;
