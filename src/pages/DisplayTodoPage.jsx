import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../reducers/todoSlice";
import { useNavigate } from "react-router-dom";

function DisplayTodoPage() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const add = () => {
    history("/create");
  };
  function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <div>
      {todos.length === 0 ? (
        <div className="img">
          <div className="add">
            <h1>No Todos Yet</h1>
            <button onClick={add}>ADD TODOS</button>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1 className="todo-list">Todo List</h1>
          <div className="todos">
          <ul>
            {todos.map((todo) => (
              <li className="li" key={todo.id}>
                <div>{capitalizeFirstLetter(todo.text)}</div>
                <div className="list">
                  <button
                    className="delete"
                    onClick={() => handleDelete(todo.id)}
                    style={{ marginRight: "10px" }}
                  >
                    Delete
                  </button>
                  <Link to={`/update/${todo.id}`}>
                    <button className="update">Update</button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={add} className="center addMore">
             ADD MORE TODOS
          </button>
          </div>
         
        </div>
      )}
    </div>
  );
}

export default DisplayTodoPage;
