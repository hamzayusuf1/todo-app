import React, { useContext, useRef, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { ThemeContext } from "../../App";
import "./index.css";
import icon from "../../images/icon-cross.svg";
import CHECK from "../../images/icon-check.svg";

const DUMMY_DATA = [
  "Clean my room",
  "Buy groceries",
  "Complete coding project",
];

const Todo = ({ currentState }) => {
  const [arr, setArr] = useState([]);

  const { theme, tasks, setTasks } = useContext(ThemeContext);

  let allTasks = tasks;

  const onlyActive = allTasks.filter((task) => task.isCompleted === false);

  const onlyComplete = allTasks.filter((task) => task.isCompleted === true);

  // console.log(allTasks);
  // console.log(currentState);
  // console.log(onlyComplete);

  if (currentState === "Active") {
    allTasks = onlyActive;

    console.log("ACTIVE");
  } else if (currentState === "Completed") {
    allTasks = onlyComplete;
    console.log("COMPLETED");
  } else {
    allTasks = tasks;
  }

  const handleDelete = (id) => {
    const nonDeleted = tasks.filter((task) => {
      return task.id !== id;
    });

    console.log(nonDeleted);

    setTasks(nonDeleted);
  };

  const handleComplete = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(newTasks);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const newTasks = Array.from(allTasks);
    const [draggedItem] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, draggedItem);
    setArr(newTasks);
  };

  // const dragItem = useRef();
  // const itemPassed = useRef();

  // const dragStart = (e, place) => {
  //   dragItem.current = place;
  //   console.log(e.target.innerText);
  // };

  // const dragEnter = (e, place) => {
  //   itemPassed.current = place;
  //   console.log(e.target.innerText);
  // };

  // const dragEnd = (e) => {
  //   const copyTasks = [...tasks];
  //   const dragItemPos = copyTasks[dragItem.current];
  //   copyTasks.splice(dragItem.current, 1);
  //   copyTasks.splice(itemPassed.current, 0, dragItemPos);
  //   dragItem.current = null;
  //   itemPassed.current = null;
  //   setTasks(copyTasks);
  // };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="task-list">
        <Droppable droppableId="todos">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {allTasks.map((task, index) => {
                return (
                  <Draggable
                    key={index}
                    draggableId={index.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className={`todo-item-${theme}`}
                        // onDragStart={(e) => dragStart(e, index)}
                        // onDragEnter={(e) => dragEnter(e, index)}
                        // onDragEnd={(e) => dragEnd(e)}
                        // draggable
                        onClick={() => {
                          console.log(index);
                        }}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <div className="todo">
                          <div
                            className={`check check-${task.isCompleted}`}
                            onClick={() => {
                              handleComplete(task.id);
                            }}
                          >
                            {task.isCompleted ? <img src={CHECK} /> : ""}
                          </div>
                          <p className={`text-${task.isCompleted}`}>
                            {task.taskText}
                          </p>
                        </div>
                        <div className="icon">
                          <img
                            onClick={() => {
                              handleDelete(task.id);
                            }}
                            src={icon}
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Todo;
