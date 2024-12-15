const FilterButton = (props) => {
  let btns = document.querySelectorAll(".btn");

  Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", () => {
      let selected = document.getElementsByClassName("active");
      selected[0].className = selected[0].className.replace(" active", "");
      btn.className += " active";
    });
  });

  return (
    <div>
      <div className="todo-footer">
        <div>
          <span>{props.taskCount} items left</span>
        </div>
        <div className="status-wrapper">
          <ul onClick={props.statusHandler} id="status">
            <li className="btn active">All</li>
            <li className="btn">Active</li>
            <li className="btn">Completed</li>
          </ul>
        </div>
        <div>
          <span onClick={props.clearCompletedTasks}>Clear Completed</span>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
