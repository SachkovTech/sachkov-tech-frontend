import { useState } from "react";
import "../index.css";

type Props = {
	value: string;
	onSquareClick: () => void;
};

function Square({ value, onSquareClick }: Props) {
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}

function Board() {
	const [xIsNext, setXIsNext] = useState<boolean>(true);
	const [squares, setSquares] = useState<string[]>(Array(9).fill(null));

	function hanldeClick(i: number) {
		if (squares[i]) {
			return;
		}

		const nextSquares = squares.slice();

		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	}

	return (
		<div className="flex flex-col">
			<div className="board-row">
				<Square value={squares[0]} onSquareClick={() => hanldeClick(0)} />
				<Square value={squares[1]} onSquareClick={() => hanldeClick(1)} />
				<Square value={squares[2]} onSquareClick={() => hanldeClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squares[3]} onSquareClick={() => hanldeClick(3)} />
				<Square value={squares[4]} onSquareClick={() => hanldeClick(4)} />
				<Square value={squares[5]} onSquareClick={() => hanldeClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squares[6]} onSquareClick={() => hanldeClick(6)} />
				<Square value={squares[7]} onSquareClick={() => hanldeClick(7)} />
				<Square value={squares[8]} onSquareClick={() => hanldeClick(8)} />
			</div>
		</div>
	);
}

export function TicTacToe() {
	return (
		<div className="flex items-center justify-center flex-1 w-full mt-52">
			<Board />
		</div>
	);
}
