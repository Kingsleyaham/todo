import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import deleteIcon from "../assets/img/icon-cross.svg";
import FilterButton from "./FilterButton";
const TodoList = (props) => {
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(props.filteredTask);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    props.setFilteredTask(items);
  }
  return (
    <div className="todo-list">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="lists">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {props.filteredTask.map((task) => (
                <Draggable key={task.id} draggableId={task.id} index={props.filteredTask.indexOf(task)}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className={`todo ${task.completed ? "completed" : ""}`}
                      role="list"
                      key={task.id}
                    >
                      <label className="checkbox-wrapper" htmlFor={task.id}>
                        <input
                          type="checkbox"
                          id={task.id}
                          defaultChecked={task.completed}
                          onChange={() => props.toggleTaskCompleted(task.id)}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <p className="todo-content">{task.name} </p>
                      <img
                        src={deleteIcon}
                        alt="Delete Icon"
                        onClick={() => props.deleteTask(task.id)}
                        className="delete-btn"
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <FilterButton
        taskCount={props.taskCount}
        clearCompletedTasks={props.clearCompletedTasks}
        statusHandler={props.statusHandler}
      />
    </div>
  );
};

export default TodoList;
