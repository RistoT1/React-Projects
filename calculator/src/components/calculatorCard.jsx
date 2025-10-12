import InputButtons from "./inputButtons";
import ResultRow from "./resultRow";

export default function CalculatorCard({
  curValue,
  expression,
  onNumberClick,
  onMethodClick,
  onEqualClick,
  onClearClick
}) {
  return (
    <div className="calculator-card">
      <ResultRow expression={expression} value={curValue} />
      <InputButtons
        onNumberClick={onNumberClick}
        onMethodClick={onMethodClick}
        onEqualClick={onEqualClick}
        onClearClick={onClearClick}
      />
    </div>
  );
}