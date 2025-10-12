export default function InputButtons({
    onNumberClick,
    onMethodClick,
    onEqualClick,
    onClearClick
}) {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C', 'git'
    ];

    return (
        <div className="input-buttons">
            {buttons.map((btn, index) => {
                if (btn === '=') return <button key={index} onClick={onEqualClick}>=</button>;
                if (btn === 'C') return <button key={index} onClick={onClearClick}>C</button>;
                if (['+', '-', '*', '/'].includes(btn)) return (
                    <button key={index} onClick={() => onMethodClick(btn)}>{btn}</button>
                );
                if (btn === 'git') return (
                    <button key={index} onClick={() => window.open('https://github.com/RistoT1', '_blank', 'noopener,noreferrer')}>
                        <i className="fa-brands fa-github"></i>
                    </button>
                );
                return <button key={index} onClick={() => onNumberClick(btn)}>{btn}</button>;
            })}
        </div>
    );
}