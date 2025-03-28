// components / TodoCount.jsx

export default function TodoCount({ todos }) {
  // true인 경우에는 비교하지 않아도 됨 (todo.done === true)
  const done = todos.filter((todo) => todo.done).length;

  return (
    <div className="text-[14px] text-gray-600 mt-[10px]">
      완료: {done} / 할 일: {todos.length}
    </div>
  );
}
