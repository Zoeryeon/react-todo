// components / TodoAdd.jsx
import { useRef, useState } from 'react';

export default function TodoAdd({ todos, setTodos }) {
  const [txt, setTxt] = useState('');
  // 렌더링과 관련없이 id값을 저장하기 위해 ref사용
  const idRef = useRef(0);

  function handleAdd() {
    // 아무것도 안치고 add를 누를때 값이 들어가지 않게하기 위해
    // txt.trim() : 공백 제거 하여 스페이스바만 치고 누를때도 값이 들어가지 않게 함
    if (txt.trim()) {
      idRef.current++;
      // Enter치면 입력필드 초기화
      setTxt('');
      setTodos([
        ...todos,
        {
          id: idRef.current,
          text: txt,
          done: false,
        },
      ]);
    }
  }

  // Enter 누르면 list추가하기
  function handleEnter(e) {
    if (e.key === 'Enter') handleAdd();
  }

  return (
    <div className="flex my-[10px] gap-x-[10px]">
      <input
        type="text"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        className="w-full border-[#ddd] rounded-[4px] text-gray-600"
        onKeyUp={handleEnter}
      />
      <button
        type="button"
        onClick={handleAdd}
        className="bg-gray-600 text-white p-[10px] rounded-[4px]"
      >
        Add
      </button>
    </div>
  );
}
