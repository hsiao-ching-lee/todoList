import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useRef, useEffect } from "react";

export default function Todo({
  todos,
  handleDelete,
  handleEdit,
  handleChange,
  editId,
  handleComplete
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (editId !== null) {
      inputRef.current.focus();
    }
  }, [editId]);

  const sortedTodos = [...todos].sort((a, b) => a.isCompleted - b.isCompleted);

  return (
    <div className="todo-list">
      {sortedTodos.map((item) => (
        <div key={item.id} className="todo-item">
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => handleComplete(item.id)}
          />
          <input
            ref={editId === item.id ? inputRef : null}
            value={item.todo}
            readOnly={editId !== item.id}
            type="text"
            onChange={(e) => {
              handleChange(item.id, e.target.value);
            }}
            class={`${editId === item.id ? "edit" : "read"} ${item.isCompleted ? 'isCompleted' : ''}`}
          />
          <div className="btns">
            {editId === item.id ? (
              <button onClick={() => handleEdit(null)}>完成</button>
            ) : (
              <>
                <button onClick={() => handleEdit(item.id)}>
                  <CiEdit />
                </button>
                <button onClick={() => handleDelete(item.id)}>
                  <MdDelete />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
