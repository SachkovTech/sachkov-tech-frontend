import axios from "axios";
import { useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/RootLayout";
import { TicTacToe } from "../pages/TicTacToe";

function Issues() {
	const [info, setInfo] = useState("");

	useEffect(() => {
		axios
			.get<string>("http://localhost:8080/api/info")
			.then((res) => setInfo(res.data));
	}, []);

	return <div className="text-xl">{info}</div>;
}

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/issues",
				element: <Issues />,
			},
			{
				path: "/lessons",
				element: <div>уроки</div>,
			},
			{
				path: "/problems",
				element: <div>проблемы</div>,
			},
			{
				path: "/tic-tac",
				element: <TicTacToe />,
			},
		],
	},
]);
