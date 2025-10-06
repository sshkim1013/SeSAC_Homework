import { useState } from "react";

export default function Form({ compareNumbers, isCorrect }) {
  const [inputNumber, setInputNumber] = useState(""); // 사용자 입력 숫자

  // 사용자의 제출 이벤트를 핸들링하는 함수
  function handleSubmit(event) {
    event.preventDefault();

    // 사용자가 입력한 숫자를 인자로 전달한 숫자 비교 함수를 실행한다.
    // 숫자로 변경 후 전달
    compareNumbers(Number(inputNumber));
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          // 입력 이벤트가 발생하면 사용자 입력 숫자 상태를 업데이트한다
          onChange={(event) => {
            setInputNumber(event["target"]["value"]); // event["target"]["value"] -> 항상 문자열을 반환
            console.log(event["target"]); // 디버깅용 코드
          }}
          value={inputNumber}
          type="text"
          min={1}
          max={100}
          disabled={isCorrect} // isCorrect 가 정답이면 버튼 비활성화
          required
        />
        <button disabled={isCorrect}>제출</button>
      </form>
    </div>
  );
}
