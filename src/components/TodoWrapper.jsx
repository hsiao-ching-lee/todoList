import  './TodoWrapper.css'
export default function TodoWrapper() {
  return (
    <div className="todo-wrapper">
      <h1>代辦事項</h1>
      <input type="text" placeholder="輸入代辦事項" />
      <button>新增</button>
      <ul>
        <li>
          <input type="checkbox" />
          <span>買牛奶</span>
          <button>刪除</button>
        </li>
      </ul>
    </div>
  )
}