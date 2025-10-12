export default function ResultRow({ expression, value }) {
  return (
    <div className="result-row">
      {expression ? `${expression}` : value}
    </div>
  );
}