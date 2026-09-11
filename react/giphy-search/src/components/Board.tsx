interface BoardProps {
  rows: number;
  columns: number;
}

export const Board = ({ rows, columns }: BoardProps) => {
  return (
    <div className="board">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {Array.from({ length: columns }).map((_, columnIndex) => (
            <div className="board-cell" key={`${rowIndex}-${columnIndex}`}>
              {rowIndex}, {columnIndex}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
