export default function RandomNumber({ randomNumber, isCorrect }) {
  if (!isCorrect) {
    return null;
  }

  return (
    <div>
      <p>정답 숫자: {randomNumber}</p>
    </div>
  );
}
