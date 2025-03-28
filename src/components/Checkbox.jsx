//components / Checkbox.jsx
// 여기는 모양만 바꾸는 곳임!

export default function Checkbox({
  label,
  checked,
  onChange,
  name,
  className,
}) {
  return (
    // 공통스타일 쓰기 위해 checkbox 함
    <label className={`checkbox ${className}`}>
      {/* sr-only 사이 공백이 넓어져서 없애주는 것,
      input에만 value가 없고 checked를 쓴다 */}
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      {/* 말줄임 해주기 */}
      <span className="line-clamp-2">{label}</span>
    </label>
  );
}
