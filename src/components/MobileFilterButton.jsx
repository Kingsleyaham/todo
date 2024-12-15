const MobileFilterButton = (props) => {
  let btns = document.querySelectorAll(".btn");

  Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", () => {
      let selected = document.getElementsByClassName("active");
      selected[0].className = selected[0].className.replace(" active", "");
      btn.className += " active";
    });
  });
  return (
    <div className="todo-status">
      <ul onClick={props.statusHandler} id="status">
        <li id="active">All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </div>
  );
};

export default MobileFilterButton;
