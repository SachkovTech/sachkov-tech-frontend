import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { ContentBlock } from "./ContentBlock";

export type Props = {
	children: React.ReactNode;
};

export function RootLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navigation />
			<main className="flex flex-col flex-1 px-2 sm:px-8 py-2 sm:py-5 ">
				<ContentBlock>
					<Outlet />
				</ContentBlock>
			</main>
		</div>
	);
}
